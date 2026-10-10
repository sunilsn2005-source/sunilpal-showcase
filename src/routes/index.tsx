import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Hero, IntroStrip, Projects, Contact } from '@/components/portfolio/sections';
import { pageHead, profile } from '@/data/portfolio';
export const Route = createFileRoute('/')({
 head: () => ({...pageHead('Sunil Pal | Aspiring AI/ML Engineer', 'Meet Sunil Pal, a final-year B.Tech AIML student graduating in 2027. Explore his projects, technical skills, education, and learning journey.', '/'), scripts: [{type:'application/ld+json',children:JSON.stringify({'@context':'https://schema.org','@type':'Person',name:profile.name,description:profile.title,email:profile.email,sameAs:[profile.github,profile.linkedin,profile.leetcode]})}]}), component: Index,
});
function Index(){return <><Hero/><IntroStrip/><div className="container"><Projects preview/><section className="home-about"><div><div className="eyebrow"><span/>A LITTLE ABOUT ME</div><h2>Driven by curiosity.<br/>Grounded in learning.</h2></div><div><p>I'm a final-year B.Tech student specializing in Artificial Intelligence and Machine Learning. I enjoy exploring web technology, programming, and cybersecurity—and learning by creating things that work.</p><div className="home-skills">{['Python','C++','React','JavaScript','SQL','Git'].map(s=><span key={s}>{s}</span>)}</div><Button asChild variant="link"><Link to="/about">More about me <ArrowUpRight/></Link></Button></div></section><Contact compact/></div></>}
