import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const screenshots = [
  { src: '/signal-list.png', caption: 'Signal Feed — filtered, sorted list with permission-aware visibility' },
  { src: '/signal-detail-metrics.png', caption: 'Signal Detail — Sharpe ratio & hit rate metrics over time' },
  { src: '/signal-detail-overview.png', caption: 'Signal Overview — fork lineage, sharing controls, status' },
];

const techStack = ['Python', 'FastAPI', 'React', 'Vite', 'Tailwind', 'TypeScript', 'Recharts'];

export default function ProjectSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [activeImg, setActiveImg] = useState(0);

  return (
    <section
      ref={ref}
      id="project"
      className="relative min-h-screen flex items-center px-6 py-24"
      style={{ background: 'linear-gradient(180deg, #020408 0%, #050a14 50%, #020408 100%)' }}
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3">
            Personal Project
          </div>
          <h2 className="text-4xl font-black text-white mb-2">
            Signal Research
            <span style={{ color: '#f59e0b' }}> Platform</span>
          </h2>
          <p className="text-slate-500 text-sm font-mono mb-12">
            Full-stack quant finance tool for researchers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left — screenshots */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {/* Main screenshot */}
            <div
              className="rounded-xl overflow-hidden relative"
              style={{
                border: '1px solid rgba(245,158,11,0.3)',
                boxShadow: '0 0 40px rgba(245,158,11,0.1)',
              }}
            >
              <img
                src={screenshots[activeImg].src}
                alt={screenshots[activeImg].caption}
                className="w-full"
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs font-mono text-slate-400"
                style={{ background: 'rgba(2,4,8,0.85)' }}
              >
                {screenshots[activeImg].caption}
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3">
              {screenshots.map((s, i) => (
                <button
                  key={s.src}
                  onClick={() => setActiveImg(i)}
                  className="flex-1 rounded-lg overflow-hidden transition-all hover:scale-105"
                  style={{
                    border: `2px solid ${activeImg === i ? '#f59e0b' : 'rgba(245,158,11,0.15)'}`,
                    opacity: activeImg === i ? 1 : 0.5,
                  }}
                >
                  <img src={s.src} alt="" className="w-full h-16 object-cover object-top" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Right — description */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-slate-300 text-sm leading-relaxed">
              A full-stack application built for quantitative researchers to create, iterate on,
              and manage trading signals. Features a Python/FastAPI backend with a sophisticated
              role-based permission model and a React frontend with interactive data visualizations.
            </p>

            {/* Feature list */}
            <div className="space-y-3">
              {[
                { icon: '⚡', title: 'Signal Feed', desc: 'Filtered, sorted list with permission-aware visibility across researcher, manager, and exec roles' },
                { icon: '📈', title: 'Metrics Dashboard', desc: 'Sharpe ratio & hit rate charts over time using Recharts' },
                { icon: '🌿', title: 'Fork Lineage Tree', desc: 'Recursive visual tree showing signal evolution and version history' },
                { icon: '🔒', title: 'Permission Model', desc: 'Private → Team → Shared → Golden visibility levels enforced server-side' },
                { icon: '🏆', title: 'Golden Library', desc: 'Org-wide baseline signals available for forking by all researchers' },
              ].map(({ icon, title, desc }, i) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.08 }}
                  className="flex gap-3 p-3 rounded-lg"
                  style={{ background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.1)' }}
                >
                  <span className="text-base flex-shrink-0">{icon}</span>
                  <div>
                    <div className="text-xs font-mono font-bold text-amber-400">{title}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech stack */}
            <div>
              <div className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-3">
                Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-mono px-3 py-1 rounded"
                    style={{
                      background: 'rgba(245,158,11,0.08)',
                      border: '1px solid rgba(245,158,11,0.25)',
                      color: '#f59e0b',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://github.com/DerekRoberts32"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-5 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
              style={{
                background: 'rgba(245,158,11,0.1)',
                border: '1px solid rgba(245,158,11,0.4)',
                color: '#f59e0b',
                borderRadius: '4px',
              }}
            >
              GitHub ↗
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
