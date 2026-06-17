import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: '3+', label: 'Years Professional' },
  { value: 'MSE-AI', label: 'UPenn Engineering' },
  { value: 'BA CS', label: 'BU · 3.67 GPA' },
  { value: '7+', label: 'Certifications' },
];

const skills = [
  { category: 'AI / Cloud', items: ['Agentic AI', 'Azure', 'GCP', 'Microsoft Agents SDK', 'Conversational AI'] },
  { category: 'Back-End', items: ['C#', '.NET', 'Python', 'Java', 'SQL'] },
  { category: 'Front-End', items: ['TypeScript', 'ReactJS', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Tools', items: ['Git', 'Power BI', 'Power Automate', 'JIRA', 'New Relic', 'TeamCity'] },
];

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const contactInView = useInView(contactRef, { once: true, margin: '-80px' });

  return (
    <section ref={ref} id="about" className="relative grid-bg px-8 py-32">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center gap-16">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-cyan-400 tracking-widest uppercase"
        >
          About Me
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div
            className="absolute inset-0 rounded-2xl blur-3xl opacity-20"
            style={{ background: 'radial-gradient(circle, #00d4ff, #7c3aed)' }}
          />
          <div
            className="relative rounded-2xl overflow-hidden"
            style={{
              border: '1px solid rgba(0,212,255,0.25)',
              boxShadow: '0 0 60px rgba(0,212,255,0.1)',
              width: 220,
              height: 220,
            }}
          >
            <img src="/headshot.jpeg" alt="Derek Roberts" className="w-full h-full object-cover object-top" />
          </div>
          <div className="absolute -top-2 -left-2 w-6 h-6" style={{ borderTop: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' }} />
          <div className="absolute -top-2 -right-2 w-6 h-6" style={{ borderTop: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' }} />
          <div className="absolute -bottom-2 -left-2 w-6 h-6" style={{ borderBottom: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' }} />
          <div className="absolute -bottom-2 -right-2 w-6 h-6" style={{ borderBottom: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' }} />
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {stats.map(({ value, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08 }}
              className="py-6 px-4 rounded-xl text-center"
              style={{
                background: 'rgba(0,212,255,0.04)',
                border: '1px solid rgba(0,212,255,0.12)',
              }}
            >
              <div className="text-2xl font-black text-white glow-text leading-tight">{value}</div>
              <div className="text-xs font-mono text-slate-500 mt-2 leading-snug">{label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="space-y-5 text-slate-300 text-base leading-relaxed text-center"
        >
          <p>
            I'm a Full-Stack Software Engineer at John Hancock, where I own production
            deployments for globally distributed virtual assistants across John Hancock and
            Manulife. I led the migration of our entire chatbot platform to the Microsoft
            Agents SDK, enabling the shift from predictive to agentic AI architectures.
          </p>
          <p>
            Currently pursuing my Master of Science in Engineering — Artificial Intelligence
            at the University of Pennsylvania, building on a Computer Science degree from
            Boston University and hands-on production experience at the intersection of
            software engineering and AI.
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          className="w-full space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase text-center">
            Technical Skills
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map(({ category, items }, i) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.45 + i * 0.08 }}
                className="p-5 rounded-lg"
                style={{
                  background: 'rgba(4,4,8,0.8)',
                  border: '1px solid rgba(0,212,255,0.1)',
                }}
              >
                <div className="text-xs font-mono text-cyan-400 mb-3 tracking-wide">{category}</div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="text-xs text-slate-400 px-2 py-1 rounded"
                      style={{ background: 'rgba(255,255,255,0.04)' }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <a
            href="https://linkedin.com/in/derekaroberts"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
            style={{
              background: 'rgba(0,212,255,0.08)',
              border: '1px solid rgba(0,212,255,0.35)',
              color: '#00d4ff',
              borderRadius: '4px',
            }}
          >
            LinkedIn ↗
          </a>
          <a
            href={`${import.meta.env.BASE_URL}Derek_Resume_Updated.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
            style={{
              background: 'rgba(124,58,237,0.08)',
              border: '1px solid rgba(124,58,237,0.35)',
              color: '#a78bfa',
              borderRadius: '4px',
            }}
          >
            Resume ↗
          </a>
        </motion.div>

        {/* ── Get in Touch ── */}
        <div ref={contactRef} className="w-full pt-20 border-t mt-8" style={{ borderColor: 'rgba(0,212,255,0.08)' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={contactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center flex flex-col items-center gap-6"
          >
            <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
              Get in Touch
            </div>
            <h3 className="text-4xl font-black text-white">
              Let's connect
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Open to conversations about engineering, AI systems, and interesting problems.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="mailto:derekroberts.business@gmail.com"
                className="px-8 py-3 text-sm font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
                style={{
                  background: 'rgba(0,212,255,0.08)',
                  border: '1px solid rgba(0,212,255,0.35)',
                  color: '#00d4ff',
                  borderRadius: '4px',
                }}
              >
                Email ↗
              </a>
              <a
                href="https://linkedin.com/in/derekaroberts"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-sm font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
                style={{
                  background: 'rgba(124,58,237,0.08)',
                  border: '1px solid rgba(124,58,237,0.35)',
                  color: '#a78bfa',
                  borderRadius: '4px',
                }}
              >
                LinkedIn ↗
              </a>
              <a
                href="https://github.com/DerekRoberts32"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 text-sm font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
                style={{
                  background: 'rgba(6,255,165,0.05)',
                  border: '1px solid rgba(6,255,165,0.25)',
                  color: '#06ffa5',
                  borderRadius: '4px',
                }}
              >
                GitHub ↗
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={contactInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
            className="mt-20 font-mono text-xs text-slate-700 text-center"
          >
            Derek Roberts · Boston, MA · {new Date().getFullYear()}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
