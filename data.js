const linksData = [
  {
    link: "https://acmsrm.in/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <image href="./ACM FINAL.png" width="24" height="24"/>
</svg>`,
    text: "Official Website",
    category: "important",
  },
  {
    link: "https://acmsrm.in/events",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="5" fill="#8B5CF6"/>
  <rect x="4" y="5" width="16" height="15" rx="2" fill="none" stroke="white" stroke-width="1.4"/>
  <line x1="4" y1="10" x2="20" y2="10" stroke="white" stroke-width="1.4"/>
  <line x1="8" y1="3" x2="8" y2="7" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="16" y1="3" x2="16" y2="7" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
  <rect x="7" y="13" width="2.5" height="2.5" rx="0.5" fill="white"/>
  <rect x="10.75" y="13" width="2.5" height="2.5" rx="0.5" fill="white"/>
  <rect x="14.5" y="13" width="2.5" height="2.5" rx="0.5" fill="white"/>
</svg>`,
    text: "Upcoming Events",
    category: "non-social",
  },
  {
    link: "https://acmsrm.in/JoinUs",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="5" fill="#10B981"/>
  <circle cx="9" cy="8" r="3" fill="none" stroke="white" stroke-width="1.4"/>
  <path d="M3 20v-1.5a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5V20" fill="none" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="19" y1="9" x2="19" y2="15" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
  <line x1="16" y1="12" x2="22" y2="12" stroke="white" stroke-width="1.4" stroke-linecap="round"/>
</svg>`,
    text: "Join the Core Team",
    category: "non-social",
  },

  // --- SOCIAL DOCK ICONS ---
  {
    link: "https://www.instagram.com/srm.acm/",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <defs>
    <radialGradient id="ig" cx="30%" cy="107%" r="130%">
      <stop offset="0%" stop-color="#fdf497"/>
      <stop offset="5%" stop-color="#fdf497"/>
      <stop offset="45%" stop-color="#fd5949"/>
      <stop offset="60%" stop-color="#d6249f"/>
      <stop offset="90%" stop-color="#285AEB"/>
    </radialGradient>
  </defs>
  <rect width="24" height="24" rx="6" ry="6" fill="url(#ig)"/>
  <rect x="4.5" y="4.5" width="15" height="15" rx="4" ry="4" fill="none" stroke="white" stroke-width="1.2"/>
  <circle cx="12" cy="12" r="3.8" fill="none" stroke="white" stroke-width="1.2"/>
  <circle cx="17" cy="7" r="1" fill="white"/>
</svg>`,
    text: "Instagram",
    category: "social",
  },

  {
    link: "https://www.linkedin.com/company/srmist-acm-student-chapter/posts/?feedView=all",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="4" ry="4" fill="#0A66C2"/>
  <rect x="4" y="10" width="3.5" height="10" rx="0.5" fill="white"/>
  <circle cx="5.75" cy="6.5" r="2.2" fill="white"/>
  <path d="M11 10h3.5v1.6a3.2 3.2 0 0 1 3-1.8c2.5 0 4 1.7 4 4.6v5.6h-3.5v-5a1.3 1.3 0 0 0-1.3-1.3 1.3 1.3 0 0 0-1.3 1.3v5H11Z" fill="white"/>
</svg>`,
    text: "LinkedIn",
    category: "social",
  },
  {
    link: "https://github.com/ACM-SRM-Student-Chapter",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="5" fill="#1b1f23"/>
  <path fill="white" d="M12 2.5a9.5 9.5 0 0 0-3 18.52c.47.09.64-.2.64-.45v-1.7c-2.64.57-3.2-1.27-3.2-1.27a2.52 2.52 0 0 0-1.05-1.39c-.86-.59.07-.58.07-.58a2 2 0 0 1 1.46 1 2 2 0 0 0 2.74.78 2 2 0 0 1 .6-1.26c-2.1-.24-4.32-1.05-4.32-4.68a3.66 3.66 0 0 1 .97-2.54 3.4 3.4 0 0 1 .1-2.5s.8-.26 2.6.97a9 9 0 0 1 4.74 0c1.8-1.23 2.6-.97 2.6-.97a3.4 3.4 0 0 1 .1 2.5 3.66 3.66 0 0 1 .97 2.54c0 3.64-2.22 4.44-4.34 4.67a2.24 2.24 0 0 1 .64 1.74v2.58c0 .25.17.55.65.45A9.5 9.5 0 0 0 12 2.5z"/>
</svg>`,
    text: "GitHub",
    category: "social",
  },
  {
    link: "https://x.com/acmsrm?s=21",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="5" fill="#000"/>
  <path fill="white" d="M17.5 3.5h2.5l-5.46 6.24L21 20.5h-5.03l-3.93-5.14-4.5 5.14H5l5.83-6.67L3.5 3.5h5.16l3.55 4.7 4.29-4.7zm-.87 15.3h1.38L7.46 4.92H6l10.63 13.88z"/>
</svg>`,
    text: "X (Twitter)",
    category: "social",
  },
  {
    link: "https://www.youtube.com/channel/UC3BtTD_QuSV4EdFZPr782XA",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <rect width="24" height="24" rx="5" fill="#FF0000"/>
  <path fill="white" d="M21.5 7.5s-.2-1.4-.83-2.03c-.8-.84-1.7-.84-2.1-.89C16.2 4.44 12 4.44 12 4.44s-4.2 0-6.57.14c-.4.05-1.3.05-2.1.9C2.7 6.1 2.5 7.5 2.5 7.5S2.3 9.13 2.3 10.76v1.52c0 1.63.2 3.26.2 3.26s.2 1.4.83 2.03c.8.84 1.85.81 2.32.9C6.9 18.6 12 18.6 12 18.6s4.2 0 6.57-.14c.4-.05 1.3-.05 2.1-.9.63-.63.83-2.03.83-2.03s.2-1.63.2-3.26v-1.52C21.7 9.13 21.5 7.5 21.5 7.5zM10.1 14.3V9.7l5.6 2.31-5.6 2.28z"/>
</svg>`,
    text: "YouTube",
    category: "social",
  },
];

export default linksData;
