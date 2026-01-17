import { CaseStudy, FAQItem, Project, Step } from './types';

export const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Como Funciona', href: '#processo' },
  { label: 'Cases', href: '#cases' },
  { label: 'Blog', href: '#' },
];

export const CLIENT_LOGOS = [
  'Marilym Chic', 'Monarch Street', 'LextLevel', 'Xpyrian', 
  'Construtora Rocha', 'Star Comercio', 'Prime House', 'Alphas Bakes'
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Agente Corretor Korbel",
    type: "automation",
    description: "Corretor IA 24/7 que qualifica leads, recomenda imóveis e agenda visitas via WhatsApp.",
    image: "https://picsum.photos/600/400?random=100",
    tags: ["WhatsApp IA", "Qualificação", "Agendamento"]
  },
  {
    id: 2,
    title: "Agente Assistente",
    type: "automation",
    description: "Do atendente IA aos relatórios de otimização. Sua equipe 24h enviando insights para você.",
    image: "https://picsum.photos/600/400?random=101",
    tags: ["Relatórios", "Insights", "Gestão"]
  },
  {
    id: 3,
    title: "Captura de Leads Automática", // Hunter Lead Scraper
    type: "automation",
    description: "Captura automática de leads via Google e canais online com validação de contato.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["Google Maps", "Validação", "Big Data"]
  },
  {
    id: 4,
    title: "Máquina de Vendas WhatsApp", // SDR Cadence Flow
    type: "automation",
    description: "Disparos e follow-up automatizados no Whatsapp + CRM para nutrir e reaquecer leads.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Pipedrive", "WhatsApp API", "Follow-up"]
  },
  {
    id: 5,
    title: "Portal Imobiliário Inteligente", // Prime House
    type: "website",
    description: "Portal imobiliário com cadastro de leads e integração com Jetimob CRM.",
    image: "https://picsum.photos/600/400?random=4",
    tags: ["Integração Jetimob", "Portal", "SEO"]
  },
  {
    id: 6,
    title: "LextLevel Imersivo",
    type: "website",
    description: "Landing page imersiva de alta conversão de gestão empresarial. Backup e segurança automatica com IA.",
    image: "https://picsum.photos/600/400?random=102",
    tags: ["Alta Conversão", "Segurança IA", "Landing Page"]
  },
  {
    id: 7,
    title: "Content Engine SEO",
    type: "website",
    description: "Pesquisa tendências, gera artigos SEO e posta automaticamente em site blog.",
    image: "https://picsum.photos/600/400?random=103",
    tags: ["Automação de Blog", "SEO Automático", "Gemini"]
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    id: 1,
    title: "Coleta de Dados",
    description: "Análise profunda do seu fluxo atual e necessidades.",
    icon: "Database"
  },
  {
    id: 2,
    title: "Personalização",
    description: "Desenvolvimento da solução de IA sob medida.",
    icon: "Cpu"
  },
  {
    id: 3,
    title: "Otimização",
    description: "Testes, feedbacks e ajustes finos de performance.",
    icon: "Settings"
  },
  {
    id: 4,
    title: "Ativação",
    description: "Go-live com seus agentes IA trabalhando 24/7.",
    icon: "Zap"
  }
];

export const TESTIMONIALS: CaseStudy[] = [
  {
    id: 1,
    client: "José Rocha",
    role: "CEO, Construtora Rocha",
    testimonial: "+300% leads qualificados com ticket acima de 200k em 3 meses.",
    image: "https://picsum.photos/100/100?random=10",
    metric: "+300% Leads"
  },
  {
    id: 2,
    client: "Danilo Prime",
    role: "Fundador, Prime House",
    testimonial: "Nosso site agora converte 30% dos visitantes em cadastros reais no CRM.",
    image: "https://picsum.photos/100/100?random=11",
    metric: "30% Conversão"
  },
  {
    id: 3,
    client: "James",
    role: "LextLevel",
    testimonial: "O agente inteligente reduziu em 80% o no-show nas nossas reuniões de vendas.",
    image: "https://picsum.photos/100/100?random=12",
    metric: "-80% No-Show"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Como a Korbel AI pode ajudar o meu negócio?",
    answer: "Automatizamos prospecção, qualificação e agendamentos, integrando seu fluxo diário para que sua equipe foque apenas em fechar negócios."
  },
  {
    question: "Preciso ter um CRM para implementar a IA?",
    answer: "Sim, funcionamos integrados ao CRM. Já temos integração com Jetimob, Vista, PipeRun e mais de 40 outros. Se você não tem, ajudamos a implementar."
  },
  {
    question: "Quanto tempo leva para criar meu projeto?",
    answer: "Em média 7 a 14 dias para um MVP funcional com ativação imediata após aprovação."
  },
  {
    question: "Preciso de conhecimentos técnicos?",
    answer: "Não. Entregamos interfaces intuitivas via WhatsApp e seu CRM atual. Nós cuidamos de toda a complexidade técnica."
  }
];
