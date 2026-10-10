import { createFileRoute } from '@tanstack/react-router';
import { PageHeading, Education } from '@/components/portfolio/sections';
import { pageHead } from '@/data/portfolio';
export const Route = createFileRoute('/education')({ head: () => pageHead('Education | Sunil Pal', 'My academic journey in Artificial Intelligence and Machine Learning.', '/education'), component: Page });
function Page() { return <div className="container page-content"><PageHeading eyebrow='EDUCATION' title='Building a strong foundation' description='My academic journey in Artificial Intelligence and Machine Learning.'/><Education/></div>; }
