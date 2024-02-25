import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { Environment } from '@react-three/drei';

const Model = () => {
  const gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/mechanical-keyboard-tenkeyless/model.gltf');
  return <primitive object={gltf.scene} position={[0,1,1]}rotation={[Math.PI / 2, 0, 0]} />;
};

const InteractiveModel = () => {
  const meshRef = useRef();
  const [hovered, setHover] = useState(false);

  return (
    <>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? [1.02, 1.02, 1.02] : [1, 1, 1]}
      >
        <Model />
      </mesh>
      <Environment preset="forest" />
    </>
  );
};

export default InteractiveModel;
