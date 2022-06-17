import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ height: "inherit", backgroundImage: `url("/alison.jpg")`, backgroundSize: "cover" }}>
      <Container
        maxWidth="xxl"
        sx={{ height: "inherit" }}
      >
        <Grid container sx={{ height: "inherit", maxWidth: "500px" }} justifyContent="start" alignItems="center">
          <Grid item xs={12} textAlign={"start"}>
            <Typography sx={{ marginBottom: "20px" }} variant="h2" color={theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.common.white}>About Alison</Typography>
            <Typography variant="body1" color={theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.common.white}>
              Alison grew up in Canberra and studied Art Education in Sydney.
              Even though her working life took her in a completely different direction,
              she has always drawn and painted in some way or another. During the pandemic,
              Alison's garden in Melbourne provided the flowers for most of the paintings you see here.
              She has been painting camellias through 2020.
              This may continue into 2021 but there is a plan for some landscapes too!
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
