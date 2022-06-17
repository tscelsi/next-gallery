import React from 'react'
import {
    Canvas,
    useLoader,
    useFrame,
    useThree,
    extend,
    Dom
} from "@react-three/fiber";
import * as THREE from 'three'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useTheme, Box, Container, Grid, Typography, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from "@mui/material/styles";

extend({ OrbitControls });

const Artwork = ({ setLoaded }) => {
    const groupRef = React.useRef();
    const { nodes } = useLoader(GLTFLoader, "/right_way_round.glb", (loader) => {
        setTimeout(() => setLoaded(true), 1000)
    });
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
            <spotLight
                intensity={0.2}
                castShadow
                angle={0.4}
                penumbra={0.5}
                position={[0, 0, 3]}
                // shadow={{ mapSize: [1024 * 4, 1024 * 4], bias: -0.001 }}
                color={0xffffff}
            // color="white"
            />
            <spotLight
                castShadow
                intensity={0.6}
                color={0xf0f0f0}
                // color="white"
                angle={0.3}
                // shadow-mapSize={new Vector2(2048 * 5, 2048 * 5)}
                penumbra={0.6}
                position={[0, 3, 1]}
            // shadow={{ mapSize: [1024 * 4, 1024 * 4], bias: -0.001 }}
            />
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
            {/* <mesh
                castShadow
                receiveShadow
                visible
                position={nodes.Plane.position}
                geometry={nodes.Plane.geometry}
                material={nodes.Plane.material}
                scale={[2000, 1, 2000]}
            // scale={nodes.Plane.scale}
            ></mesh> */}
            {/* <mesh
                // castShadow
                receiveShadow
                visible
                // position={[0, 0, -1]}
                position={nodes.Plane001.position}
                geometry={nodes.Plane001.geometry}
                material={nodes.Plane001.material}
                scale={[2000, 1, 2000]}
                // scale={nodes.Plane001.scale}
                rotation={nodes.Plane001.rotation}
            ></mesh> */}
        </group>
    );
}

const Home = () => {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("md"));
    const [loaded, setLoaded] = React.useState(false);
    return (
        <Container maxWidth="lg" sx={{ height: "inherit" }}>
            <Grid container sx={{ height: "inherit" }} columnSpacing={5}>
                <Grid item xs={12} md={5} >
                    <Stack sx={{ height: "100%" }} textAlign={desktop ? "start" : "center"} justifyContent="center" alignItems="center" direction="column">
                        <Typography variant="h1" fontWeight={200}>Alison Ray</Typography>
                    </Stack>
                </Grid>
                {desktop && <Grid item xs={7}>
                    <Canvas
                        camera={{
                            position: [0, 0.2, 0.9],
                            far: 3
                        }}
                        onCreated={({ gl }) => {
                            gl.shadowMap.enabled = true;
                            gl.shadowMap.type = THREE.PCFSoftShadowMap;
                            // gl.setClearColor('#FAFAFA')
                            gl.toneMapping = THREE.ACESFilmicToneMapping
                            gl.outputEncoding = THREE.sRGBEncoding
                        }}
                    >
                        <React.Suspense fallback={"Loading..."}>
                            <Artwork setLoaded={setLoaded} />
                        </React.Suspense>

                        {/* <fog attach="fog" args={["black", 0.5, 20]} /> */}
                    </Canvas>
                </Grid>}
            </Grid>

        </Container>
    )
}

const FlexBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "cetnr"
}))

export default Home;