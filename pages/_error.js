import { Grid, Typography, Link, Stack, IconButton, Box, Container } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react'
import Image from "next/image";

function Error({ statusCode }) {
    return (
        <Container sx={{ height: "90vh" }} maxWidth="lg">
            <Stack sx={{ height: "inherit" }} direciton="column" justifyContent="center" alignItems="center">
                <Typography >{statusCode
                    ? `An error ${statusCode} occurred on server`
                    : 'An error occurred on client'}</Typography>
                <Image quality={100} src="/misty_night_vase.png" width={1920} height={1080} />
            </Stack>
        </Container>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error