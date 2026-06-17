import { motion } from 'framer-motion';

interface HeroSectionProps {
  onAbout: () => void;
}

export default function HeroSection({ onAbout }: HeroSectionProps) {
  return (
    <div className="relative z-10 h-full pointer-events-none select-none">
      {/* Top right nav */}
      <motion.nav
        className="absolute top-8 right-8 flex gap-6 pointer-events-auto"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        {[
          { label: 'LinkedIn', href: 'https://linkedin.com/in/derekaroberts' },
          { label: 'GitHub', href: 'https://github.com/DerekRoberts32' },
          { label: 'Resume', href: `${import.meta.env.BASE_URL}Derek_Resume_Updated.pdf` },
        ].map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-mono text-slate-400 hover:text-cyan-400 transition-colors tracking-widest uppercase"
          >
            {link.label}
          </a>
        ))}
      </motion.nav>

      {/* Bottom-left: identity + explore */}
      <motion.div
        className="absolute bottom-16 left-8 pointer-events-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-2">
          Neural Resume · Interactive
        </div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2 glow-text">
          Derek <span style={{ color: '#00d4ff' }}>Roberts</span>
        </h1>
        <p className="text-xs text-slate-400 font-mono mb-5 leading-relaxed">
          Full-Stack SWE · AI &amp; Cloud
          <br />
          <span className="text-slate-600">John Hancock · UPenn MSE-AI</span>
        </p>
        <button
          onClick={onAbout}
          className="px-5 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105 active:scale-95"
          style={{
            border: '1px solid rgba(0,212,255,0.4)',
            color: '#00d4ff',
            background: 'rgba(0,212,255,0.06)',
            borderRadius: '4px',
          }}
        >
          About Me
        </button>
      </motion.div>

      {/* Bottom-center: legend */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-5 pointer-events-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.0 }}
      >
        {[
          { color: '#00d4ff', label: 'Skills' },
          { color: '#7c3aed', label: 'Experience' },
          { color: '#06ffa5', label: 'Education' },
          { color: '#f59e0b', label: 'Project' },
        ].map(({ color, label }) => (
          <div key={label} className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: color, boxShadow: `0 0 6px ${color}` }}
            />
            <span className="text-xs font-mono text-slate-500">{label}</span>
          </div>
        ))}
      </motion.div>

      {/* Bottom-right: hint */}
      <motion.div
        className="absolute bottom-8 right-8 font-mono text-xs text-slate-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        Click any node to explore
      </motion.div>
    </div>
  );
}
