import React from 'react';
import {
    useFrame,
} from '@react-three/fiber';
import { useGLTF, Sky, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const DayModel = () => {
    const groupRef = React.useRef();
    const { nodes } = useGLTF("/right_way_round.glb");
    useFrame((state) => {
        groupRef.current.rotation.y = -0.6 * state.mouse.x;
        groupRef.current.rotation.x = -0.5 * state.mouse.y;
    });
    Object.keys(nodes).forEach((node) => {
        if (nodes[node].type === "Mesh") {
            if (nodes[node].material.map) nodes[node].material.map.anisotropy = 16;
        }
    });
    return (
        <group ref={groupRef}>
            <mesh
                visible
                castShadow
                position={nodes.Cube001.position}
                geometry={nodes.Cube001.geometry}
                material={nodes.Cube001.material}
                scale={nodes.Cube001.scale}
                rotation={nodes.Cube001.rotation}
            ></mesh>
            <mesh
                castShadow
                visible
                position={nodes.night_vase001.position}
                geometry={nodes.night_vase001.geometry}
                material={nodes.night_vase001.material}
                scale={nodes.night_vase001.scale}
                rotation={nodes.night_vase001.rotation}
            ></mesh>
            <hemisphereLight args={["#97B2CB", "#FAFAFA", 0.4]} />
            <Sky />
            <Sparkles speed={0.2} count={30} />
        </group>
    );
}

useGLTF.preload("/right_way_round.glb")

export default DayModel;