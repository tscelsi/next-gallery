import React from 'react'
import {
    Canvas,
    extend,
} from "@react-three/fiber";
import * as THREE from 'three'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { useTheme, Box, Grid, Typography, Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from "@mui/material/styles";
import canvasStyles from "./index.module.css";
import Loader from "../src/components/Three/Loader";
import NightModel from "../src/components/Three/NightModel";
import DayModel from "../src/components/Three/DayModel";

extend({ OrbitControls });

const Home = () => {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("md"));
    return (
        <>
            <Box sx={{ zIndex: 10, position: "relative", height: "inherit" }}>
                <Grid container sx={{ height: "inherit" }} columnSpacing={5}>
                    <Grid item xs={12} md={5} >
                        <Stack sx={{ height: "100%" }} textAlign={desktop ? "start" : "center"} justifyContent="center" alignItems="center" direction="column">
                            <Typography sx={{ position: "relative", paddingLeft: desktop ? "100px" : "0px", zIndex: 1000 }} variant="h1" fontWeight={200}>Alison Ray</Typography>
                        </Stack>
                    </Grid>
                </Grid>
                {desktop &&
                    <Canvas
                        className={canvasStyles.canvas}
                        camera={{
                            position: [0, 0.2, 1],
                            filmOffset: -15,
                            far: 200
                        }}
                        onCreated={({ gl }) => {
                            gl.shadowMap.enabled = true;
                            gl.shadowMap.type = THREE.PCFSoftShadowMap;
                            // gl.setClearColor('#FAFAFA')
                            gl.toneMapping = THREE.ACESFilmicToneMapping
                            gl.outputEncoding = THREE.sRGBEncoding
                        }}
                    >
                        <React.Suspense fallback={<Loader />}>
                            <ambientLight
                                intensity={0.4}
                                color={"#C1CFFF"}
                            />
                            {theme.palette.mode === "light" ? <DayModel /> : <NightModel />}
                        </React.Suspense>

                    </Canvas>}
            </Box>

        </>
    )
}

export default Home;