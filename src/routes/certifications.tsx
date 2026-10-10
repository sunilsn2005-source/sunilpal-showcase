import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, Certifications } from '@/components/portfolio/sections';
import { pageHead } from '@/data/portfolio';
export const Route = createFileRoute('/certifications')({ head: () => pageHead('Certifications | Sunil Pal', 'Learning experiences that support my exploration of technology.', '/certifications'), component: Page });
function Page() { return <div className="container page-content"><PageHeading eyebrow='CONTINUOUS LEARNING' title='Certifications & Workshops' description='Learning experiences that support my exploration of technology.'/><Certifications/></div>; }
