import React, { useState, Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import {
  Environment,
  CameraControls,
  Edges,
  Sphere,
  Cylinder,
  Loader,
  OrbitControls,
  SpotLight,
  Lightformer,
  RandomizedLight,AccumulativeShadows
  
} from "@react-three/drei";
import { Color,AmbientLight,PointLight  } from 'three';
import { FBXLoader } from "three/examples/jsm/loaders/FBXLoader";
import "./App.css";
import Planet from "./planets.js";
function App() {

  
  return (
    <>
    <Canvas
     camera={{ position: [1.5, 0.7, -2], fov: 60 }}
     onCreated={({ gl }) => {
       gl.setClearColor(new Color("#000000")); // Siyah arkaplan rengini belirle
      
     }}
   >


 <OrbitControls />

  <CameraControls makeDefault />
      <Planet />
 

    
    
    </Canvas>

  </>
  );
}

export default App;
