import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Position de la souris normalisée (-1 → 1), partagée par toute la scène
const pointer = { x: 0, y: 0 };

const Particles = ({ count = 500, color, opacity }) => {
  const ref = useRef();
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 26;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 16;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10 - 3;
    }
    return arr;
  }, [count]);

  useFrame((_, delta) => {
    ref.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color={color} transparent opacity={opacity} sizeAttenuation depthWrite={false} />
    </points>
  );
};

const SpinningWire = ({ speed = 0.1, children, ...props }) => {
  const ref = useRef();
  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed;
    ref.current.rotation.y += delta * speed * 1.4;
  });
  return <mesh ref={ref} {...props}>{children}</mesh>;
};

const Shapes = ({ isDark }) => {
  const group = useRef();
  const { viewport } = useThree();
  const edge = viewport.width / 2;
  const mobile = viewport.width < 7;

  // Parallaxe : la scène pivote doucement vers la souris
  useFrame((_, delta) => {
    const g = group.current;
    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, pointer.x * 0.3, 2.5, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, -pointer.y * 0.18, 2.5, delta);
  });

  // Sur mobile la photo est sous le texte : la sphère la suit et reste à sa taille
  const mainPosition = mobile ? [0, -viewport.height * 0.2, -2] : [edge * 0.5, 0.1, -2];
  const mainScale = mobile ? viewport.width * 0.42 : 2;

  return (
    <group ref={group}>
      {/* Sphère principale qui ondule, derrière la photo */}
      <Float speed={1.4} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={mainPosition} scale={mainScale}>
          <icosahedronGeometry args={[1, 12]} />
          <MeshDistortMaterial
            color={isDark ? '#4f46e5' : '#6366f1'}
            distort={0.38}
            speed={1.8}
            roughness={0.2}
            metalness={0.5}
          />
        </mesh>
      </Float>

      {/* Coque en fil de fer autour de la sphère */}
      <SpinningWire position={mainPosition} scale={mainScale * 1.45} speed={0.08}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial wireframe color="#818cf8" transparent opacity={isDark ? 0.22 : 0.3} />
      </SpinningWire>

      {/* Formes secondaires dans les marges, à z ≈ 0 pour que edge corresponde au bord de l'écran */}
      {!mobile && (
        <>
          <Float speed={1.6} rotationIntensity={2} floatIntensity={1}>
            <mesh position={[-edge * 0.9, -1.4, 0]} scale={0.28}>
              <octahedronGeometry args={[1, 0]} />
              <meshStandardMaterial color="#4338ca" metalness={0.4} roughness={0.3} flatShading />
            </mesh>
          </Float>

          <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
            <mesh position={[edge * 0.9, 2.5, -0.5]} scale={0.38} rotation={[0.6, 0.2, 0]}>
              <torusGeometry args={[1, 0.28, 24, 80]} />
              <meshStandardMaterial color="#22d3ee" metalness={0.6} roughness={0.25} />
            </mesh>
          </Float>

          <SpinningWire position={[edge * 0.9, -2.3, 0]} scale={0.28} speed={0.3}>
            <dodecahedronGeometry args={[1, 0]} />
            <meshBasicMaterial wireframe color="#a5b4fc" transparent opacity={0.5} />
          </SpinningWire>
        </>
      )}
    </group>
  );
};

const HeroScene = ({ isDark }) => {
  const wrapperRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, []);

  // Met l'animation en pause quand le hero n'est plus visible
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting));
    if (wrapperRef.current) observer.observe(wrapperRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={wrapperRef} className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        frameloop={visible ? 'always' : 'never'}
      >
        <ambientLight intensity={isDark ? 0.5 : 0.8} />
        <directionalLight position={[5, 5, 5]} intensity={1.4} />
        <pointLight position={[-6, -3, 3]} intensity={30} color="#22d3ee" />
        <pointLight position={[6, 4, 2]} intensity={20} color="#a855f7" />
        <Shapes isDark={isDark} />
        <Particles color={isDark ? '#a5b4fc' : '#6366f1'} opacity={isDark ? 0.6 : 0.4} />
      </Canvas>
    </div>
  );
};

export default HeroScene;
