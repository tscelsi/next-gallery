import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { useTheme } from '@mui/material';
import Image from "next/image";
import useMediaQuery from '@mui/material/useMediaQuery';
import { getPlaiceholder } from "plaiceholder";

const mobileContainerStyles = { display: "flex", direction: "column", alignItems: "center", justifyContent: "center" };
const EMAIL = "aray@internode.on.net"

export async function getStaticProps(context) {
  const { base64, img } = await getPlaiceholder("/misty_night_vase.png")
  return {
    props: {
      imageProps: {
        ...img,
        blurDataURL: base64
      }
    }
  }
}

const About = ({ imageProps }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));
  const copy = () => {
    navigator.clipboard.writeText(EMAIL)
  }

  return (
    <Box sx={{ height: "inherit" }}>
      <Container
        maxWidth="lg"
        sx={mobile ? { height: "inherit" } : { height: "inherit" }}
      >
        <Grid container sx={{ height: mobile ? "none" : "inherit" }} justifyContent="start" alignItems="center" rowSpacing={5} columnSpacing={10}>
          <Grid item xs={12} md={5} textAlign={"start"}>
            <Typography sx={{ marginBottom: "20px", marginTop: ["40px", "40px", 0, null, null] }} variant="h2" >About Alison</Typography>
            <Typography variant="body1">
              Alison grew up in Canberra and studied Art Education in Sydney.
              Even though her working life took her in a completely different direction,
              she has always drawn and painted in some way or another. During the pandemic,
              Alison's garden in Melbourne provided the flowers for most of the paintings you see here.
              She has been painting camellias through 2020.
              This may continue into 2021 but there is a plan for some landscapes too!
            </Typography>
            <Typography sx={{ marginTop: "20px" }} variant="h5"><Link underline="hover" href="tel:+61466615619">+61 466 615 619</Link></Typography>
            <Stack direction="row" spacing={1}>
              <Typography variant="h5">{EMAIL}</Typography>
              <Box>
                <IconButton onClick={copy} size="small" sx={{ marginTop: "4px" }} >
                  <ContentCopyIcon fontSize="small" />
                </IconButton>
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <Image quality={100} width={1920} height={1080} placeholder="blur" {...imageProps} />
          </Grid>
        </Grid>
      </Container>
    </Box >
  );
};

export default About;
