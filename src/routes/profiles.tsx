import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, Profiles } from '@/components/portfolio/sections';
import { pageHead } from '@/data/portfolio';
export const Route = createFileRoute('/profiles')({ head: () => pageHead('Profiles | Sunil Pal', 'Find my projects, follow my problem-solving journey, or connect professionally.', '/profiles'), component: Page });
function Page() { return <div className="container page-content"><PageHeading eyebrow='CODING & PROFESSIONAL PROFILES' title='Code. Practice. Connect.' description='Find my projects, follow my problem-solving journey, or connect professionally.'/><Profiles/></div>; }
