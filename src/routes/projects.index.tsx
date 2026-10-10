import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, Projects } from '@/components/portfolio/sections';
import { pageHead } from '@/data/portfolio';
export const Route = createFileRoute('/projects/')({ head: () => pageHead('Projects | Sunil Pal', 'A selection of student projects and interface explorations. Each one is a step in my learning journey.', '/projects'), component: Page });
function Page() { return <div className="container page-content"><PageHeading eyebrow='SELECTED WORK' title='Learning by building.' description='A selection of student projects and interface explorations. Each one is a step in my learning journey.'/><Projects/></div>; }
