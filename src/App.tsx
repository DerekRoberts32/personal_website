import { useState, Suspense } from 'react';
import { GraphNode } from './data/graphData';
import NeuralNetwork from './components/NeuralNetwork';
import NodePanel from './components/NodePanel';
import HeroSection from './components/HeroSection';
import AboutModal from './components/AboutModal';

function App() {
  const [selectedNode, setSelectedNode] = useState<GraphNode | null>(null);
  const [showAbout, setShowAbout] = useState(false);

  const handleAbout = () => {
    setSelectedNode(null); // close node panel if open
    setShowAbout(true);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <div className="scanline" />

      {/* Full-screen neural network */}
      <div className="absolute inset-0">
        <Suspense fallback={null}>
          <NeuralNetwork
            selectedId={selectedNode?.id ?? null}
            onSelect={setSelectedNode}
          />
        </Suspense>
      </div>

      {/* HUD overlay */}
      <HeroSection onAbout={handleAbout} />

      {/* Node detail panel (slides in from right) */}
      <NodePanel node={selectedNode} onClose={() => setSelectedNode(null)} />

      {/* About modal (opens over the network) */}
      <AboutModal open={showAbout} onClose={() => setShowAbout(false)} />
    </div>
  );
}

export default App;
