import { Box, Container, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/system";

const Skills = () => {
  // Estilo principal da seção de Skills
  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: "#000", // Fundo preto
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
  }));

  // Estilo dos quadrantes
  const SkillBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main, // Cor principal do tema
    color: theme.palette.primary.contrastText,
    padding: "40px 20px", // Aumentando o padding para dar mais espaçamento
    borderRadius: "12px", // Bordas arredondadas para dar suavidade
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: 'Nexa',
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)", // Sombra para criar profundidade
    transition: "transform 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer", // Mudando o cursor ao passar o mouse
    "&:hover": {
      transform: "scale(1.1)", // Efeito de zoom ao passar o mouse
      backgroundColor: theme.palette.secondary.main, // Mudança de cor no hover
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)", // Sombra mais intensa no hover
    },
  }));

  return (
    <StyledSkills>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="primary.contrastText"
          sx={{ fontFamily: 'Nexa', textAlign: 'center', marginBottom: '40px' }}
        >
          Skills
        </Typography>

        <Grid2 container spacing={4}>
          {/* Habilidades técnicas */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" color="primary.contrastText" gutterBottom sx={{ fontFamily: 'Nexa', marginBottom: '16px' }}>
              Technical Skills
            </Typography>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Python</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>R</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Perl</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>SQL</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Bioinformatics</SkillBox>
              </Grid2>
            </Grid2>
          </Grid2>

          {/* Habilidades interpessoais */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" color="primary.contrastText" gutterBottom sx={{ fontFamily: 'Nexa', marginBottom: '16px' }}>
              Interpersonal Skills
            </Typography>
            <Grid2 container spacing={3}>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Communication</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Teamwork</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Problem Solving</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Adaptability</SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>Critical Thinking</SkillBox>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
