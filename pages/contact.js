import { Grid, Typography, Link, Stack, IconButton, Box } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import React from 'react'

const EMAIL = "aray@internode.on.net"

export default function contact() {
    const copy = () => {
        navigator.clipboard.writeText(EMAIL)
    }
    return (
        <Grid sx={{ height: "inherit" }} container justifyContent="center" alignItems="center">
            <Grid item>
                <Typography variant="h3" sx={{ marginBottom: "10px" }}>Contact Alison</Typography>
                <Typography variant="h5"><Link underline="hover" href="tel:+61466615619">+61 466 615 619</Link></Typography>
                <Stack direction="row" spacing={1}>
                    <Typography variant="h5">{EMAIL}</Typography>
                    <Box>
                        <IconButton onClick={copy} size="small" sx={{ marginTop: "4px" }} >
                            <ContentCopyIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    )
}
