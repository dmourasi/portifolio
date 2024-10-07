import { Box, Container, Grid2, styled, Typography } from "@mui/material";
import Avatar from "../../../../assets/imagens/photo.jpg";
import StyledButton from "../../../../compoents/StyledButton/StyledButton";

const AboutMe = () => {
  const StyledAboutMe = styled("div")(({ theme }) => ({
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
    border: `5px solid ${theme.palette.primary.main}`,
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
                <Typography variant="h2" color="primary.main" sx={{ fontFamily: 'Nexa' }} gutterBottom>
                  About Me
                </Typography>
                <Typography
                  variant="body1"
                  color="primary.contrastText" // Cor clara para texto em fundo escuro
                  sx={{ fontFamily: 'Avenir Next', fontSize: '18px', lineHeight: '1.6' }}
                >
                  I am Daniel Moura, a passionate Data Scientist and Bioinformatician with extensive experience in applying
                  data science methodologies to biological and environmental datasets. With a strong background in forensic science,
                  medicine, and bioinformatics, I have worked on a wide range of projects that involve complex data analysis and interpretation.
                  My goal is to apply my skills in statistics, machine learning, and bioinformatics to uncover valuable insights
                  from data, contributing to scientific and healthcare advancements.
                </Typography>

                <Typography
                  variant="body1"
                  color="primary.contrastText" // Cor clara para texto em fundo escuro
                  sx={{ fontFamily: 'Avenir Next', fontSize: '18px', lineHeight: '1.6', marginTop: '16px' }}
                >
                  In addition to my technical expertise, I am highly committed to research in environmental impact, health risk assessment,
                  and genomics. I believe in the power of data to drive meaningful change, whether it’s in precision medicine,
                  environmental sustainability, or forensic investigations.
                </Typography>

                <Grid2 container spacing={23} mt={4}>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <StyledButton onClick={() => console.log("View Projects")}>
                      <Typography>Curriculo Lattes</Typography>
                    </StyledButton>
                  </Grid2>
                  <Grid2 size={{ xs: 12, md: 6 }}>
                    <StyledButton onClick={() => console.log("Contact")}>
                      <Typography>Google Schoolar</Typography>
                    </StyledButton>
                  </Grid2>
                </Grid2>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Box>
    </StyledAboutMe>
  );
};

export default AboutMe;
