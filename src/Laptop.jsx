import React, { useState, useEffect } from "react";

import {
  Environment,
  PresentationControls,
  Html,
  useGLTF,
} from "@react-three/drei";
import "./style.css";
export default function Laptop() {
  const laptop = useGLTF("./src/model.gltf");

  const [zoom, setZoom] = useState(1);

  //zoom efect
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      setZoom((prevZoom) => {
        const newZoom = prevZoom + event.deltaY * -3.01;
        return Math.min(Math.max(newZoom, 3.5), 2); // Limit the zoom level between 0.5 and 2
      });
    };

    window.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <>
      <Environment preset="warehouse" />
      <PresentationControls
        global
        polar={[-0.3, 0.2]}
        azimuth={[-0.9, 0.2]}
        zoom={zoom}
      >
        <primitive object={laptop.scene} position-y={-1.2}>
          <Html
            wrapperClass="laptop"
            position={[0, 1.57, -1.5]}
            transform
            distanceFactor={1.16}
            rotation-x={-0.25}
          >
            <iframe src="https://the-anand.vercel.app/" />
          </Html>
        </primitive>
      </PresentationControls>
    </>
  );
}
