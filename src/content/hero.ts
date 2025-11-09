// src/content/hero.ts

import type { HeroContent } from '../schemas/hero';

export const heroContent: HeroContent = {
  titleHighlights: [
    "30 dias de consultoria",
    "Não gostou? Não paga."
  ],
  subtitle: "Implemente nossa metodologia de Growth Hacking completa, veja resultados reais e só continue se fizer sentido pro seu negócio.",
  scarcity: "Restam apenas 5 vagas para este mês!",
  ctas: [
    {
      label: "Garantir minha vaga agora",
      href: "#contact-form",
      style: "primary",
      icon: "lucide:trending-up"
    },
    {
      label: "Como funciona a garantia?",
      href: "/garantia",
      style: "secondary",
    }
  ],
  socialProof: [
    { value: '+120', label: 'Projetos' },
    { value: '3.5x', label: 'ROI Médio' },
    { value: '98%', label: 'Satisfação' }
  ],
  roi:{
    label: "Roi",
    value: "3.5x"
  },
  analysis: {
    label: "Análise",
    value: "Tempo real",
    icon: "lucide:chart-spline"
  },
  sales: {
    label: "Vendas",
    value: "+35%"
  },
  // Poderia ser dinâmico em CMS
  chartBars: [
    { color: "bg-secondary-300", height: "h-16" },
    { color: "bg-secondary-300", height: "h-20" },
    { color: "bg-secondary-300", height: "h-28" },
    { color: "bg-secondary-300", height: "h-36" },
    { color: "bg-secondary-300", height: "h-40" },
    { color: "bg-secondary-300", height: "h-48" },
    { color: "bg-secondary-700", height: "h-54" }
  ]
};