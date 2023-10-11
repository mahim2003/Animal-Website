import React, {useState, useRef}from 'react';
import EarthDayMap from "../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../assets/textures/8k_earth_clouds.jpg";
import {TextureLoader} from "three";
import {useLoader, useFrame} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import * as THREE from "three";




export function Earth(props) {
    const [sphereSize, setSphereSize] = useState(2);
    const[colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader,[EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
    const earthRef = useRef();
    const cloudsRef = useRef();

    useFrame(({clock}) => {
      const elapsedTime = clock.getElapsedTime();  
      earthRef.current.rotation.y= elapsedTime/6;
      cloudsRef.current.rotation.y= elapsedTime/6;

      });
    const updateSphereSize = () => {
        if (window.innerWidth < 768) {
          setSphereSize(1.2);
        } else {
          setSphereSize(2);
        }
    }; 
    React.useEffect(() => {
        updateSphereSize();
        window.addEventListener('resize', updateSphereSize);
        return () => {
          window.removeEventListener('resize', updateSphereSize);
        };
    }, []);
    
    return <>
        {/*<ambientLight intensity={0.2}/>*/}
        <pointLight color="#f6f3ea" position={[2,0,3]} intensity={41.8}/>
        <mesh ref={cloudsRef} >
            <sphereGeometry args ={[sphereSize+0.005,32,32]}/>
            <meshPhongMaterial 
                map={cloudsMap} 
                opacity={0.4} 
                depthWrite={true} 
                transparent={true} 
                side={THREE.DoubleSide}
            />
        </mesh>
        <mesh ref={earthRef}>
            <sphereGeometry args={[sphereSize,32,32]} />
            <meshPhongMaterial specularMap={specularMap}/>
            <meshStandardMaterial map={colorMap} normalMap={normalMap} metalness={0.3} roughness={0.7} />
              
        </mesh>    
    </>;
}

