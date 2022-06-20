import { useGLTF } from '@react-three/drei'
import React from 'react'
import {
    useFrame,
} from "@react-three/fiber";
import * as THREE from 'three'

const NightModel = () => {
    const group = React.useRef();
    const lightTarget = React.useRef();
    const light = React.useMemo(() => new THREE.SpotLight("#FFCD8F"), [])
    const { nodes, materials } = useGLTF("/night_art.glb");
    useFrame((state) => {
        group.current.rotation.y = -0.4 * state.mouse.x;
        group.current.rotation.x = -0.4 * state.mouse.y;
        lightTarget.current.position.x = 0.1 * Math.sin(state.clock.getElapsedTime())
    });
    console.log(nodes);
    return (
        <group ref={group} dispose={null}>
            <mesh
                castShadow
                geometry={nodes.night_vase001.geometry}
                position={nodes.night_vase001.position}
                scale={nodes.night_vase001.scale}
                rotation={nodes.night_vase001.rotation}
                material={materials['night_vase']}
            />
            <mesh
                castShadow
                geometry={nodes.canvas.geometry}
                position={nodes.canvas.position}
                rotation={nodes.canvas.rotation}
                scale={nodes.canvas.scale}
                material={materials['canvas']}
            />
            <mesh
                // visible
                castShadow
                receiveShadow
                position={nodes.Floor.position}
                geometry={nodes.Floor.geometry}
                material={nodes.Floor.material}
                scale={nodes.Floor.scale}
                rotation={nodes.Floor.rotation}
            ></mesh>
            <primitive object={light} intensity={2} position={[0, 1.18, 0.27]} penumbra={0.3} angle={0.3} decay={2} />
            <primitive ref={lightTarget} object={light.target} position={[0, 0, -0.1]} />
        </group>
    )
}

// useGLTF.preload("/night_art.glb");

export default NightModel;