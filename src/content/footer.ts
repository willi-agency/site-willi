import type { FooterContent } from '../schemas/footer';
import { config } from '../config/site'; // Puxe dados globais daqui!

export const footerContent: FooterContent = {
  sections: [
    // Coluna 1: Logo, slogan, parceiros
    {
      blocks: [
        { type: 'logo', src: config.company.logo, alt: config.company.name },
        { type: 'slogan', text: "Transformamos empresas através de estratégias digitais consistentes e resultados comprováveis. PREMIER" },
        { type: 'partners', items: [
            { src: '/partners/google.svg', alt: 'Google Partner' },
            { src: '/partners/meta.svg',   alt: 'Meta Business Partner' }
          ]
        }
      ]
    },
    // Coluna 2: Links úteis
    {
      blocks: [
        { type: 'title', text: 'Links Úteis' },
        { type: 'links', items: [
          { label: 'Home',                href: '/' },
          { label: 'Sobre a Quality SMI', href: '/sobre' },
          { label: 'Contato',             href: '/contato' },
          { label: 'Blog',                href: '/blog' },
          { label: 'Privacidade',         href: '/privacidade' }
        ]}
      ]
    },
    // Coluna 3: Contato/endereço/email/telefones
    {
      blocks: [
        { type: 'title', text: 'Contato' },
        { type: 'address', lines: [
          config.company.address.street, // Rua Santo Antônio, 1189
          config.company.address.neighborhood, // Vila Galvão, 
          config.company.address.city + ' - ' + config.company.address.region, // Guarulhos - São Paulo - SP 
          config.company.address.postalCode, // CEP: 07071-000
        ]},
        { type: 'contact', items: [
          { label: config.company.contact.email.label, href: `mailto:${config.company.contact.email.label}`, icon: 'lucide:mail' },
          { label: config.company.contact.phones.fixo.label, href: config.company.contact.phones.fixo.url, icon: 'lucide:phone' },
          { label: config.company.contact.phones.whatsapp.label, href: config.company.contact.phones.whatsapp.url, icon: 'lucide:phone' },
        ]}
      ]
    },
    // Coluna 4: Social
    {
      blocks: [
        { type: 'title', text: 'Redes Sociais' },
        { type: 'social', items: [
          { label: 'Instagram', icon: 'lucide:instagram', href: config.company.social.instagram.url },
          { label: 'Facebook',  icon: 'lucide:facebook',  href: config.company.social.facebook.url },
          { label: 'LinkedIn',  icon: 'lucide:linkedin',  href: config.company.social.linkedin },
          { label: 'Youtube',   icon: 'lucide:youtube',   href: config.company.social.youtube },
        ]}
      ]
    },
    // Linha do CTA com form/whatsapp
    {
      blocks: [
        
      ]
    }
  ],

  cta: [
    { 
      type: 'cta',
      headline: "Transforme seu negócio com estratégias digitais que realmente funcionam",
      placeholder: "Digite seu WhatsApp",
      button: "Análise Gratuita"
    }
  ],
  // Rodapé legal (linha inferior)
  legal: [
    { type: 'copyright', text: `Quality SMI © Todos os Direitos Reservados` },
    { type: 'links', items: [
        { label: 'Mapa do Site', href: '/sitemap' }
    ]}
  ]
};