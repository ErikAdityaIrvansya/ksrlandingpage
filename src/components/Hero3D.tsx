"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function BackgroundCircles() {
  const count = 15;
  const spheres = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 5,
      ] as [number, number, number],
      scale: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.6 ? "#E22129" : "#ffffff",
      speed: Math.random() * 2 + 1,
    }));
  }, []);

  return (
    <>
      {spheres.map((sphere, i) => (
        <Float key={i} speed={sphere.speed} rotationIntensity={2} floatIntensity={2}>
          <Sphere position={sphere.position} scale={sphere.scale}>
            <meshStandardMaterial color={sphere.color} transparent opacity={0.4} />
          </Sphere>
        </Float>
      ))}
    </>
  );
}

function MainBlob() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.001;
      mesh.current.rotation.y += 0.002;
    }
  });

  return (
    <Sphere args={[1, 100, 100]} scale={1.5}>
      <MeshDistortMaterial
        color="#E22129"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
      />
    </Sphere>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, -10]} intensity={0.5} />
        
        <MainBlob />
        <BackgroundCircles />
        
        <fog attach="fog" args={["#ffffff", 5, 15]} />
      </Canvas>
    </div>
  );
}
