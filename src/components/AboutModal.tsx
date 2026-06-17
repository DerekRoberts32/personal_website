import { motion, AnimatePresence } from 'framer-motion';

interface AboutModalProps {
  open: boolean;
  onClose: () => void;
}

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

export default function AboutModal({ open, onClose }: AboutModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(6px)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 pointer-events-none">
            <motion.div
              className="relative w-full max-w-2xl max-h-[88vh] overflow-y-auto rounded-2xl pointer-events-auto"
              style={{
                background: 'rgba(4,4,10,0.98)',
                border: '1px solid rgba(0,212,255,0.15)',
                boxShadow: '0 0 80px rgba(0,212,255,0.08)',
              }}
              initial={{ opacity: 0, scale: 0.96, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 24 }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {/* Close */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-slate-400 hover:text-white transition-colors z-10"
                style={{ border: '1px solid rgba(0,212,255,0.2)', background: 'rgba(0,212,255,0.05)' }}
              >
                ✕
              </button>

              {/* Content */}
              <div className="flex flex-col items-center px-8 py-10 text-center gap-8">

                {/* Label */}
                <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                  About Me
                </div>

                {/* Photo */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-full blur-2xl opacity-20"
                    style={{ background: 'radial-gradient(circle, #00d4ff, #7c3aed)' }}
                  />
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      border: '1px solid rgba(0,212,255,0.25)',
                      boxShadow: '0 0 40px rgba(0,212,255,0.1)',
                      width: 180,
                      height: 180,
                    }}
                  >
                    <img src={`${import.meta.env.BASE_URL}headshot.jpeg`} alt="Derek Roberts" className="w-full h-full object-cover object-top" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-5 h-5" style={{ borderTop: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' }} />
                  <div className="absolute -top-2 -right-2 w-5 h-5" style={{ borderTop: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' }} />
                  <div className="absolute -bottom-2 -left-2 w-5 h-5" style={{ borderBottom: '2px solid #00d4ff', borderLeft: '2px solid #00d4ff' }} />
                  <div className="absolute -bottom-2 -right-2 w-5 h-5" style={{ borderBottom: '2px solid #00d4ff', borderRight: '2px solid #00d4ff' }} />
                </div>

                {/* Name */}
                <div>
                  <h2 className="text-3xl font-black text-white glow-text">
                    Derek <span style={{ color: '#00d4ff' }}>Roberts</span>
                  </h2>
                  <p className="text-slate-400 text-sm font-mono mt-2">
                    Full-Stack Software Engineer · AI &amp; Cloud
                  </p>
                  <p className="text-slate-600 text-xs font-mono mt-1">
                    John Hancock · UPenn MSE-AI · Boston University CS
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                  {stats.map(({ value, label }) => (
                    <div
                      key={label}
                      className="py-5 px-3 rounded-xl text-center"
                      style={{
                        background: 'rgba(0,212,255,0.04)',
                        border: '1px solid rgba(0,212,255,0.12)',
                      }}
                    >
                      <div className="text-xl font-black text-white glow-text">{value}</div>
                      <div className="text-xs font-mono text-slate-500 mt-1.5 leading-snug">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Bio */}
                <div className="space-y-4 text-slate-300 text-sm leading-relaxed max-w-lg">
                  <p>
                    I'm a Full-Stack Software Engineer at John Hancock, where I own production
                    deployments for globally distributed virtual assistants across John Hancock
                    and Manulife. I led the migration of our entire chatbot platform to the
                    Microsoft Agents SDK, enabling the shift from predictive to agentic AI architectures.
                  </p>
                  <p>
                    Currently pursuing my Master of Science in Engineering: Artificial Intelligence
                    at the University of Pennsylvania, building on a Computer Science degree from
                    Boston University and hands-on production experience at the intersection of
                    software engineering and AI.
                  </p>
                </div>

                {/* Skills — row table format */}
                <div className="w-full">
                  <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase mb-5">
                    Technical Skills
                  </div>
                  <div
                    className="w-full text-left"
                    style={{ border: '1px solid rgba(0,212,255,0.1)' }}
                  >
                    {skills.map(({ category, items }, i) => (
                      <div
                        key={category}
                        className="flex items-start gap-5 px-6 py-5"
                        style={{
                          borderBottom: i < skills.length - 1
                            ? '1px solid rgba(0,212,255,0.07)'
                            : undefined,
                          background: i % 2 === 0 ? 'rgba(0,212,255,0.02)' : 'transparent',
                        }}
                      >
                        <div className="w-24 flex-shrink-0 font-mono text-xs text-cyan-500 tracking-wide uppercase pt-1 leading-none">
                          {category}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {items.map((item) => (
                            <span
                              key={item}
                              className="text-xs text-slate-300 px-2.5 py-1 rounded"
                              style={{
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.08)',
                              }}
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col items-center gap-5 w-full pt-2 pb-4">
                  <div className="font-mono text-xs text-cyan-400 tracking-widest uppercase">
                    Get in Touch
                  </div>
                  <h3 className="text-2xl font-black text-white">Let's connect</h3>
                  <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                    Open to conversations about engineering, AI systems, and interesting problems.
                  </p>
                  <div className="flex flex-wrap gap-3 justify-center">
                    <a
                      href="mailto:derekroberts.business@gmail.com"
                      className="px-6 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
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
                      className="px-6 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
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
                      className="px-6 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
                      style={{
                        background: 'rgba(6,255,165,0.05)',
                        border: '1px solid rgba(6,255,165,0.25)',
                        color: '#06ffa5',
                        borderRadius: '4px',
                      }}
                    >
                      GitHub ↗
                    </a>
                    <a
                      href={`${import.meta.env.BASE_URL}Derek_Resume_Updated.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-2.5 text-xs font-mono font-bold tracking-widest uppercase transition-all hover:scale-105"
                      style={{
                        background: 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.15)',
                        color: '#94a3b8',
                        borderRadius: '4px',
                      }}
                    >
                      Resume ↗
                    </a>
                  </div>
                  <div className="font-mono text-xs text-slate-700 mt-3">
                    Derek Roberts · Boston, MA · {new Date().getFullYear()}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
