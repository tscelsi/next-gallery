import React from 'react'
import AppBar from "@mui/material/AppBar";
import { Container, Toolbar, Stack, Typography, Grid, Divider, Box } from '@mui/material';
import { styled } from "@mui/material/styles";
import DarkLightModeButton from './DarkLightModeButton';
import Link from "./Link";
import NavMenu from "./NavMenu";

export default function NavBar() {
    return (
        <Box sx={{ display: "flex" }}>
            <StyledAppBar color="transparent" position="static" >
                <Toolbar>
                    <Container>
                        <NavMenu />
                        <Grid sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }} container justifyContent="center">
                            <Stack
                                spacing={12}
                                direction="row"
                                divider={<Divider orientation="vertical" flexItem />}
                            >
                                <StyledLink underline="none" href="/"><Typography variant="subtitle1">Home</Typography></StyledLink>
                                <StyledLink underline="none" href="/paintings"><Typography variant="subtitle1">Paintings</Typography></StyledLink>
                                <StyledLink underline="none" href="/photographs"><Typography variant="subtitle1">Photos</Typography></StyledLink>
                                <StyledLink underline="none" href="/about"><Typography variant="subtitle1">About</Typography></StyledLink>
                            </Stack>
                        </Grid>
                    </Container>
                    <DarkLightModeButton />
                </Toolbar>
            </StyledAppBar>

        </Box>
    )
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    "&": {
        boxShadow: "none",

    }
}))

const StyledLink = styled(Link)(({ theme }) => {
    return {
        '&:hover': {
            color: theme.palette.secondary.light
        }
    }
})