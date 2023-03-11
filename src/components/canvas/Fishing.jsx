import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const fishing = useGLTF("./fishing/scene.gltf");

  const ref = useRef(null);

  useFrame(() => (
    (ref.current.rotation.y = ref.current.rotation.y += 0.005)
  ))

  return (
      <mesh
        ref={ref}
      >
        <hemisphereLight
          intensity={0.15}
          groundColor="black"
        />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        />
        <pointLight
          intensity={1}
        />
        <primitive
          object={fishing.scene}
          scale={isMobile ? 3 : 5}
          position={isMobile ? [0, -.8, -.2] : [0, -1.5, -.5]}
          rotation={[0, 0, 0]}
        />
      </mesh>
  )
}

const Fishing = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return() => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  },[]);

  return (
    <Canvas
     frameloop='always'
     shadows
     dpr={[1, 2]}
     camera={{ position: [22, .3, 5], fov: 25 }}
     gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader/>}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}

export default Fishing