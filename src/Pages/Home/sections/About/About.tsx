import { Box, Container, Grid, styled, Typography, IconButton } from "@mui/material";
import Avatar from "../../../../assets/imagens/photo.jpg";
import StyledButton from "../../../../compoents/StyledButton/StyledButton";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";

const AboutMe = () => {
  const StyledAboutMe = styled("div")(() => ({
    backgroundColor: "#000", // Fundo preto
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center", // Centraliza verticalmente
    paddingTop: "100px",
    paddingBottom: "100px",
  }));

  const StyledImg = styled("img")(({ theme }) => ({
    width: "80%",
    borderRadius: "50%",
    border: `5px solid ${theme.palette.primary.main}`, // Mantendo o uso do theme aqui
  }));

  return (
    <StyledAboutMe>
      <Box
        sx={{
          position: "relative",
          width: "100vw",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {/* Imagem do avatar */}
            <Grid item xs={12} md={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <StyledImg src={Avatar} alt="Daniel Moura Avatar" />
            </Grid>

            {/* Texto "About Me" */}
            <Grid item xs={12} md={8} sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <Typography
                variant="h2"
                color="#4F4F4F"
                sx={{ fontFamily: 'Playfair Display', fontWeight: 'medium' }}
                gutterBottom
              >
                About Me
              </Typography>
              <Typography
                variant="body1"
                color="primary.contrastText" // Cor clara para texto em fundo escuro
                sx={{ fontFamily: 'Avenir Next', fontSize: '20px', textAlign: 'left' }}
              >
                I am Daniel Moura, a passionate Data Scientist and Bioinformatician with extensive experience in applying
                data science methodologies to biological and environmental datasets...
              </Typography>

              {/* Botões responsivos com espaçamento adicional */}
              <Grid container spacing={2} mt={4} sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>
                <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ minWidth: '150px' }}>
                    <StyledButton
                      onClick={() => window.open("https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4447453D6", "_blank")}
                    >
                      <Typography>Curriculo Lattes</Typography>
                    </StyledButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ minWidth: '150px' }}>
                    <StyledButton
                      onClick={() => window.open("https://scholar.google.com/citations?user=WBGFXcUAAAAJ&hl=pt-BR", "_blank")}
                    >
                      <Typography>Google Scholar</Typography>
                    </StyledButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ minWidth: '150px' }}>
                    <StyledButton
                      onClick={() => window.open("https://www.webofscience.com/wos/author/record/P-2744-2018", "_blank")}
                    >
                      <Typography>Web of Science</Typography>
                    </StyledButton>
                  </Box>
                </Grid>
              </Grid>

              {/* Ícones de redes sociais com tamanho maior */}
              <Box mt={4} display="flex" justifyContent="center" alignItems="center">
                <IconButton
                  color="primary"
                  href="https://www.instagram.com/daniel_forense/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  sx={{ fontSize: "40px" }}
                >
                  <Instagram sx={{ fontSize: "40px" }} />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://www.linkedin.com/in/daniel-moura-m-sc-a6b82b144/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  sx={{ fontSize: "40px" }}
                >
                  <LinkedIn sx={{ fontSize: "40px" }} />
                </IconButton>
                <IconButton
                  color="primary"
                  href="https://github.com/dmourasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  sx={{ fontSize: "40px" }}
                >
                  <GitHub sx={{ fontSize: "40px" }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </StyledAboutMe>
  );
};

export default AboutMe;
