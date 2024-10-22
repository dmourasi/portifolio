import { Box, Container, Grid2, styled, Typography, IconButton } from "@mui/material";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import Avatar from "../../../../assets/imagens/photo.jpg";
import StyledButton from "../../../../compoents/StyledButton/StyledButton";

const AboutMe = () => {
  const StyledAboutMe = styled("div")(() => ({
    backgroundColor: "#000", // Fundo preto
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
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
          <Grid2 container spacing={4} alignItems="center">
            {/* Imagem do avatar */}
            <Grid2 size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
              <StyledImg src={Avatar} alt="Daniel Moura Avatar" />
            </Grid2>

            {/* Texto "About Me" */}
            <Grid2 size={{ xs: 12, md: 8 }} display="flex" alignItems="center">
              <Box>
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
                  sx={{ fontFamily: 'Avenir Next', fontSize: '20px', textAlign: 'justify' }}
                >
                  I am Daniel Moura, a passionate Data Scientist and Bioinformatician with extensive experience in applying
                  data science methodologies to biological and environmental datasets. With a strong background in forensic science,
                  environment and bioinformatics, I have worked on a wide range of projects that involve complex data analysis and interpretation.
                  My goal is to apply my skills in statistics, machine learning, and bioinformatics to uncover valuable insights
                  from data, contributing to scientific and healthcare advancements.
                </Typography>

                <Typography
                  variant="body1"
                  color="primary.contrastText" // Cor clara para texto em fundo escuro
                  sx={{ fontFamily: 'Avenir Next', fontSize: '20px', lineHeight: '1.6', textAlign: 'justify' }}
                >
                  In addition to my technical expertise, I am highly committed to research in environmental impact, health risk assessment
                  and genomics. I believe in the power of data to drive meaningful change, whether it’s in precision medicine,
                  environmental sustainability or forensic investigations.
                </Typography>

                <Grid2 container spacing={23} mt={4}>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <StyledButton
                      onClick={() =>
                        window.open("https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4447453D6&tokenCaptchar=03AFcWeA5WgZfRVeMdBXZuFE21eTVkZtGe2_0yJM33M5vo2pKUgrN8FhBuooQ640rK9_Uqj5GWHjh4zgBzLeoGJlKmuB5CEC4NwkGOYdqLPB5Ccf03im59m8RzFfKAEtT8nlfyriBop9bswIZM236ycERI7ad7vVj9e8QV1bqtUVFHGE2grk8YYU-6vKTqt8Z2cHJW9UK8F255B8xJclsXnCzn0lSZ0Hob1DULMEgRkjB2aVR2YV-w2rLbV8TJGysMUTmMwROiVsa1WJk6ORkh6Ky_-ZeGNMztCMfGWWr4Z5pMgCUkBLr4grMSISaLXyc8mVGWOgs63noowBDLMRBWG0Lx6IoyoNLdwrqqwHLLJkMJw3tIePEaINOANA1ERWcCuSn00SvXnnnajQfniHfFNl2jkwk_Dte11EwmDzpwO_pPPCoSpng1Ja7-QmTxL-GoUJmN6N0X-R7dYoB953zlVAslomJbheXb6I5YYrm1fU49Q-vamzWYkCI-73UZzKHrQAIqInKXjKAwqD3cqvcE63DBPuCLU8v_tG0vAKaviOwT89zEnLeEJCJ9tjTe9-fKb-vMR-FijmhXlt_HkRjyU70nsYjwoV0QzR7-1rZ7RJAmLxlVWNEqvVZFEvXY6VR-EB8XSrQvb7gmNKX9yVVbnp2mS_uKtMcOkUiF5KWyq2aWPfyZoLm_vzGZqWgkse95P6CKVSTXg65Vcetd10evkeArXp46JOzb73TD0gft1D00_b1Ku95FSF6JifDxutomsDZ4PLqTaeGLmRctJA-Va3fsdETHwJjM8rNXYzEv754DGbCo2uWFM-W7kJnaBVq9z6UnMSg6VKORdN4F0ov4jW6JunXRybyvF1Up1HInTLXnaUNryyiITYI", "_blank")
                      }
                    >
                      <Typography>Curriculo Lattes</Typography>
                    </StyledButton>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <StyledButton
                      onClick={() =>
                        window.open("https://scholar.google.com/citations?user=WBGFXcUAAAAJ&hl=pt-BR", "_blank")
                      }
                    >
                      <Typography>Google Scholar</Typography>
                    </StyledButton>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 4 }}>
                    <StyledButton
                      onClick={() =>
                        window.open("https://www.webofscience.com/wos/author/record/P-2744-2018", "_blank")
                      }
                    >
                      <Typography>Web of Science</Typography>
                    </StyledButton>
                  </Grid2>
                </Grid2>

                {/* Ícones de redes sociais com tamanho maior */}
                <Box mt={4} display="flex" justifyContent="center" alignItems="center">
                  <IconButton
                    color="primary"
                    href="https://www.instagram.com/daniel_forense/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    sx={{ fontSize: "40px" }} // Aumenta o tamanho do botão
                  >
                    <Instagram sx={{ fontSize: "40px" }} /> {/* Aumenta o tamanho do ícone */}
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
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </StyledAboutMe>
  );
};

export default AboutMe;
