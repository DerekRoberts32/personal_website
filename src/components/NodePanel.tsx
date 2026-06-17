import { motion, AnimatePresence } from 'framer-motion';
import { GraphNode } from '../data/graphData';
import { useState } from 'react';

interface NodePanelProps {
  node: GraphNode | null;
  onClose: () => void;
}

const categoryLabel: Record<string, string> = {
  skill: 'SKILL',
  experience: 'EXPERIENCE',
  education: 'EDUCATION',
  project: 'PROJECT',
};

export default function NodePanel({ node, onClose }: NodePanelProps) {
  const [activeImg, setActiveImg] = useState(0);

  return (
    <AnimatePresence>
      {node && (
        <motion.div
          key={node.id}
          style={{ position: 'fixed', inset: 0, zIndex: 50 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          {/* Backdrop */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0,0,0,0.72)',
              backdropFilter: 'blur(6px)',
            }}
            onClick={onClose}
          />

          {/* Centering container */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px',
              pointerEvents: 'none',
            }}
          >
            <motion.div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                background: 'rgba(4,4,10,0.98)',
                border: `1px solid ${node.color}40`,
                borderRadius: '16px',
                boxShadow: `0 0 80px ${node.color}18, 0 32px 80px rgba(0,0,0,0.8)`,
                maxHeight: '80vh',
                overflowY: 'auto',
                pointerEvents: 'auto',
              }}
              initial={{ scale: 0.93, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.93, y: 20, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: `1px solid ${node.color}44`,
                  color: node.color,
                  background: `${node.color}0a`,
                  cursor: 'pointer',
                  fontSize: '14px',
                  zIndex: 10,
                  flexShrink: 0,
                }}
              >
                ✕
              </button>

              {/* Header */}
              <div
                style={{
                  padding: '52px 60px 32px 60px',
                  borderBottom: `1px solid ${node.color}18`,
                }}
              >
                <div
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: node.color,
                    marginBottom: '12px',
                  }}
                >
                  {categoryLabel[node.category]}
                </div>
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 700,
                    color: 'white',
                    lineHeight: 1.3,
                    margin: 0,
                    paddingRight: '48px',
                  }}
                >
                  {node.detail.title}
                </h2>
                {node.detail.subtitle && (
                  <p style={{ fontSize: '14px', color: `${node.color}cc`, marginTop: '8px', marginBottom: 0 }}>
                    {node.detail.subtitle}
                  </p>
                )}
                {(node.detail.period || node.detail.location) && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      marginTop: '12px',
                      fontSize: '12px',
                      color: '#64748b',
                      fontFamily: 'monospace',
                    }}
                  >
                    {node.detail.period && <span>{node.detail.period}</span>}
                    {node.detail.location && <span>· {node.detail.location}</span>}
                  </div>
                )}
                {node.detail.tags && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '20px' }}>
                    {node.detail.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontSize: '12px',
                          fontFamily: 'monospace',
                          padding: '4px 10px',
                          borderRadius: '4px',
                          background: `${node.color}12`,
                          border: `1px solid ${node.color}30`,
                          color: node.color,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Body */}
              <div style={{ padding: '32px 60px 52px 60px' }}>
                {/* Bullets */}
                {node.detail.bullets && (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {node.detail.bullets.map((b, i) => (
                      <motion.div
                        key={i}
                        initial={{ x: 12, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.04 * i, type: 'tween' }}
                        style={{
                          display: 'flex',
                          gap: '12px',
                          fontSize: '14px',
                          color: '#cbd5e1',
                          lineHeight: 1.65,
                        }}
                      >
                        <span
                          style={{
                            flexShrink: 0,
                            marginTop: '9px',
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%',
                            background: node.color,
                          }}
                        />
                        {b}
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Screenshots */}
                {node.detail.images && node.detail.images.length > 0 && (
                  <div style={{ marginTop: node.detail.bullets ? '32px' : '0' }}>
                    <div
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '11px',
                        fontWeight: 700,
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: `${node.color}99`,
                        marginBottom: '16px',
                      }}
                    >
                      Screenshots
                    </div>
                    <div
                      style={{
                        borderRadius: '8px',
                        overflow: 'hidden',
                        border: `1px solid ${node.color}28`,
                      }}
                    >
                      <img
                        src={node.detail.images[activeImg]}
                        alt="screenshot"
                        style={{ width: '100%', display: 'block' }}
                      />
                    </div>
                    {node.detail.images.length > 1 && (
                      <div style={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
                        {node.detail.images.map((img, i) => (
                          <button
                            key={img}
                            onClick={() => setActiveImg(i)}
                            style={{
                              flex: 1,
                              height: '56px',
                              borderRadius: '6px',
                              overflow: 'hidden',
                              border: `2px solid ${activeImg === i ? node.color : `${node.color}20`}`,
                              opacity: activeImg === i ? 1 : 0.45,
                              cursor: 'pointer',
                              padding: 0,
                            }}
                          >
                            <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Links */}
                {node.detail.links && (
                  <div
                    style={{
                      display: 'flex',
                      gap: '12px',
                      marginTop: node.detail.bullets || node.detail.images ? '32px' : '0',
                    }}
                  >
                    {node.detail.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontSize: '11px',
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          padding: '10px 20px',
                          borderRadius: '4px',
                          background: `${node.color}15`,
                          border: `1px solid ${node.color}50`,
                          color: node.color,
                          textDecoration: 'none',
                        }}
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
