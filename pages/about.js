import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import Image from "next/image";

const About = () => {
  const theme = useTheme();
  return (
    <Box sx={{ height: "inherit" }}>
      <Container
        maxWidth="lg"
        sx={{ height: "inherit" }}
      >
        <Grid container sx={{ height: "inherit" }} justifyContent="start" alignItems="center" columnSpacing={10}>
          <Grid item xs={5} textAlign={"start"}>
            <Typography sx={{ marginBottom: "20px" }} variant="h2" >About Alison</Typography>
            <Typography variant="body1">
              Alison grew up in Canberra and studied Art Education in Sydney.
              Even though her working life took her in a completely different direction,
              she has always drawn and painted in some way or another. During the pandemic,
              Alison's garden in Melbourne provided the flowers for most of the paintings you see here.
              She has been painting camellias through 2020.
              This may continue into 2021 but there is a plan for some landscapes too!
            </Typography>
          </Grid>
          <Grid item xs={7}>
            <Image quality={100} src="/misty_night_vase.png" width={1920} height={1080} />
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
};

export default About;
