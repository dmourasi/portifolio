import { Box, Container, Grid, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.jpg";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../compoents/StyledButton/StyledButton";

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
                <Typography
                  color="primary.contrastText"
                  variant="h4"
                  textAlign="left"
                  sx={{ fontFamily: 'Nexa', mb: 0.5 }}
                >
                  Daniel Moura
                </Typography>
                <Typography
                  color="primary.contrastText"
                  variant="h1"
                  textAlign="left"
                  fontWeight="bold"
                  sx={{
                    fontFamily: 'Avenir Next',
                    fontSize: { xs: '2rem', md: '3.2rem' },
                    mb: 1,
                  }}
                >
                  Data Scientist & Biostatistician
                </Typography>
                <Typography
                  color="primary.contrastText"
                  variant="body1"
                  textAlign="left"
                  sx={{
                    fontSize: { xs: '0.95rem', md: '1.15rem' },
                    mb: 2,
                    maxWidth: '520px',
                  }}
                >
                  Statistical modeling and bioinformatics applied
                  to health and the environment. 
                  Biologist and PhD candidate in Applied Statistics.
                </Typography>
                <Grid container spacing={1} mt={1}>
                  <Grid item xs={12} md="auto" display="flex" justifyContent="flex-start">
                    <StyledButton onClick={() => {
                      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    }}>
                      <Typography>View Projects</Typography>
                    </StyledButton>
                  </Grid>
                  <Grid item xs={12} md="auto" display="flex" justifyContent="flex-start">
                    <StyledButton onClick={() => { window.location.href = "mailto:dmouraslv@gmail.com"; }}>
                      <MailOutlineIcon />
                      <Typography>Hire for Consulting</Typography>
                    </StyledButton>
                  </Grid>
                </Grid>
                <Typography
                  color="primary.contrastText"
                  variant="caption"
                  sx={{ mt: 2, display: 'block', opacity: 0.75, letterSpacing: '0.05em' }}
                >
                  R · Python · Multivariate Analysis · Bioinformatics · Machine Learning
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledHero>
  );
};

export default Hero;
