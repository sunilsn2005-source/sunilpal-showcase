import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, About } from '@/components/portfolio/sections';
import { pageHead } from '@/data/portfolio';
export const Route = createFileRoute('/about')({ head: () => pageHead('About | Sunil Pal', 'A final-year AIML student with a curiosity for technology and a hands-on approach to learning.', '/about'), component: Page });
function Page() { return <div className="container page-content"><PageHeading eyebrow='ABOUT ME' title='The person behind the projects' description='A final-year AIML student with a curiosity for technology and a hands-on approach to learning.'/><About/></div>; }
