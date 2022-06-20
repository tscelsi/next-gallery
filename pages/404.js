import { Grid, Typography, Link, Stack, IconButton, Box, Container } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react'
import Image from "next/image";

const EMAIL = "aray@internode.on.net"

export default function contact() {
    const copy = () => {
        navigator.clipboard.writeText(EMAIL)
    }
    return (
        <Container sx={{ height: "90vh" }} maxWidth="lg">
            <Stack sx={{ height: "inherit" }} direciton="column" justifyContent="center" alignItems="center">
                <Typography >404 - Not Found</Typography>
                <Image quality={100} src="/misty_night_vase.png" width={1920} height={1080} />
            </Stack>
        </Container>
    )
}
