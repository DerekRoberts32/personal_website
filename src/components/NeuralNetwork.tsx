import { useRef, useState, useMemo, useCallback, useLayoutEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, Line, Billboard } from '@react-three/drei';
import * as THREE from 'three';
import { nodes, edges, GraphNode } from '../data/graphData';

interface NodeMeshProps {
  node: GraphNode;
  isSelected: boolean;
  isHighlighted: boolean;
  isDimmed: boolean;
  onClick: (node: GraphNode) => void;
}

function NodeMesh({ node, isSelected, isHighlighted, isDimmed, onClick }: NodeMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const glowRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const { gl } = useThree();

  const baseColor = new THREE.Color(node.color);
  const emissiveIntensity = isSelected ? 1.2 : isHighlighted ? 0.8 : hovered ? 0.6 : 0.3;
  const opacity = isDimmed ? 0.2 : 1.0;
  const scale = isSelected ? 1.35 : isHighlighted ? 1.15 : hovered ? 1.1 : 1.0;
  const radius = node.size * 0.28;

  // Set initial group position; useFrame handles the animated y
  useLayoutEffect(() => {
    if (groupRef.current) groupRef.current.position.set(node.x, node.y, node.z);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;

    // Float the entire group so label and sphere move together
    groupRef.current.position.y = node.y + Math.sin(t * 0.6 + node.x) * 0.08;

    const pulseScale = isSelected ? scale + Math.sin(t * 3) * 0.04 : scale;

    if (meshRef.current) {
      meshRef.current.scale.setScalar(pulseScale);
    }

    if (glowRef.current) {
      const glowPulse = 1.0 + Math.sin(t * 2 + node.x) * 0.15;
      glowRef.current.scale.setScalar(pulseScale * glowPulse);
      (glowRef.current.material as THREE.MeshBasicMaterial).opacity =
        isDimmed ? 0.02 : isSelected ? 0.25 : isHighlighted ? 0.18 : hovered ? 0.15 : 0.08;
    }
  });

  const handlePointerOver = useCallback(() => {
    setHovered(true);
    gl.domElement.style.cursor = 'pointer';
  }, [gl]);

  const handlePointerOut = useCallback(() => {
    setHovered(false);
    gl.domElement.style.cursor = 'default';
  }, [gl]);

  return (
    <group ref={groupRef}>
      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[radius * 2.2, 16, 16]} />
        <meshBasicMaterial color={baseColor} transparent opacity={0.08} depthWrite={false} />
      </mesh>

      {/* Main sphere */}
      <mesh
        ref={meshRef}
        onClick={() => onClick(node)}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      >
        <sphereGeometry args={[radius, 32, 32]} />
        <meshStandardMaterial
          color={baseColor}
          emissive={baseColor}
          emissiveIntensity={emissiveIntensity}
          roughness={0.1}
          metalness={0.8}
          transparent
          opacity={opacity}
        />
      </mesh>

      {/* Label — billboard so it always faces the camera */}
      <Billboard position={[0, radius + 0.22, 0]}>
        <Text
          fontSize={0.12 + node.size * 0.03}
          color={isDimmed ? '#334155' : node.color}
          anchorX="center"
          anchorY="bottom"
        >
          {node.label}
        </Text>
      </Billboard>
    </group>
  );
}

interface EdgeLineProps {
  fromNode: GraphNode;
  toNode: GraphNode;
  weight: number;
  isActive: boolean;
  isDimmed: boolean;
}

function EdgeLine({ fromNode, toNode, weight, isActive, isDimmed }: EdgeLineProps) {
  const pts = useMemo(() => {
    const start = new THREE.Vector3(fromNode.x, fromNode.y, fromNode.z);
    const end = new THREE.Vector3(toNode.x, toNode.y, toNode.z);
    const mid = start.clone().lerp(end, 0.5).add(
      new THREE.Vector3(
        (Math.random() - 0.5) * 0.2,
        (Math.random() - 0.5) * 0.4,
        (Math.random() - 0.5) * 0.3,
      )
    );
    const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
    return curve.getPoints(30);
  }, [fromNode.x, fromNode.y, fromNode.z, toNode.x, toNode.y, toNode.z]);

  return (
    <Line
      points={pts}
      color={isActive ? '#00d4ff' : '#1a6090'}
      lineWidth={isActive ? 2.5 : 1.5}
      transparent
      opacity={isDimmed ? 0.05 : isActive ? 0.9 : 0.65 * weight}
    />
  );
}

function Scene({
  selectedId,
  onSelect,
}: {
  selectedId: string | null;
  onSelect: (node: GraphNode | null) => void;
}) {
  const connectedIds = useMemo(() => {
    if (!selectedId) return new Set<string>();
    const connected = new Set<string>();
    edges.forEach((e) => {
      if (e.from === selectedId) connected.add(e.to);
      if (e.to === selectedId) connected.add(e.from);
    });
    return connected;
  }, [selectedId]);

  const activeEdges = useMemo(() => {
    if (!selectedId) return new Set<string>();
    const active = new Set<string>();
    edges.forEach((e, i) => {
      if (e.from === selectedId || e.to === selectedId) active.add(String(i));
    });
    return active;
  }, [selectedId]);

  const handleClick = useCallback(
    (node: GraphNode) => {
      onSelect(selectedId === node.id ? null : node);
    },
    [selectedId, onSelect]
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[0, 0, 5]} intensity={1.5} color="#00d4ff" />
      {/* Reduced intensity to avoid purple-washing the scene */}
      <pointLight position={[-5, 3, 2]} intensity={0.25} color="#5b3fa0" />
      <pointLight position={[5, -3, 2]} intensity={0.5} color="#06ffa5" />

      {/* Edges */}
      {edges.map((edge, i) => {
        const fromNode = nodes.find((n) => n.id === edge.from)!;
        const toNode = nodes.find((n) => n.id === edge.to)!;
        return (
          <EdgeLine
            key={i}
            fromNode={fromNode}
            toNode={toNode}
            weight={edge.weight}
            isActive={activeEdges.has(String(i))}
            isDimmed={!!selectedId && !activeEdges.has(String(i))}
          />
        );
      })}

      {/* Nodes */}
      {nodes.map((node) => (
        <NodeMesh
          key={node.id}
          node={node}
          isSelected={selectedId === node.id}
          isHighlighted={connectedIds.has(node.id)}
          isDimmed={!!selectedId && selectedId !== node.id && !connectedIds.has(node.id)}
          onClick={handleClick}
        />
      ))}

      <OrbitControls
        enablePan={false}
        enableZoom={true}
        minDistance={5}
        maxDistance={20}
        maxPolarAngle={Math.PI * 0.8}
        minPolarAngle={Math.PI * 0.1}
        autoRotate={!selectedId}
        autoRotateSpeed={0.4}
      />
    </>
  );
}

interface NeuralNetworkProps {
  selectedId: string | null;
  onSelect: (node: GraphNode | null) => void;
}

export default function NeuralNetwork({ selectedId, onSelect }: NeuralNetworkProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 12], fov: 55 }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: '#000000' }}
    >
      <Scene selectedId={selectedId} onSelect={onSelect} />
    </Canvas>
  );
}
