export const profile = {
  name: 'Sunil Pal', title: 'Aspiring AI/ML Engineer', email: 'sunilsn2005@gmail.com',
  location: 'India', graduation: 2027, degree: 'Bachelor of Technology', branch: 'Artificial Intelligence & Machine Learning',
  github: 'https://github.com/sunilsn2005-source', linkedin: 'https://www.linkedin.com/in/sunil-pal-927310324',
  leetcode: 'https://leetcode.com/u/PALSUN/', resume: null as string | null, photo: null as string | null,
  institution: null as string | null,
  supporting: 'Building practical technology solutions through programming, web development, and continuous learning.',
};
export const skills = [
  { name: 'Programming languages', icon: 'code', items: ['C++', 'Python', 'Java', 'JavaScript'] },
  { name: 'Web development', icon: 'web', items: ['HTML', 'CSS', 'React'] },
  { name: 'Databases', icon: 'database', items: ['SQL', 'MySQL'] },
  { name: 'Computer science', icon: 'logic', items: ['Data Structures and Algorithms (DSA)'] },
  { name: 'Developer tools', icon: 'tools', items: ['Git', 'GitHub'] },
];
export const projects = [
  { slug: 'razorpay-ui-clone', title: 'Razorpay UI Clone', category: 'Frontend Web Development', summary: 'A frontend recreation of the Razorpay website interface for educational and portfolio purposes.', note: 'An independent educational project. Not affiliated with Razorpay; no real payment processing is claimed.', technologies: [] as string[], features: [] as string[], repository: null as string | null, demo: null as string | null, contribution: null as string | null },
  { slug: 'smart-attendance-system', title: 'Smart Attendance System', category: 'Student project', summary: 'A student project focused on a smart attendance application.', note: 'Implementation details are awaiting confirmation. No facial recognition, AI, biometrics, or database functionality is assumed.', technologies: [] as string[], features: [] as string[], repository: null as string | null, demo: null as string | null, contribution: null as string | null },
];
export const workshops = [
  { title: 'ChatGPT Prompt Engineering', status: 'Issuer, official title & date to confirm', icon: 'sparkles' },
  { title: 'GitHub Copilot Workshop', status: 'Course or workshop format to confirm', icon: 'code' },
  { title: 'Web Technology Training Workshop at Softpro', status: 'Official title & date to confirm', icon: 'web' },
  { title: 'Introduction to Hardware and Software Workshop at Infosys', status: 'Official organizer, title & date to verify', icon: 'cpu' },
];
export const interests = ['Web Technology', 'Cybersecurity', 'Artificial Intelligence & Machine Learning', 'Programming & problem-solving'];
export function mailto(email: string) { return `mailto:${encodeURIComponent(email).replace('%40', '@')}?subject=${encodeURIComponent('Let’s connect — portfolio inquiry')}`; }
export function hasResume(url: string | null) { return Boolean(url && (/^https:\/\/.+\.pdf(?:\?.*)?$/i.test(url) || /^\/(?!\/).+\.pdf$/i.test(url))); }
export function pageHead(title: string, description: string, path: string) {
  return { meta: [{ title }, { name: 'description', content: description }, { property: 'og:title', content: title }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { property: 'og:url', content: path }, { name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: path }] };
}
