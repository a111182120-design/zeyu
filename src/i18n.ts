export type Locale = 'en' | 'zh' | 'es';

export const translations = {
  en: {
    nav: {
      about: "01. About",
      work: "02. Work",
      contact: "03. Contact"
    },
    hero: {
      available: "Seeking Maritime Training Opportunities",
      name: "則宇.",
      role: "Marine Engineering Student",
      desc: "A dedicated 4th-year student of Marine Engineering with a passion for the ocean and navigation. Committed to excellence in maritime operations."
    },
    about: {
      subtitle: "01. About",
      title: "Background & Education",
      p1: "Hello! I'm Zeyu Lai, a fourth-year student in the Department of Marine Engineering. I have been deeply interested in the ocean and maritime work since I was a child.",
      p2: "I chose to study in a maritime-related department, hoping to become an excellent sailor and professional mariner in the future.",
      p3: "This experience has given me a deeper understanding of teamwork and discipline among crew members, and has cultivated my calmness and sense of responsibility when facing challenges.",
      p4: "I have a cheerful personality, am kind to others, and can get along harmoniously with people from different backgrounds. I firmly believe that good communication and teamwork are indispensable elements in maritime work.",
      academicLife: "Academic Life",
      uni: "National Kaohsiung University of Science and Technology",
      degree: "Marine Engineering / 4th Year",
      interests: "Interests & Hobbies",
      hobbies: [
        { label: "Traveling", desc: "Exploring new cultures" }
      ]
    },
    work: {
      subtitle: "02. Work",
      title: "Selected Projects",
      projects: [
        {
          title: "AI Experiments",
          description: "Exploring the intersection of maritime engineering and artificial intelligence through 3D modeling and generated imagery.",
          tech: ["Tripo AI", "Generative AI", "3D Modeling"],
          year: "2026"
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
      designedBy: "Designed & Built by 則宇 © 2026",
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
      available: "尋求航海實習機會",
      name: "則宇.",
      role: "航海科學生",
      desc: "一名熱愛海洋的航海科四年級學生，致力於學習專業航海知識與海上操作，期許未來能成為一名優秀的船員。"
    },
    about: {
      subtitle: "01. 關於我",
      title: "背景與學業",
      p1: "大家好，我叫賴則宇，我是一名就讀五專航海科四年級的學生。",
      p2: "從小對海洋與航海工作充滿興趣，因此選擇就讀航海相關科系，希望未來能成為一名優秀的船員。",
      p3: "這段經驗讓我更了解船員之間的團隊合作與紀律精神，也培養了我在面對挑戰時的冷靜與責任感。",
      p4: "我個性開朗、待人親切，能夠與不同背景的人和諧相處。我深信良好的溝通與團隊合作是航海工作中不可或缺的要素。",
      academicLife: "學術生活",
      uni: "國立高雄科技大學",
      degree: "五專航海科 / 四年級",
      interests: "興趣與嗜好",
      hobbies: [
        { label: "世界旅行", desc: "探索不同港口文化" }
      ]
    },
    work: {
      subtitle: "02. 作品集",
      title: "精選專案",
      projects: [
        {
          title: "AI 實踐與實驗",
          description: "探索航海工程與人工智慧的交匯點，包含 3D 模型生成與 AI 影像應用。",
          tech: ["Tripo AI", "Generative AI", "3D Modeling"],
          year: "2026"
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
      designedBy: "由 則宇 設計開發 © 2026",
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
      available: "Buscando Oportunidades de Prácticas Marítimas",
      name: "則宇.",
      role: "Estudiante de Ingeniería Marina",
      desc: "Un estudiante dedicado de cuarto año de Ingeniería Marina con pasión por el océano y la navegación. Comprometido con la excelencia en las operaciones marítimas."
    },
    about: {
      subtitle: "01. Sobre Mí",
      title: "Antecedentes y Educación",
      p1: "¡Hola! Soy Zeyu Lai, estudiante de cuarto año del Departamento de Ingeniería Marina. He estado profundamente interesado en el océano y el trabajo marítimo desde que era niño.",
      p2: "Elegí estudiar en un departamento relacionado con el mar, con la esperanza de convertirme en un excelente marinero en el futuro.",
      p3: "Esta experiencia me ha brindado una comprensión más profunda del trabajo en equipo y la disciplina entre los miembros de la tripulación, y ha cultivado mi calma y sentido de responsabilidad al enfrentar desafíos.",
      p4: "Tengo una personalidad alegre, soy amable con los demás y puedo llevarme armoniosamente con personas de diferentes orígenes. Creo firmemente que la buena comunicación y el trabajo en equipo son elementos indispensables en el trabajo marítimo.",
      academicLife: "Vida Académica",
      uni: "Universidad Nacional de Ciencia y Tecnología de Kaohsiung",
      degree: "Ingeniería Marina / 4° Año",
      interests: "Intereses y Aficiones",
      hobbies: [
        { label: "Viajes", desc: "Explorando nuevas culturas" }
      ]
    },
    work: {
      subtitle: "02. Trabajos",
      title: "Proyectos Destacados",
      projects: [
        {
          title: "Experimentos de IA",
          description: "Explorando la intersección de la ingeniería marina y la inteligencia artificial a través del modelado 3D y la generación de imágenes.",
          tech: ["Tripo AI", "Generative AI", "3D Modeling"],
          year: "2026"
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
      designedBy: "Diseñado y Desarrollado por 則宇 © 2026",
      aiTip: "Pregúntale a mi asistente de IA usando el botón abajo para obtener respuestas en cualquier idioma."
    }
  }
};
