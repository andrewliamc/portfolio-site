import './index.css';

type Project = {
  title: string;
  summary: string;
  description: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
  imagePosition: 'left' | 'right';
  link?: string;
};

type SkillColumn = {
  title: string;
  items: string[];
};

const placeholderImage = '/project-placeholder.svg';

const quickFacts = [
  {
    title: 'Based in Hackensack, NJ',
    detail: 'Remote-friendly, Eastern Standard Time',
    icon: <IconLocation />,
  },
  {
    title: 'Background',
    detail: 'User-focused experiences and technical support',
    icon: <IconSpark />,
  },
  {
    title: 'Areas of focus',
    detail: 'Frontend Development, UI Design',
    icon: <IconLayers />,
  },
  {
    title: 'Approach',
    detail: 'Collaboration, clarity, accessibility, simplicity',
    icon: <IconChat />,
  },
];

const projects: Project[] = [
  {
    title: 'Niibl — Smart Recipe Portion Converter',
    summary: 'Modern, intuitive portioning for everyday cooking.',
    description:
      'Niibl helps home cooks quickly scale recipes without the math. I designed and built the interface around clarity and ease of use, combining real-time conversions with a clean, mobile-first layout. Focused on simple flows, everyday usability, and an approachable visual system.',
    tech: ['React', 'UI Design', 'TypeScript', 'Headless CMS', 'Accessibility'],
    imageSrc: '/niibl-react-project-card-img.png',
    imageAlt: 'Screenshot of the Niibl recipe converter interface',
    imagePosition: 'left',
    link: 'https://niibl-react.vercel.app/',
  },
  {
    title: 'Restaurant Website Redesign',
    summary: 'A warm, modern redesign built for a local café and small business.',
    description:
      'A full redesign concept focused on storytelling, menu clarity, and a strong brand presence. I created a grounded visual language inspired by earth-tone palettes and improved the browsing experience across mobile and desktop. Designed to help small businesses communicate authenticity and build trust.',
    tech: ['Branding', 'Tailwind', 'Web UI', 'Responsive Design', 'Tailwind CSS', 'React', 'Figma'],
    imageSrc: placeholderImage,
    imageAlt: 'Preview placeholder for Roots Design Studio cafe redesign',
    imagePosition: 'right',
  },
  {
    title: 'Single-Page Product Experience',
    summary: 'A clean, conversion-focused e-commerce layout.',
    description:
      'Built a modern product page with clear hierarchy, accessible interaction patterns, and responsive UI components. Emphasized scannability, visual balance, and purposeful CTAs to create a frictionless shopping experience across devices.',
    tech: ['Brand Strategy & Identity', 'User Experience', 'Next.js', 'Tailwind CSS', 'Single Page App'],
    imageSrc: '/cleo-project-card.png',
    imageAlt: 'Screenshot of the Cleo single-page product experience',
    imagePosition: 'left',
    link: 'https://cleo-ecommerce-single-page.vercel.app/',
  },
];

const skillColumns: SkillColumn[] = [
  {
    title: 'Development',
    items: ['React, JavaScript, HTML & Tailwind CSS', 'Responsive layouts & component-based architecture', 'API integration & state management fundamentals', 'Accessibility-minded implementation & performance awareness'],
  },
  {
    title: 'Design',
    items: ['Figma-first UI design & prototyping', 'Layout, hierarchy, typography, and color systems', 'Wireframing user flows & interaction patterns', 'Wireframing user flows & interaction patterns'],
  },
  {
    title: 'Technical Expertise',
    items: ['Deep familiarity with Apple hardware, macOS & iOS', 'Deep familiarity with Apple hardware, macOS & iOS', 'Clear, empathetic communication with non-technical audiences', 'Clear, empathetic communication with non-technical audiences'],
  },
];

function App() {
  return (
    <div className="bg-offWhite text-charcoal">
      <main className="min-h-screen">
        <Hero />
        <About />
        <FeaturedProjects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

const Hero = () => (
  <header className="relative overflow-hidden">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -top-32 right-[-10%] h-80 w-80 rounded-full bg-gradient-to-br from-sage/35 via-olive/20 to-charcoal/10 blur-3xl" />
      <div className="absolute top-32 left-[-10%] h-64 w-64 rounded-full bg-gradient-to-br from-warmSand/80 via-offWhite to-sage/30 blur-3xl" />
    </div>
    <div className="relative container max-w-content pt-24 pb-20 md:pt-40 md:pb-40">
      <div className="space-y-8 md:max-w-none">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight md:text-5xl">
            Hi, I am Andrew. Frontend Developer crafting clean, intuitive experiences. 
          </h1>
          <p className="text-lg text-gray-700">
            Design-minded developer focused on clarity, speed, and human-centered interfaces.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#projects"
            className="w-full sm:w-auto rounded-lg bg-sage px-7 py-3.5 text-center text-base font-semibold text-white shadow-sm transition hover:-translate-y-[2px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto rounded-lg border-2 border-charcoal px-7 py-3.5 text-center text-base font-semibold text-charcoal transition hover:border-olive hover:text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olive"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  </header>
);

const About = () => (
  <section id="about" className="relative py-section">
    <div className="absolute inset-0">
      <div className="absolute inset-x-0 top-12 mx-auto h-[70%] max-w-content rounded-2.5xl bg-warmSand/40 blur-lg" />
    </div>
    <div className="relative container max-w-content space-y-10 text-center">
      <div className="space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">About Me</p>
        <h2 className="text-3xl font-semibold">Design-minded frontend developer.</h2>
        <p className="text-lg text-gray-700">
          Hello — I am Andrew. I design and build digital experiences with a focus on clarity, warmth, and usability. My goal is always the same: create interfaces that feel intuitive, approachable, and thoughtfully put together.
<br />
<br />
My path began at Apple, where I spent nearly a decade helping customers navigate their technology with confidence. That experience shaped the way I work — with empathy, patience, and a deep appreciation for good design.
<br />
<br />
Now, I build modern web interfaces using React, JavaScript, and strong UI foundations.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 text-left md:grid-cols-4">
        {quickFacts.map((fact) => (
          <div key={fact.title} className="rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-olive/10">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-olive">
              {fact.icon}
            </div>
            <p className="text-base font-semibold">{fact.title}</p>
            <p className="mt-1 text-sm text-gray-700">{fact.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturedProjects = () => (
  <section id="projects" className="py-section">
    <div className="container max-w-content space-y-12">
      <div className="space-y-3 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">Featured Projects</p>
        <h2 className="text-3xl font-semibold">Digital experiences shaped with clarity, intention, and care.</h2>
        <p className="max-w-2xl text-gray-700">
          Each project aims to solve a problem by blending design and development with a focus on creating interfaces that feel intuitive, approachable, and genuinely helpful.
        </p>
      </div>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const imageFirst = project.imagePosition === 'left';
  return (
    <div className="grid gap-10 rounded-xl bg-warmSand p-8 shadow-sm ring-1 ring-olive/10 md:grid-cols-2 md:p-12 md:gap-12">
      <div className={`flex items-center ${imageFirst ? '' : 'md:order-last'}`}>
        <div className="w-full overflow-hidden rounded-2xl bg-gradient-to-br from-sage/70 via-offWhite to-olive/40 shadow-card aspect-[4/3]">
          <img
            src={project.imageSrc}
            alt={project.imageAlt}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className="space-y-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">0{index + 1}</p>
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="text-lg font-medium text-gray-800">{project.summary}</p>
        <p className="text-gray-700">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((item) => (
            <span key={item} className="rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-olive ring-1 ring-olive/20">
              {item}
            </span>
          ))}
        </div>
        <a
          href={project.link ?? '#'}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-2 text-base font-semibold text-charcoal transition hover:text-olive focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-olive"
        >
          View Project
          <span aria-hidden className="text-lg">
            →
          </span>
        </a>
      </div>
    </div>
  );
};

const Skills = () => (
  <section id="skills" className="py-section">
    <div className="container max-w-content space-y-12">
      <div className="space-y-3 text-center md:text-left">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">Skills</p>
        <h2 className="text-3xl font-semibold">Balanced between design, code, and real-world problem solving.</h2>
        <p className="max-w-2xl text-gray-700">
          Three pillars: modern frontend development, thoughtful interface design, and technical expertise shaped by 9+ years at Apple.
        </p>
      </div>
      <div className="grid gap-10 md:grid-cols-3">
        {skillColumns.map((col) => (
          <div key={col.title} className="space-y-4 rounded-2xl bg-white/80 p-6 shadow-sm ring-1 ring-olive/10">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/15 text-olive">
                <IconCheck />
              </div>
              <h3 className="text-xl font-semibold">{col.title}</h3>
            </div>
            <ul className="space-y-3 text-gray-700">
              {col.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-32 md:py-36">
    <div className="container max-w-prose space-y-6 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-olive">Contact</p>
      <h2 className="text-3xl font-semibold">Let&apos;s Connect</h2>
      <p className="text-lg text-gray-700">
        Open to collaborations, career opportunities, freelance engagements, or simply swapping notes on design systems and frontend technologies.
      </p>
      <div className="flex justify-center">
        <a
          href="mailto:jobs.andrewliamc@use.startmail.com"
          className="w-full max-w-xs rounded-lg bg-sage px-8 py-3.5 text-base font-semibold text-white shadow-sm transition hover:-translate-y-[2px] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sage"
        >
          Send a Message →
        </a>
      </div>
    </div>
  </section>
);

function IconLocation() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M12 2.75c-3.175 0-5.75 2.575-5.75 5.75 0 4.25 5.75 12.75 5.75 12.75s5.75-8.5 5.75-12.75c0-3.175-2.575-5.75-5.75-5.75Zm0 8.25a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path d="M12 2 9.5 8.5 3 11l6.5 2.5L12 21l2.5-7.5L21 11l-6.5-2.5L12 2Z" fill="currentColor" />
    </svg>
  );
}

function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M4.5 8.75 12 4l7.5 4.75-7.5 4.75-7.5-4.75ZM4.5 12.75 12 17.5l7.5-4.75M4.5 15.75 12 20.5l7.5-4.75"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconChat() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path
        d="M5 5.5h14a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H8l-3 3v-13a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 9.5h8M8 12.5h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" role="img" aria-hidden="true">
      <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default App;
