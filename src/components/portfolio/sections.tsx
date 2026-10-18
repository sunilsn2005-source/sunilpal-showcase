import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  Globe,
  Database,
  GitBranch,
  Blocks,
  GraduationCap,
  MapPin,
  Mail,
  Github,
  Linkedin,
  Sparkles,
  Cpu,
  Download,
  BookOpen,
  Shield,
  Check,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  profile,
  skills,
  projects,
  workshops,
  interests,
  mailto,
  hasResume,
} from "@/data/portfolio";
import { Socials } from "./layout";
import coreImage from "@/assets/engineering-core.jpg";
const icons = {
  code: Code2,
  web: Globe,
  database: Database,
  logic: Blocks,
  tools: GitBranch,
  sparkles: Sparkles,
  cpu: Cpu,
};
export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="page-heading">
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
}
export function ResumeButton() {
  return hasResume(profile.resume) && profile.resume ? (
    <Button asChild variant="outline" size="lg">
      <a href={profile.resume} download>
        <Download />
        Download Resume
      </a>
    </Button>
  ) : (
    <Button variant="outline" size="lg" disabled title="Resume PDF not yet supplied">
      <Download />
      Resume coming soon
    </Button>
  );
}
export function Hero() {
  return (
    <section className="hero">
      <div className="hero-portrait">
        <img
          className="hero-art"
          src={coreImage}
          width={1536}
          height={1024}
          alt="Portrait of Sunil Pal"
          fetchPriority="high"
        />
      </div>
      <div className="hero-shade" />
      <div className="container hero-content">
        <div className="eyebrow">
          <span />
          FINAL-YEAR B.TECH · CLASS OF 2027
        </div>
        <p className="hello">Hello, I'm</p>
        <h1>
          Sunil Pal<span className="text-primary">.</span>
        </h1>
        <h2>
          Aspiring <span className="text-primary">AI/ML Engineer</span>
        </h2>
        <p className="hero-description">{profile.supporting}</p>
        <p className="hero-subline">An AIML student turning curiosity into hands-on projects.</p>
        <div className="hero-actions">
          <Button asChild size="lg">
            <Link to="/projects">
              View My Projects <ArrowUpRight />
            </Link>
          </Button>
          <ResumeButton />
        </div>
        <div className="hero-social">
          <Socials />
          <span className="social-divider" />
          <span>
            <MapPin size={14} /> India
          </span>
          <Link to="/contact" className="hero-contact">
            Contact me <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
      <div className="hero-caption">
        <span className="mini-cross">+</span> CURIOUS MIND. PRACTICAL SOLUTIONS.
      </div>
    </section>
  );
}
export function IntroStrip() {
  return (
    <div className="intro-strip">
      <div className="container intro-grid">
        <div>
          <GraduationCap />
          <span>
            B.Tech, AIML<small>Final-year student</small>
          </span>
        </div>
        <div>
          <Code2 />
          <span>
            Project-led learning<small>Ideas into applications</small>
          </span>
        </div>
        <div>
          <BookOpen />
          <span>
            Graduating in 2027<small>Learning. Building. Improving.</small>
          </span>
        </div>
      </div>
    </div>
  );
}
export function ProjectArt({ index }: { index: number }) {
  return (
    <div
      className={`project-art project-art-${index}`}
      aria-label={
        index === 0
          ? "Concept illustration for Razorpay UI Clone, not a project screenshot"
          : "Concept illustration for Smart Attendance System, not a project screenshot"
      }
      role="img"
    >
      {index === 0 ? (
        <>
          <div className="art-browser">
            <span />
            <span />
            <span />
            <div className="browser-address">frontend / interface-study</div>
          </div>
          <div className="razor-art">
            <span className="razor-word">
              razorpay<span>↗</span>
            </span>
            <div className="art-lines">
              <i />
              <i />
            </div>
            <div className="art-bars">
              <i />
              <i />
              <i />
            </div>
            <Code2 className="art-code" />
          </div>
        </>
      ) : (
        <div className="attendance-art">
          <div className="attendance-icon">
            <Check />
          </div>
          <div className="attendance-label">
            smart attendance<span>STUDENT PROJECT</span>
          </div>
          <div className="attendance-rows">
            {[0, 1, 2].map((i) => (
              <div key={i}>
                <span />
                <i />
                <Check />
              </div>
            ))}
          </div>
        </div>
      )}
      <span className="art-label">CONCEPT VISUAL · SCREENSHOT PENDING</span>
    </div>
  );
}
export function Projects({ preview = false }: { preview?: boolean }) {
  return (
    <section className={preview ? "section" : ""}>
      {preview && (
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span />
              SELECTED WORK
            </div>
            <h2>
              Learning by building<span className="text-primary">.</span>
            </h2>
          </div>
          <Button asChild variant="link">
            <Link to="/projects">
              All projects <ArrowUpRight />
            </Link>
          </Button>
        </div>
      )}
      <div className="project-grid">
        {projects.map((p, index) => (
          <article className="project-card" key={p.slug}>
            <Link to="/projects/$slug" params={{ slug: p.slug }} className="project-image-link">
              <ProjectArt index={index} />
            </Link>
            <div className="project-body">
              <span className="project-category">{p.category}</span>
              <Link to="/projects/$slug" params={{ slug: p.slug }} className="project-title">
                <h3>{p.title}</h3>
                <ArrowUpRight />
              </Link>
              <p>{p.summary}</p>
              <div className="project-status">
                <span />
                Implementation details to confirm
              </div>
              <div className="project-bottom">
                <Button asChild variant="link">
                  <Link to="/projects/$slug" params={{ slug: p.slug }}>
                    Explore project <ArrowRight />
                  </Link>
                </Button>
                <span title="Project URLs not yet supplied">Source & demo pending</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
export function About() {
  return (
    <div className="about-grid">
      <div className="about-copy">
        <p className="lead">
          Curiosity is where it starts.
          <br />
          <span className="text-primary">Building is how I learn.</span>
        </p>
        <p>
          I'm Sunil Pal, a final-year Bachelor of Technology student specializing in Artificial
          Intelligence and Machine Learning, with an expected graduation in 2027.
        </p>
        <p>
          I'm interested in programming, web technology, and cybersecurity. I enjoy developing
          useful applications, strengthening my problem-solving skills, and exploring new
          technologies through hands-on projects.
        </p>
        <p>
          My focus is on building a strong foundation in software development while continuing to
          explore AI and machine learning.
        </p>
        <Button asChild variant="outline">
          <Link to="/projects">
            Explore my work <ArrowUpRight />
          </Link>
        </Button>
      </div>
      <aside className="profile-facts">
        <div className="monogram" aria-label="Sunil Pal initials">
          SP<span>PROFILE PHOTO PENDING</span>
        </div>
        <dl>
          <div>
            <dt>Based in</dt>
            <dd>India</dd>
          </div>
          <div>
            <dt>Education</dt>
            <dd>B.Tech · AIML</dd>
          </div>
          <div>
            <dt>Graduation</dt>
            <dd>2027</dd>
          </div>
          <div>
            <dt>Focus</dt>
            <dd>Learning through projects</dd>
          </div>
        </dl>
      </aside>
    </div>
  );
}
export function Skills() {
  return (
    <div className="skill-grid">
      {skills.map((s) => {
        const Icon = icons[s.icon as keyof typeof icons];
        return (
          <article className="skill-card" key={s.name}>
            <Icon />
            <h2>{s.name}</h2>
            <div className="skill-tags">
              {s.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        );
      })}
    </div>
  );
}
export function Education() {
  return (
    <>
      <div className="education-row">
        <div className="timeline-marker">
          <GraduationCap />
        </div>
        <div>
          <div className="eyebrow">EXPECTED GRADUATION · 2027</div>
          <h2>Bachelor of Technology</h2>
          <p className="lead">Artificial Intelligence & Machine Learning</p>
          <p>Final-year student · India</p>
          <div className="pending-note">Institution details to be added</div>
        </div>
        <span className="year-label">2027</span>
      </div>
      <div className="section">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span />
              CONTINUOUS LEARNING
            </div>
            <h2>Beyond the classroom</h2>
          </div>
          <Button asChild variant="link">
            <Link to="/certifications">
              Workshops <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <p className="text-muted-foreground">
          Exploring programming, developer tools, web technology, and computing fundamentals through
          workshops and project-based learning.
        </p>
      </div>
      <Interests />
    </>
  );
}
export function Certifications() {
  return (
    <>
      <p className="verification-note">
        Supplied learning activities. Official titles, organizers, dates, and credentials are
        awaiting verification.
      </p>
      <div className="workshop-list">
        {workshops.map((w, i) => {
          const Icon = icons[w.icon as keyof typeof icons];
          return (
            <article key={w.title}>
              <span className="workshop-number">0{i + 1}</span>
              <Icon />
              <div>
                <h2>{w.title}</h2>
                <p>{w.status}</p>
              </div>
              <span className="pending-badge">To verify</span>
            </article>
          );
        })}
      </div>
    </>
  );
}
export function Interests() {
  return (
    <section className="interests">
      <div className="eyebrow">
        <span />
        WHAT SPARKS MY CURIOSITY
      </div>
      <h2>Areas I'm exploring</h2>
      <div className="interest-tags">
        {interests.map((i, n) => {
          const Icon = [Globe, Shield, Cpu, Code2][n] ?? Code2;
          return (
            <span key={i}>
              <Icon size={17} />
              {i}
            </span>
          );
        })}
      </div>
    </section>
  );
}
export function Profiles() {
  return (
    <div className="profile-links">
      {[
        {
          title: "GitHub",
          name: "sunilsn2005-source",
          summary: "My code, projects, and learning journey.",
          url: profile.github,
          Icon: Github,
        },
        {
          title: "LeetCode",
          name: "sunil_pal",
          summary: "Exploring data structures and problem-solving.",
          url: profile.leetcode,
          Icon: Code2,
        },
        {
          title: "LinkedIn",
          name: "Sunil Pal",
          summary: "Connect with me professionally.",
          url: profile.linkedin,
          Icon: Linkedin,
        },
      ].map((p) => (
        <article key={p.title}>
          <p.Icon size={28} />
          <h2>{p.title}</h2>
          <span className="text-primary">{p.name}</span>
          <p>{p.summary}</p>
          <Button asChild variant="outline">
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              View profile <ExternalLink />
            </a>
          </Button>
        </article>
      ))}
    </div>
  );
}
export function Contact({ compact = false }: { compact?: boolean }) {
  return (
    <section className={compact ? "contact-band" : "contact-page"}>
      <div>
        <div className="eyebrow">
          <span />
          LET'S START A CONVERSATION
        </div>
        {compact ? (
          <h2>
            Let's connect and build
            <br />
            something meaningful<span className="text-primary">.</span>
          </h2>
        ) : (
          <h1>
            Let's Connect and Build
            <br />
            Something Meaningful<span className="text-primary">.</span>
          </h1>
        )}
        <p>
          Have an opportunity, a project idea, or just want to say hello?
          <br />
          I'd love to hear from you.
        </p>
        <div className="contact-actions">
          <Button asChild size="lg">
            <a href={mailto(profile.email)}>
              <Mail />
              Say hello <ArrowUpRight />
            </a>
          </Button>
          <a className="email-link" href={mailto(profile.email)}>
            {profile.email}
          </a>
        </div>
        <Socials />
      </div>
      <div className="contact-decoration" aria-hidden="true">
        <ArrowUpRight />
      </div>
    </section>
  );
}
