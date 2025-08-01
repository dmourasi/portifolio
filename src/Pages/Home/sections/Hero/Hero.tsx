import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../compoents/StyledButton/StyledButton";
import CV from './Daniel_CV_EN.pdf';

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
      paddingTop: "100px",
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0",
    },
  }));

  return (
    <StyledHero>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${Avatar})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg" sx={{ minHeight: "100%", display: "flex", alignItems: "center" }}>
          <Grid container spacing={2} sx={{ height: "90%" }}>
            <Grid
              item xs={12} md={7}
              display="flex"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Box>
                <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
                  <Typography
                    color="primary.contrastText"
                    variant="h6"
                    textAlign="left"
                    sx={{ fontFamily: 'Nexa' }}
                  >
                    M.Sc.
                  </Typography>
                  <Typography
                    color="primary.contrastText"
                    variant="h4"
                    textAlign="left"
                    sx={{ fontFamily: 'Nexa', ml: 1 }} // Adicionei margem à esquerda para melhorar o espaçamento
                  >
                    Daniel
                  </Typography>
                </Box>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign="left"
                  fontWeight="bold"
                  sx={{
                    fontFamily: 'Avenir Next',
                    fontSize: { xs: '3rem', md: '5rem' }, // Tamanho dinâmico da fonte
                  }}
                >
                  Moura
                </Typography>
                <Typography
                  color="primary.contrastText"
                  variant="h6"
                  textAlign="left"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.5rem' }, // Ajuste da fonte no mobile
                  }}
                >
                  Data Scientist and Bioinformatician
                </Typography>
                <Grid container spacing={1} mt={1}>
                  <Grid item xs={12} md={6} display="flex" justifyContent="flex-start">
                    <StyledButton onClick={() => window.open(CV, "_blank")}>
                      <FileDownloadIcon />
                      <Typography>Download CV</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid item xs={12} md={6} display="flex" justifyContent="flex-start">
                    <StyledButton onClick={() => window.location.href = "mailto:dmouraslv@gmail.com"}>
                      <MailOutlineIcon />
                      <Typography>Contact me</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledHero>
  );
};

export default Hero;
