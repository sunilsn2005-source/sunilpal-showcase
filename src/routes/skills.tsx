import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, Skills } from '@/components/portfolio/sections';
import { pageHead } from '@/data/portfolio';
export const Route = createFileRoute('/skills')({ head: () => pageHead('Skills | Sunil Pal', 'The languages, tools, and foundations I use as I continue learning and building.', '/skills'), component: Page });
function Page() { return <div className="container page-content"><PageHeading eyebrow='TECHNICAL SKILLS' title='My technical toolkit' description='The languages, tools, and foundations I use as I continue learning and building.'/><Skills/></div>; }
