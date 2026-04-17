import {
  ArrowDown,
  ArrowUpRight,
  BriefcaseBusiness,
  CheckCircle2,
  Code2,
  Download,
  ExternalLink,
  Gauge,
  Languages,
  Link as LinkIcon,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import {
  education,
  experience,
  languages,
  metrics,
  profile,
  projects,
  references,
  skills,
  type Metric,
  type Project,
} from "@/data/profile";
import { ProjectGallery } from "@/components/ProjectGallery";

const navItems = [
  { label: "Impact", href: "#impact" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const accentStyles: Record<Metric["accent"], string> = {
  cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
  emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
  amber: "border-amber-300/30 bg-amber-300/10 text-amber-100",
};

const projectAccent: Record<Project["accent"], string> = {
  cyan: "from-cyan-300/18 to-cyan-300/0 text-cyan-200",
  emerald: "from-emerald-300/18 to-emerald-300/0 text-emerald-200",
  amber: "from-amber-300/18 to-amber-300/0 text-amber-200",
};

function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">{kicker}</p>
      <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">{description}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-200">
      {children}
    </span>
  );
}

function ContactLink({
  href,
  icon: Icon,
  label,
  primary = false,
  external = false,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  primary?: boolean;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-ink-950 ${
        primary
          ? "bg-cyan-300 text-ink-950 hover:bg-cyan-200"
          : "border border-white/12 bg-white/[0.04] text-white hover:border-cyan-200/50 hover:bg-cyan-300/10"
      }`}
      aria-label={label}
    >
      <Icon className="h-4 w-4" aria-hidden />
      {label}
    </a>
  );
}

function HeroVisual() {
  return (
    <div className="glass-panel relative overflow-hidden rounded-[2rem] p-5 shadow-glow">
      <div className="absolute inset-0 grid-fade opacity-45" aria-hidden />
      <div className="relative rounded-3xl border border-white/10 bg-ink-950/80 p-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400" />
            <span className="h-3 w-3 rounded-full bg-amber-300" />
            <span className="h-3 w-3 rounded-full bg-emerald-300" />
          </div>
          <span className="font-mono text-xs text-slate-400">portfolio.tsx</span>
        </div>

        <div className="mt-5 space-y-4 font-mono text-sm">
          <div className="rounded-2xl border border-cyan-200/20 bg-cyan-300/10 p-4">
            <p className="text-cyan-100">const engineer = &#123;</p>
            <p className="pl-4 text-slate-300">stack: &quot;React + Next.js + TypeScript&quot;,</p>
            <p className="pl-4 text-slate-300">focus: &quot;performance, SEO, product UX&quot;,</p>
            <p className="text-cyan-100">&#125;</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              ["SSR", "Next.js"],
              ["Maps", "1,000+"],
              ["RTK", "Mobile"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <p className="text-xs text-slate-500">{label}</p>
                <p className="mt-1 text-sm text-white">{value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-emerald-200/20 bg-emerald-300/10 p-4">
            <div className="flex items-center gap-3">
              <Gauge className="h-5 w-5 text-emerald-200" aria-hidden />
              <div>
                <p className="text-emerald-100">Measured outcomes</p>
                <p className="text-xs text-slate-400">Speed, cost, completion, stability</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] grid-fade opacity-50" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-ink-950/78 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Primary">
          <a href="#top" className="group inline-flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-cyan-300">
            <span className="grid h-10 w-10 place-items-center rounded-2xl border border-cyan-200/30 bg-cyan-300/10 text-sm font-bold text-cyan-100">
              TK
            </span>
            <span>
              <span className="block text-sm font-semibold text-white">{profile.name}</span>
              <span className="block text-xs text-slate-400">React / Next.js Engineer</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/[0.035] p-1 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm text-slate-300 transition hover:bg-white/8 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <a
            href={`mailto:${profile.email}`}
            className="hidden min-h-10 items-center gap-2 rounded-full bg-white px-4 text-sm font-semibold text-ink-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-cyan-300 focus:ring-offset-2 focus:ring-offset-ink-950 sm:inline-flex"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Hire Taimoor
          </a>

          <a
            href="#contact"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white md:hidden"
            aria-label="Open contact section"
          >
            <Menu className="h-5 w-5" aria-hidden />
          </a>
        </nav>
      </header>

      <section id="top" className="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:pb-28 md:pt-24 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Available for senior React.js and Next.js roles
            </div>

            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
              {profile.name}
              <span className="block bg-gradient-to-r from-cyan-200 via-white to-amber-200 bg-clip-text text-transparent">
                {profile.role}
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">{profile.headline}</p>
            <p className="mt-4 max-w-3xl text-base leading-8 text-slate-400">{profile.summary}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ContactLink href={`mailto:${profile.email}`} icon={Mail} label="Email Taimoor" primary />
              <ContactLink href={profile.linkedIn} icon={LinkIcon} label="LinkedIn" external />
              <ContactLink href={profile.cvPath} icon={Download} label="Download CV" />
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-amber-200" aria-hidden />
                {profile.location}
              </span>
              <a className="inline-flex items-center gap-2 hover:text-white" href={`tel:${profile.phone.replaceAll("-", "")}`}>
                <Phone className="h-4 w-4 text-cyan-200" aria-hidden />
                {profile.phone}
              </a>
            </div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <section id="impact" className="section-anchor mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 md:grid-cols-5">
          {metrics.map((metric) => (
            <div key={metric.label} className={`rounded-3xl border p-5 ${accentStyles[metric.accent]}`}>
              <p className="text-4xl font-semibold">{metric.value}</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section-anchor mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Skill matrix"
          title="React product engineering with measurable delivery habits."
          description="A practical frontend stack backed by mobile experience, API integration, maps, dashboards, SEO, and performance tooling."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skills.map((group) => (
            <article key={group.title} className="glass-panel rounded-3xl p-6 transition hover:border-cyan-200/35">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-cyan-200/25 bg-cyan-300/10 text-cyan-100">
                  <Code2 className="h-5 w-5" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section-anchor mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Selected work"
          title="Case studies recruiters can scan quickly."
          description="Project cards focus on product context, stack, and CV-backed outcomes instead of vague responsibilities."
        />

        <ProjectGallery />

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {projects.map((project) => (
            <article key={project.name} className="glass-panel group overflow-hidden rounded-3xl">
              <div className={`h-1.5 bg-gradient-to-r ${projectAccent[project.accent]}`} />
              <div className="p-6 md:p-7">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-slate-400">{project.company} / {project.period}</p>
                    <h3 className="mt-2 text-2xl font-semibold text-white">{project.name}</h3>
                  </div>
                  <ArrowUpRight className={`h-6 w-6 ${projectAccent[project.accent].split(" ").at(-1)}`} aria-hidden />
                </div>
                <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Pill key={item}>{item}</Pill>
                  ))}
                </div>
                <ul className="mt-6 space-y-3">
                  {project.outcomes.map((outcome) => (
                    <li key={outcome} className="flex gap-3 text-sm leading-6 text-slate-300">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-200" aria-hidden />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-anchor mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Experience"
          title="A timeline from UI foundations to senior product delivery."
          description="The CV history is grouped by employer and project so teams can understand scope, seniority, and product depth."
        />

        <div className="space-y-6">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`} className="glass-panel rounded-3xl p-6 md:p-8">
              <div className="grid gap-4 border-b border-white/10 pb-6 md:grid-cols-[1fr_auto] md:items-start">
                <div>
                  <p className="inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold text-amber-100">
                    <BriefcaseBusiness className="h-4 w-4" aria-hidden />
                    {job.period}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{job.role}</h3>
                  <p className="mt-2 text-slate-300">{job.company} - {job.location}</p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex min-h-10 w-fit items-center gap-2 rounded-full border border-white/10 px-4 text-sm text-slate-200 transition hover:border-cyan-200/50 hover:text-white"
                >
                  Discuss this work
                  <ArrowDown className="h-4 w-4" aria-hidden />
                </a>
              </div>

              <div className="mt-6 grid gap-4 lg:grid-cols-2">
                {job.projects.map((project) => (
                  <div key={`${job.company}-${project.name}`} className="rounded-3xl border border-white/10 bg-white/[0.035] p-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h4 className="font-semibold text-white">{project.name}</h4>
                      {project.period ? <span className="text-xs text-slate-500">{project.period}</span> : null}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <Pill key={item}>{item}</Pill>
                      ))}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-sm leading-6 text-slate-300">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200" aria-hidden />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="glass-panel rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-200/25 bg-emerald-300/10 text-emerald-100">
                <Sparkles className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-slate-400">Education</p>
                <h3 className="text-2xl font-semibold text-white">{education.degree}</h3>
              </div>
            </div>
            <div className="mt-6 space-y-2 text-slate-300">
              <p>{education.institution}</p>
              <p>{education.location} / {education.period}</p>
              <p>GPA: {education.gpa}</p>
            </div>
          </article>

          <article className="glass-panel rounded-3xl p-6 md:p-8">
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-cyan-200/25 bg-cyan-300/10 text-cyan-100">
                <Languages className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-sm text-slate-400">Languages</p>
                <h3 className="text-2xl font-semibold text-white">Professional communication coverage</h3>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              {languages.map((language) => (
                <Pill key={language}>{language}</Pill>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="References"
          title="Professional references from the CV."
          description="Full CV details are public on this portfolio, including references and direct contact information."
        />

        <div className="grid gap-4 md:grid-cols-3">
          {references.map((reference) => (
            <article key={reference.email} className="glass-panel rounded-3xl p-6">
              <h3 className="text-xl font-semibold text-white">{reference.name}</h3>
              <p className="mt-2 text-slate-400">{reference.company}</p>
              <div className="mt-5 space-y-3 text-sm text-slate-300">
                <a className="flex items-center gap-2 hover:text-white" href={`mailto:${reference.email}`}>
                  <Mail className="h-4 w-4 text-cyan-200" aria-hidden />
                  {reference.email}
                </a>
                <a className="flex items-center gap-2 hover:text-white" href={`tel:${reference.phone.replaceAll("-", "")}`}>
                  <Phone className="h-4 w-4 text-emerald-200" aria-hidden />
                  {reference.phone}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <footer id="contact" className="section-anchor border-t border-white/10 bg-black/20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-cyan-200">Contact</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-semibold text-white md:text-5xl">
              Ready to discuss senior React, Next.js, or product engineering roles.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Reach Taimoor directly through email, phone, or LinkedIn. The resume PDF is available for hiring workflows and recruiter sharing.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:min-w-72">
            <ContactLink href={`mailto:${profile.email}`} icon={Mail} label={profile.email} primary />
            <ContactLink href={`tel:${profile.phone.replaceAll("-", "")}`} icon={Phone} label={profile.phone} />
            <ContactLink href={profile.linkedIn} icon={LinkIcon} label="LinkedIn profile" external />
            <ContactLink href={profile.cvPath} icon={Download} label="Download resume PDF" />
          </div>
        </div>

        <div className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{profile.name} - React.js / Next.js Developer</p>
          <a
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <LinkIcon className="h-4 w-4" aria-hidden />
            Portfolio prepared for Vercel deployment
            <ExternalLink className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </footer>
    </main>
  );
}
