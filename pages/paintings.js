import { Container, ImageList, ImageListItem, ImageListItemBar, Stack, Typography, Box, Fade } from '@mui/material'
import getPaintings from "../src/utils/getPaintings";
import React from 'react'
import Image from 'next/image';
import { getPlaiceholder } from "plaiceholder";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";

export async function getStaticProps(context) {
    // load images
    const paintings = getPaintings();
    let plaiceHolderPaintings = [];
    for (let i = 0; i < paintings.length; i++) {
        const p = paintings[i];
        const { base64, img } = await getPlaiceholder(p.src)
        plaiceHolderPaintings.push({
            ...p,
            imageProps: {
                ...img,
                blurDataURL: base64
            }
        })
    }
    return {
        props: {
            paintings: plaiceHolderPaintings
        },
    }
}

export default function Painting({ paintings }) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    const tablet = useMediaQuery(theme.breakpoints.between("md", "lg"));
    return (
        <Container maxWidth="xxl">
            <ImageList variant="masonry" cols={desktop ? 3 : tablet ? 2 : 1} gap={20}>
                {paintings.map(((p, idx) => (
                    <Fade key={idx} in easing={{ enter: "1000", exit: "1000" }} unmountOnExit>
                        <ImageListItem key={idx}>
                            <Box sx={{ boxShadow: "0px 12px 12px -6px rgba(0, 0, 0, 0.16), 0px 0px 1px rgba(0, 0, 0, 0.4);" }}>
                                <Image quality={100} width={p.imgWidth} height={p.imgHeight} {...p.imageProps} placeholder="blur" />
                            </Box>
                            <ImageListItemBar position="below" title={`${p.title} ${p.date} - ${p.forSale ? (p.sold ? "sold" : "$" + p.price) : "not for sale"}`} subtitle={
                                <Stack>
                                    <Typography variant="caption">{`${p.paint} on ${p.material}`}</Typography>
                                    <Typography variant="caption">{`${p.height}cm x ${p.width}cm`}</Typography>
                                </Stack>
                            } />
                        </ImageListItem>
                    </Fade>
                )))}
            </ImageList>
        </Container >
    )
}