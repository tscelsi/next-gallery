import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { styled } from "@mui/material/styles";
import Link from "./Link";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleClick}
                sx={{ mr: 2, display: { md: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="nav-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>
                    <StyledLink underline="none" href="/"><Typography variant="subtitle1">Home</Typography></StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <StyledLink underline="none" href="/paintings"><Typography variant="subtitle1">Paintings</Typography></StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <StyledLink underline="none" href="/photographs"><Typography variant="subtitle1">Photos</Typography></StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <StyledLink underline="none" href="/about"><Typography variant="subtitle1">About</Typography></StyledLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <StyledLink underline="none" href="/contact"><Typography variant="subtitle1">Contact</Typography></StyledLink>
                </MenuItem>
            </Menu>
        </div>
    );
}

const StyledLink = styled(Link)(({ theme }) => {
    return {
        color: theme.palette.primary.main,
        '&:hover': {
            color: theme.palette.secondary.light
        }
    }
})