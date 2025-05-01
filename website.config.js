export const personalInfo = {
  name: 'Wenxuan Huang',
  chineseName: '黄文轩', // 添加这一行
  profilePicture: '/profile.jpg', //optional
  role: 'Master Student',
  university: ' ECNU',
  universityWebsite: 'https://www.ecnu.edu.cn/',
  // email: 'osilly0616@gmail.com',
  socialMedia: [
    { name: 'Email', url: 'osilly0616@gmail.com' },
    // { name: 'Twitter', url: '' },
    {
      name: 'GitHub',
      url: 'https://github.com/Osilly',
    },
    // { name: 'LinkedIn', url: 'https://linkedin.com' },
    // { name: 'ORCID', url: 'https://orcid.org/0009-0001-9656-813X' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=6Ys6HgsAAAAJ&hl=en' },
  ],
};

export const websiteInfo = {
  title: personalInfo.name,
  description: 'Page of Wenxuan Huang',
  // teaserImage: "/teaser.jpg",
};

export const navigations = [
  { name: 'About me', route: '/' },
  { name: 'Publications', route: '/publications' },
  // { name: "News", route: "/news" },
  // { name: 'About', route: '/about' },
  { name: 'CV', route: '/cv.pdf' },
];

export const homepageSection = {
  AboutSection: true,
  NewsSection: true,
  SelectedPublicationsSection: true,
  OtherPublicationsSection: true,
  ProjectSection: false,
};

export const fontStyle = 'sans'; // "sans" | "serif" | "mono"
