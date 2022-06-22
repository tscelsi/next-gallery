import { Container, ImageList, ImageListItem, ImageListItemBar, Fade } from '@mui/material'
import getPhotographs from "../src/utils/getPhotographs";
import React from 'react'
import Image from 'next/image';
import { getPlaiceholder } from "plaiceholder";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material";
import Masonry from '@mui/lab/Masonry';

export async function getStaticProps(context) {
    // load images
    const photos = getPhotographs();
    let plaiceHolderPhotos = [];
    for (let i = 0; i < photos.length; i++) {
        const p = photos[i];
        const { base64, img } = await getPlaiceholder(p.src)
        plaiceHolderPhotos.push({
            ...p,
            imageProps: {
                ...img,
                blurDataURL: base64
            }
        })
    }
    return {
        props: {
            photos: plaiceHolderPhotos
        },
    }
}

export default function Photography({ photos }) {
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up("lg"));
    return (
        <Container maxWidth="xl">
            <Masonry columns={desktop ? 2 : 1}>
                {/* <ImageList variant="masonry" cols={desktop ? 2 : 1} gap={20}> */}
                {photos.map(((p, idx) => (
                    <Fade in unmountOnExit>
                        <ImageListItem key={idx}>
                            <Image quality={100} width={p.imgWidth} height={p.imgHeight} {...p.imageProps} placeholder="blur" />
                            <ImageListItemBar position="below" title={p.title} />
                        </ImageListItem>
                    </Fade>
                )))}
                {/* </ImageList> */}
            </Masonry>
        </Container>
    )
}