import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Box() {
  return (
    <mesh rotation={[0.3, 0.6, 0]}>
      <boxGeometry args={[2.6, 2.6, 2.6]} />
      <meshStandardMaterial color={"#d4af37"} metalness={0.6} roughness={0.2} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <div style={{ width: "100%", height: "420px" }}>
      <Canvas camera={{ position: [0, 0, 7] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5,5,5]} intensity={0.8} />
        <Box />
        <OrbitControls enableZoom={false} autoRotate />
      </Canvas>
    </div>
  );
}
