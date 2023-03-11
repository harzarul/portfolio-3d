import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const skull = useGLTF("./forest_skull/scene.gltf");

  const ref = useRef(null);

  useFrame(() => (
    (ref.current.rotation.y = ref.current.rotation.y += -0.005)
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
          position={[250, 100, 10]}
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
          object={skull.scene}
          scale={isMobile ? 4 : 5}
          position={isMobile ? [0, -30, -10] : [0, -30, -10]}
          rotation={[0, 30, 0]}
        />
      </mesh>
  )
}

const Skull = () => {
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
     dpr={[1, 4]}
     camera={{ position: [0, 70, 5], fov: 50 }}
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

export default Skull