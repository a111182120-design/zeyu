export type Locale = 'en' | 'zh' | 'es';

export const translations = {
  en: {
    nav: {
      about: "01. About",
      work: "02. Work",
      contact: "03. Contact"
    },
    hero: {
      available: "Available for Summer Internships",
      name: "Zeyu.",
      role: "Creative Dev.",
      desc: "A 19-year-old developer crafting beautiful and functional digital experiences. Bridging the gap between design and engineering."
    },
    about: {
      subtitle: "01. About",
      title: "Background & Education",
      p1: "Hello! I'm Zeyu, a 19-year-old Computer Science undergraduate deeply passionate about web technologies and artificial intelligence. I enjoy building applications that live on the internet, focusing on clean code and pixel-perfect design.",
      p2: "My journey into tech started when I realized that with code, I could bring the ideas in my head to life. Since then, I've been constantly learning and experimenting.",
      academicLife: "Academic Life",
      uni: "National Tech University",
      degree: "B.S. in Computer Science / 2023 - 2027",
      interests: "Interests & Hobbies",
      hobbies: [
        { label: "Open Source", desc: "Contributing to React eco" },
        { label: "Photography", desc: "Street & Architecture" },
        { label: "AI Experiments", desc: "Playing with LLMs" },
        { label: "Traveling", desc: "Exploring new cultures" }
      ]
    },
    work: {
      subtitle: "02. Work",
      title: "Selected Projects",
      projects: [
        {
          title: "Nova AI Analytics",
          description: "A dashboard for visualizing AI model performance. Built with React, Tailwind, and D3.js.",
          tech: ["React", "TypeScript", "D3.js", "Tailwind"],
          year: "2024"
        },
        {
          title: "Flow State Music",
          description: "A minimalist Pomodoro timer integrated with lo-fi beats, designed for developers.",
          tech: ["Next.js", "Framer Motion", "Supabase"],
          year: "2023"
        },
        {
          title: "Lingo Chatbot",
          description: "Multilingual translation agent using Gemini API for real-time collaboration chats.",
          tech: ["Vite", "Gemini API", "Tailwind"],
          year: "2024"
        }
      ],
      viewProject: "View Project"
    },
    contact: {
      subtitle: "03. What's Next?",
      title: "Get In Touch",
      desc: "Currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      callToAction: "Start Discussion",
      formName: "Name",
      formEmail: "Email",
      formSubject: "Subject",
      formMessage: "Message",
      formSend: "Send Message",
      formSending: "Sending...",
      formSuccess: "Message sent! I will get back to you soon.",
      designedBy: "Designed & Built by Ethan Chen © 2026",
      aiTip: "Ask my AI assistant using the button below for immediate answers in any language."
    }
  },
  zh: {
    nav: {
      about: "01. 關於我",
      work: "02. 作品集",
      contact: "03. 聯絡資訊"
    },
    hero: {
      available: "接受暑期實習邀請",
      name: "則宇",
      role: "創意開發者",
      desc: "十九歲的開發者，致力於打造美觀且實用的數位體驗，在設計與工程之間建立橋樑。"
    },
    about: {
      subtitle: "01. 關於我",
      title: "背景與學業",
      p1: "你好！我是 則宇，一位 19 歲的大學計算機科學系學生，對網頁技術和人工智慧充滿熱情。我喜歡建立在網路上運作的應用程式，專注於乾淨的程式碼與完美的設計細節。",
      p2: "當我意識到我可以透過程式碼將腦海中的想法化為現實時，便開啟了我的科技之旅。從那時起，我不斷地學習與實驗。",
      academicLife: "學術生活",
      uni: "國立科技大學",
      degree: "計算機科學學士 / 2023 - 2027",
      interests: "興趣與嗜好",
      hobbies: [
        { label: "開源貢獻", desc: "參與 React 生態系" },
        { label: "攝影", desc: "街頭與建築攝影" },
        { label: "AI 實驗", desc: "大型語言模型應用" },
        { label: "旅行", desc: "探索新文化" }
      ]
    },
    work: {
      subtitle: "02. 作品集",
      title: "精選專案",
      projects: [
        {
          title: "Nova AI Analytics",
          description: "用於視覺化 AI 模型表現的數據儀表板。使用 React, Tailwind 和 D3.js 構建。",
          tech: ["React", "TypeScript", "D3.js", "Tailwind"],
          year: "2024"
        },
        {
          title: "Flow State Music",
          description: "結合 Lo-fi 音樂的極簡番茄鐘，專為工程師設計。",
          tech: ["Next.js", "Framer Motion", "Supabase"],
          year: "2023"
        },
        {
          title: "Lingo Chatbot",
          description: "使用 Gemini API 打造的多語言即時翻譯協助機器人。",
          tech: ["Vite", "Gemini API", "Tailwind"],
          year: "2024"
        }
      ],
      viewProject: "檢視專案"
    },
    contact: {
      subtitle: "03. 接下來？",
      title: "聯絡我",
      desc: "目前正在尋找新的機會，我的信箱隨時開放。無論有什麼問題或只是想打個招呼，我都會盡快回覆！",
      callToAction: "開始洽談",
      formName: "姓名",
      formEmail: "電子郵件",
      formSubject: "主旨",
      formMessage: "訊息內容",
      formSend: "發送訊息",
      formSending: "發送中...",
      formSuccess: "訊息已發送！我會盡快回覆您。",
      designedBy: "由 zeyu 設計開發 © 2026",
      aiTip: "有問題嗎？可以使用下方的 AI 助手按鈕用您的語言與我對話。"
    }
  },
  es: {
    nav: {
      about: "01. Sobre Mí",
      work: "02. Trabajos",
      contact: "03. Contacto"
    },
    hero: {
      available: "Disponible para Prácticas de Verano",
      name: "Ethan Chen.",
      role: "Desarrollador Creativo",
      desc: "Un desarrollador de 19 años creando experiencias digitales hermosas y funcionales. Construyendo puentes entre el diseño y la ingeniería."
    },
    about: {
      subtitle: "01. Sobre Mí",
      title: "Antecedentes y Educación",
      p1: "¡Hola! Soy Ethan, un estudiante de ciencias de la computación de 19 años profundamente apasionado por las tecnologías web y la inteligencia artificial. Disfruto construir aplicaciones que viven en internet, centrándome en código limpio y un diseño perfecto al píxel.",
      p2: "Mi viaje hacia la tecnología comenzó cuando me di cuenta de que con el código podía dar vida a las ideas en mi cabeza. Desde entonces, no he dejado de aprender y experimentar.",
      academicLife: "Vida Académica",
      uni: "Universidad Nacional de Tecnología",
      degree: "Licenciatura en Informática / 2023 - 2027",
      interests: "Intereses y Aficiones",
      hobbies: [
        { label: "Código Abierto", desc: "Contribuciones a React" },
        { label: "Fotografía", desc: "Callejera y Arquitectura" },
        { label: "Experimentos de IA", desc: "Jugando con LLMs" },
        { label: "Viajes", desc: "Explorando nuevas culturas" }
      ]
    },
    work: {
      subtitle: "02. Trabajos",
      title: "Proyectos Destacados",
      projects: [
        {
          title: "Nova AI Analytics",
          description: "Un panel de control para visualizar el rendimiento de modelos de IA. Construido con React, Tailwind y D3.js.",
          tech: ["React", "TypeScript", "D3.js", "Tailwind"],
          year: "2024"
        },
        {
          title: "Flow State Music",
          description: "Un temporizador Pomodoro minimalista integrado con ritmos lo-fi, diseñado para desarrolladores.",
          tech: ["Next.js", "Framer Motion", "Supabase"],
          year: "2023"
        },
        {
          title: "Lingo Chatbot",
          description: "Agente de traducción multilingüe usando la API de Gemini para conversaciones en tiempo real.",
          tech: ["Vite", "Gemini API", "Tailwind"],
          year: "2024"
        }
      ],
      viewProject: "Ver Proyecto"
    },
    contact: {
      subtitle: "03. ¿Qué Sigue?",
      title: "Ponte en Contacto",
      desc: "Actualmente busco nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tengas una pregunta o solo quieras saludar, ¡haré lo posible por responder!",
      callToAction: "Iniciar Discusión",
      formName: "Nombre",
      formEmail: "Correo",
      formSubject: "Asunto",
      formMessage: "Mensaje",
      formSend: "Enviar Mensaje",
      formSending: "Enviando...",
      formSuccess: "¡Mensaje enviado! Te responderé pronto.",
      designedBy: "Diseñado y Desarrollado por Ethan Chen © 2026",
      aiTip: "Pregúntale a mi asistente de IA usando el botón abajo para obtener respuestas en cualquier idioma."
    }
  }
};
