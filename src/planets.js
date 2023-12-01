import "./App.css";
import { Environment, useGLTF, useAnimations, Lightformer,RandomizedLight} from "@react-three/drei";
import char1 from "./components/dene.glb";
import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef } from "react";
import space1 from "./components/space.glb";
import { Color,AmbientLight,PointLight  } from 'three';
import * as THREE from 'three'; 
function Planet() {
    const { scene, animations } = useGLTF(char1);
    scene.scale.set(2,2,2);
    const { actions } = useAnimations(animations, scene);

    React.useEffect(() => {
      const animationName = 'solar system'; // Animasyon ismi
      const animation = actions[animationName];
  
      if (animation) {
        // Animasyon süresini ve tekrarını ayarlayabilirsiniz
        animation.reset().setLoop(THREE.LoopRepeat, Infinity).play().setDuration(240);
      }
    }, [actions]);

const space = useGLTF(space1);
space.scene.scale.set(100,100,100);

const light = new PointLight(0xffffff, 0.4, 10);
light.position.set(0, 0, 0);
scene.add(light);

const light1 = new AmbientLight(0xffffff, 0.4, 0);
light1.position.set(500, 500, 500);
scene.add(light1);
  return (
    <>

    
    <primitive object={space.scene} position-y={-130} position-x={-100} position-z={100} />
    
      <primitive       onClick={(event) => {
        console.log(event.intersections[0].object.parent.name);
      
         
        }} object={scene} position-y={0} position-x={0} position-z={0}   />

    </>
    
  );
}

export default Planet;