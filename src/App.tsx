import React from 'react';
import {
  Mail,
  Twitter,
  Github,
  ChevronRight,
  Sparkles,
  ArrowUpRight,
} from 'lucide-react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Homepage', href: '#hero' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
  { icon: Mail, label: 'Email', href: 'mailto:m1keydev.tech@gmail.com' },
  { icon: Github, label: 'Github', href: 'https://github.com/m1keydev-tech' },
];

const COLLECTION_ITEMS = [
  {
    title: 'Aurora Drifter',
    subtitle: 'Genesis Unit',
    score: '8.7/10',
    media:
      '/media/character-01.mp4',
  },
  {
    title: 'Orbit Keeper',
    subtitle: 'Signal Class',
    score: '9.0/10',
    media:
      '/media/character-02.mp4',
  },
  {
    title: 'Nova Shell',
    subtitle: 'Silent Type',
    score: '8.2/10',
    media:
      '/media/character-03.mp4',
  },
];

const FAQ_ITEMS = [
  {
    question: 'What is m1key.NFT?',
    answer:
      'm1key.NFT is a cinematic digital collectible universe built around soft sci-fi characters, atmospheric worlds, and rarity-based drops.',
  },
  {
    question: 'What makes this collection different?',
    answer:
      'The experience blends animated presentation, character-driven storytelling, and a consistent visual language across every section of the site.',
  },
  {
    question: 'Can I collaborate or join the project?',
    answer:
      'Yes. Artists, collectors, and creative partners can join the signal and connect through the contact links below.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0 },
};

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-serif text-[26px] italic leading-none text-lime-400 md:text-[40px] lg:text-[54px]">
      {children}
    </span>
  );
}

function GlassCard({
  className = '',
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-[28px] border border-white/10 bg-white/[0.04] shadow-[0_20px_60px_rgba(0,0,0,0.28)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

function SocialRail({ vertical = true }: { vertical?: boolean }) {
  return (
    <GlassCard
      className={vertical ? 'flex flex-col overflow-hidden' : 'flex items-center justify-center gap-3 p-2'}
    >
      {SOCIAL_LINKS.map(({ icon: Icon, label, href }, index) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={`group flex items-center justify-center transition-all duration-300 hover:bg-white/10 ${vertical
            ? `h-14 w-14 ${index !== SOCIAL_LINKS.length - 1 ? 'border-b border-white/10' : ''}`
            : 'h-12 w-12 rounded-2xl'
            }`}
        >
          <Icon className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover:scale-110 group-hover:text-white" />
        </a>
      ))}
    </GlassCard>
  );
}

function CollectionCard({
  item,
  index,
}: {
  item: (typeof COLLECTION_ITEMS)[number];
  index: number;
}) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
    >
      <GlassCard className="group overflow-hidden p-4 transition-transform duration-300 hover:-translate-y-1">
        <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-white/5">
          <div className="pb-[100%]" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          >
            <source src={item.media} type="video/mp4" />
          </video>
        </div>

        <div className="mt-4 flex items-end justify-between gap-4 rounded-[20px] border border-white/10 bg-white/[0.03] px-4 py-4">
          <div className="space-y-2">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-white/45">{item.subtitle}</p>
              <h3 className="mt-1 text-lg font-semibold uppercase tracking-[0.04em] text-white">
                {item.title}
              </h3>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-white/45">Rarity Score</p>
              <p className="text-sm font-medium text-white/90">{item.score}</p>
            </div>
          </div>

          <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-500 to-violet-600 text-white shadow-[0_10px_30px_rgba(168,85,247,0.45)] transition-transform duration-300 hover:scale-105">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </GlassCard>
    </motion.article>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#020b3d] text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(64,114,255,0.24),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,118,194,0.18),_transparent_30%)]" />
      <div className="pointer-events-none fixed inset-0 opacity-[0.16] [background-image:radial-gradient(circle_at_center,white_1px,transparent_1.5px)] [background-size:28px_28px]" />

      <main className="relative">
        <section id="hero" className="relative min-h-screen overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/media/hero-video.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#04135f]/55 via-[#04135f]/20 to-[#020b3d]" />

          <div className="relative z-10 mx-auto flex min-h-screen max-w-[1600px] flex-col px-5 pb-12 pt-6 md:px-8 lg:px-10">
            <header className="flex items-center justify-between gap-4">
              <a href="#hero" className="text-sm font-semibold uppercase tracking-[0.24em] text-white/95">
                m1key.NFT
              </a>

              <GlassCard className="hidden px-5 py-3 lg:block">
                <nav>
                  <ul className="flex items-center gap-7">
                    {NAV_LINKS.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/80 transition-colors duration-300 hover:text-lime-300"
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </GlassCard>

              <div className="hidden lg:block">
                <SocialRail />
              </div>
            </header>

            <div className="flex flex-1 items-center pt-16 md:pt-24 lg:pt-10">
              <div className="max-w-[880px]">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  className="relative"
                >
                  <h1 className="max-w-[760px] text-[48px] font-black uppercase leading-[0.92] tracking-[-0.03em] text-white sm:text-[72px] md:text-[92px] lg:text-[118px]">
                    Beyond Earth
                    <br />
                    and Its
                    <br />
                    Familiar
                    <br />
                    Boundaries
                  </h1>
                  <div className="absolute left-[54%] top-[43%] -translate-y-1/2 md:left-[58%] lg:left-[60%]">
                    <SectionEyebrow>Collection</SectionEyebrow>
                  </div>
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.12 }}
                  className="mt-8 max-w-[540px] text-sm leading-7 text-white/72 md:text-base"
                >
                  A cinematic NFT universe shaped by soft cosmic characters, dreamy planets,
                  and collectible signal-born identities. Explore the drop, discover the world,
                  and step beyond the familiar edge.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.22 }}
                  className="mt-8 flex flex-wrap items-center gap-4"
                >
                  <a
                    href="#gallery"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition-colors duration-300 hover:bg-white/15"
                  >
                    View Collection
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#about"
                    className="inline-flex items-center gap-2 rounded-full border border-lime-300/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-lime-300 transition-colors duration-300 hover:bg-lime-300/10"
                  >
                    Learn More
                  </a>
                </motion.div>
              </div>
            </div>

            <div className="mt-10 flex justify-center lg:hidden">
              <SocialRail vertical={false} />
            </div>
          </div>
        </section>

        <section id="about" className="relative overflow-hidden py-20 lg:py-28">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source
              src="/media/middle.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#020b3d] via-[#03115b]/40 to-[#020b3d]" />

          <div className="relative z-10 mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10">
            <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6 }}
                className="pt-3"
              >
                <div className="relative inline-block">
                  <h2 className="text-[42px] font-black uppercase leading-[0.94] tracking-[-0.03em] md:text-[68px] lg:text-[88px]">
                    Hello!
                    <br />
                    I&apos;m m1key
                  </h2>
                  <div className="absolute left-[42%] top-[58%] md:left-[56%]">
                    <SectionEyebrow>m1key</SectionEyebrow>
                  </div>
                </div>

                <p className="mt-10 max-w-[450px] text-sm leading-7 text-white/72 md:text-base">
                  m1key is the face of a collectible world where innocence meets interstellar
                  mystery. Every character carries a signal, a rarity, and a fragment of a much
                  larger universe waiting to unfold.
                </p>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.08 }}
                className="grid gap-5 sm:grid-cols-2"
              >
                {[
                  {
                    title: 'Visual Identity',
                    text: 'Soft-volume characters, dreamy planets, and a clean sci-fi atmosphere keep every section cohesive.',
                  },
                  {
                    title: 'Story Direction',
                    text: 'The brand voice stays mysterious but warm, turning the project into a world instead of a simple drop page.',
                  },
                  {
                    title: 'Collector Experience',
                    text: 'Animated media, rarity labels, and smooth interactions make discovery feel premium and memorable.',
                  },
                  {
                    title: 'Creative Signal',
                    text: 'Built for artists, collectors, and curious explorers who want a universe with depth and personality.',
                  },
                ].map((item) => (
                  <GlassCard key={item.title} className="p-6 md:p-7">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                      <Sparkles className="h-5 w-5 text-lime-300" />
                    </div>
                    <h3 className="text-lg font-semibold uppercase tracking-[0.06em] text-white">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{item.text}</p>
                  </GlassCard>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <section id="gallery" className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10">
            <div className="mb-12 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-[42px] font-black uppercase leading-[0.94] tracking-[-0.03em] md:text-[68px] lg:text-[88px]">
                  Collection Of
                </h2>
                <div className="ml-8 mt-1 flex items-end gap-4 md:ml-16 lg:ml-24">
                  <SectionEyebrow>Space</SectionEyebrow>
                  <span className="text-[42px] font-black uppercase leading-none tracking-[-0.03em] md:text-[68px] lg:text-[88px]">
                    Objects
                  </span>
                </div>
              </motion.div>

              <motion.a
                href="#contact"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="group inline-flex items-end gap-3 self-start md:self-auto"
              >
                <span className="text-[36px] font-black uppercase leading-none tracking-[-0.03em] md:text-[56px]">
                  See
                </span>
                <div className="flex flex-col text-[20px] font-black uppercase leading-none md:text-[30px]">
                  <span>All</span>
                  <span className="relative inline-block">
                    Creators
                    <span className="absolute -bottom-2 left-0 h-[6px] w-full bg-lime-400 transition-all duration-300 group-hover:h-[9px]" />
                  </span>
                </div>
              </motion.a>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {COLLECTION_ITEMS.map((item, index) => (
                <CollectionCard key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="relative py-20 lg:py-28">
          <div className="mx-auto max-w-[1600px] px-5 md:px-8 lg:px-10">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">
                  Signal Notes
                </p>
                <h2 className="mt-4 text-[42px] font-black uppercase leading-[0.94] tracking-[-0.03em] md:text-[68px] lg:text-[88px]">
                  Built With
                  <br />
                  Consistency
                </h2>
                <p className="mt-8 max-w-[480px] text-sm leading-7 text-white/70 md:text-base">
                  This revised structure keeps the copy, hierarchy, spacing, and visual language aligned
                  from hero to footer, so the whole landing page feels like one connected universe.
                </p>
              </motion.div>

              <div className="space-y-4">
                {FAQ_ITEMS.map((item, index) => (
                  <motion.div
                    key={item.question}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, delay: index * 0.06 }}
                  >
                    <GlassCard className="p-6 md:p-7">
                      <h3 className="text-lg font-semibold uppercase tracking-[0.05em] text-white">
                        {item.question}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/68 md:text-[15px]">
                        {item.answer}
                      </p>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden pb-24 pt-8 lg:pb-28">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="block h-auto w-full"
          >
            <source
              src="/media/contact.mp4"
              type="video/mp4"
            />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020b3d]/10 to-[#020b3d]/35" />

          <div className="absolute inset-0 z-10 mx-auto flex max-w-[1600px] items-center justify-end px-5 md:px-8 lg:px-10">
            <div className="max-w-[760px] text-right">
              <div className="mb-6 md:mb-8">
                <SectionEyebrow>Go beyond</SectionEyebrow>
              </div>
              <h2 className="text-[26px] font-black uppercase leading-[1.05] tracking-[-0.03em] text-white sm:text-[42px] md:text-[58px] lg:text-[78px]">
                Join Us.
                <br />
                Reveal What&apos;s Hidden.
                <br />
                Define What&apos;s Next.
                <br />
                Follow The Signal.
              </h2>
            </div>
          </div>

          <div className="absolute bottom-[10%] left-[5%] z-10 hidden lg:block">
            <GlassCard className="overflow-hidden">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }, index) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-[76px] w-[210px] items-center justify-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-white/84 transition-colors duration-300 hover:bg-white/10 ${index !== SOCIAL_LINKS.length - 1 ? 'border-b border-white/10' : ''
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </GlassCard>
          </div>
        </section>
      </main>
    </div>
  );
}
