import { Box, Container, Grid, styled, Typography, IconButton } from "@mui/material";
import Avatar from "../../../../assets/imagens/photo.png";
import StyledButton from "../../../../compoents/StyledButton/StyledButton";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import OrcidIcon from './icon/orcid.png';
import MediumIcon from './icon/medium.png';



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
                I am Daniel Moura, a passionate Data Scientist and Bioinformatician with extensive experience in applying data science methodologies to biological and environmental 
                datasets. With a strong background in forensic science, environment and bioinformatics, I have worked on a wide range of projects that involve complex data analysis 
                and interpretation. My goal is to apply my skills in statistics, machine learning, and bioinformatics to uncover valuable insights from data, contributing to scientific
                 and healthcare advancements.
                In addition to my technical expertise, I am highly committed to research in environmental impact, health risk assessment and genomics. I believe in the power of data 
                to drive meaningful change, whether it’s in precision medicine, environmental sustainability or forensic investigations.
              </Typography>

              {/* Botões responsivos com espaçamento adicional */}
              <Grid container spacing={2} mt={4} sx={{ flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center' }}>
                <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ minWidth: '100px' }}>
                    <StyledButton
                      onClick={() => window.open("https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4447453D6", "_blank")}
                    >
                      <Typography>Curriculo Lattes</Typography>
                    </StyledButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ minWidth: '100px' }}>
                    <StyledButton
                      onClick={() => window.open("https://scholar.google.com/citations?user=WBGFXcUAAAAJ&hl=pt-BR", "_blank")}
                    >
                      <Typography>Google Scholar</Typography>
                    </StyledButton>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Box sx={{ minWidth: '100px' }}>
                    <StyledButton
                      onClick={() => window.open("https://www.webofscience.com/wos/author/record/P-2744-2018", "_blank")}
                    >
                      <Typography>Web of Science</Typography>
                    </StyledButton>
                  </Box>
                </Grid>
              </Grid>

              {/* Ícones de redes sociais com tamanho maior */}
              <Box mt={4} display="flex" justifyContent="center" alignItems="center" gap={1}>
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
                <IconButton
                  color="primary"
                  href="https://orcid.org/0000-0002-5800-8190"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="ORCID"
                >
                <Box
                  component="img"
                  src={OrcidIcon}
                  alt="ORCID"
                  sx={{
                    width: 32,
                    height: 32,
                    opacity: 0.6,
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 1 }  }}
                />
                </IconButton>
                <IconButton
                color="primary"
                href="https://medium.com/@dmouraslv"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Medium"
                >
                <Box
                  component="img"
                  src={MediumIcon}
                  alt="Medium"
                  sx={{
                    width: 32,
                    height: 32,
                    opacity: 0.6,
                    transition: 'opacity 0.3s',
                    '&:hover': { opacity: 1 } }}
                />
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
