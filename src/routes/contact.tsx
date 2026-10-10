import { createFileRoute } from '@tanstack/react-router';
import { Contact } from '@/components/portfolio/sections';
import { pageHead } from '@/data/portfolio';
export const Route = createFileRoute('/contact')({head:()=>pageHead('Contact | Sunil Pal','Connect with Sunil Pal about opportunities, projects, and technology. Get in touch by email or LinkedIn.','/contact'),component:Page});
function Page(){return <div className="container page-content"><Contact/></div>}
