import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import InteractiveCube from '../InteractiveCube/InteractiveCube';
import Hero from '../Hero/Hero';

const isMobileOrTablet = () => {
  const ua = navigator.userAgent;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);
};

const HomePage = () => {
  return (
    <div className="container">
      <Hero />
      {!isMobileOrTablet() && (
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <InteractiveCube />
          <OrbitControls />
        </Canvas>
      )}
    </div>
  );
};

export default HomePage;
