import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative px-6 py-24 text-center grid-bg"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-4">
            Get in Touch
          </div>
          <h2 className="text-4xl font-black text-white mb-4">
            Let's connect
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed mb-10">
            Open to conversations about engineering, AI systems, and interesting problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:derekroberts.business@gmail.com"
              className="px-8 py-3 text-sm font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
              style={{
                background: 'rgba(0,212,255,0.1)',
                border: '1px solid rgba(0,212,255,0.4)',
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
                background: 'rgba(124,58,237,0.1)',
                border: '1px solid rgba(124,58,237,0.4)',
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
                background: 'rgba(6,255,165,0.06)',
                border: '1px solid rgba(6,255,165,0.3)',
                color: '#06ffa5',
                borderRadius: '4px',
              }}
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 }}
        className="mt-20 font-mono text-xs text-slate-700 text-center"
      >
        Derek Roberts · Boston, MA · {new Date().getFullYear()}
      </motion.div>
    </section>
  );
}
