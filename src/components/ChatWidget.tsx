import { GoogleGenAI } from '@google/genai';
import { Bot, MessageCircle, Send, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import React, { useEffect, useRef, useState } from 'react';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || '' });

type Message = {
  id: string;
  role: 'user' | 'model';
  content: string;
};

const SYSTEM_INSTRUCTION = `You are the personal AI assistant for a 19-year-old male developer. 
Your goal is to represent him, answer questions about his bio, education, hobbies, and portfolio, 
and discuss potential collaborations with visitors. 
You are friendly, professional, and you must respond in the language the user speaks. 
If they ask for collaboration, gather their details or suggest sending an email.
Here are his details:
- Age: 19
- Gender: Male
- Education: Undergraduate student majoring in Computer Science or related field.
- Hobbies: Coding, reading, photography, and exploring AI.
- Portfolio: Includes web apps, AI prototypes, and open source contributions.
Always be concise, polite, and persuasive about his skills.`;

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'model',
      content: 'Hello! I am the personal AI assistant. You can ask me anything about his background, or we can discuss collaboration opportunities in any language. How can I help you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Initialize chat instance
  const chatRef = useRef<any>(null);

  useEffect(() => {
    if (!chatRef.current) {
        chatRef.current = ai.chats.create({
            model: 'gemini-3.1-flash-preview',
            config: {
                systemInstruction: SYSTEM_INSTRUCTION,
            }
        });
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input.trim();
    setInput('');
    setMessages((prev) => [
      ...prev,
      { id: Date.now().toString(), role: 'user', content: userText },
    ]);
    setIsLoading(true);

    try {
      const response = await chatRef.current.sendMessageStream({ message: userText });
      
      let botMessageId = (Date.now() + 1).toString();
      setMessages((prev) => [
        ...prev,
        { id: botMessageId, role: 'model', content: '' },
      ]);

      for await (const chunk of response) {
        setMessages((prev) => {
          const newMessages = [...prev];
          const lastMessageIdx = newMessages.length - 1;
          if (newMessages[lastMessageIdx].role === 'model') {
            newMessages[lastMessageIdx] = {
                ...newMessages[lastMessageIdx],
                content: newMessages[lastMessageIdx].content + (chunk.text || '')
            }
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: 'model',
          content: 'Oops, something went wrong. Please try again later.',
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-20 right-0 w-80 sm:w-96 bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col h-[500px] max-h-[80vh]"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-indigo-600/10 flex items-center justify-center text-indigo-600 border border-indigo-600/20">
                    <Bot size={18} />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">AI Assistant</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                      <span className="text-[10px] text-slate-500 uppercase tracking-wider">Online</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-slate-400 hover:text-slate-900 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-white">
                {messages.map((msg) => (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    key={msg.id}
                    className={`flex ${
                      msg.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-[85%] px-4 py-3 text-sm ${
                        msg.role === 'user'
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-50 border border-slate-200 text-slate-700'
                      }`}
                    >
                      <p className="whitespace-pre-wrap leading-relaxed">
                        {msg.content}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-slate-50 border border-slate-200 text-slate-400 px-4 py-3 text-sm flex gap-1.5 items-center">
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                      <span className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 border-t border-slate-200 bg-slate-50">
                <form
                  onSubmit={handleSend}
                  className="flex items-center gap-2 bg-white border border-slate-200 p-1"
                >
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    className="flex-1 bg-transparent border-none outline-none px-3 text-sm text-slate-900 placeholder:text-slate-400"
                  />
                  <button
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="p-2 bg-indigo-600 text-white hover:bg-slate-900 disabled:opacity-50 transition-colors"
                  >
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 shadow-xl flex items-center justify-center transition-colors ${
            isOpen ? 'bg-slate-900 text-white' : 'bg-indigo-600 text-white hover:bg-slate-900'
          }`}
        >
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </motion.button>
      </div>
    </>
  );
}
