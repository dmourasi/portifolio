import { Box, Container, Grid2, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Projects = () => {
  // Estilo principal da seção de Projects
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: "#000", // Fundo preto
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
  }));

  // Estilo dos cartões de projetos
  const ProjectCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main, // Cor principal do tema
    color: theme.palette.primary.contrastText,
    padding: "20px",
    borderRadius: "12px", // Bordas arredondadas
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)", // Sombra para criar profundidade
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "scale(1.05)", // Efeito de zoom ao passar o mouse
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)", // Sombra mais intensa
    },
  }));

  const ProjectTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Nexa',
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  }));

  const ProjectDescription = styled(Typography)(({ theme }) => ({
    fontFamily: 'Avenir Next',
    fontSize: "16px",
    marginBottom: "15px",
  }));

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="primary.contrastText"
          sx={{ fontFamily: 'Nexa', textAlign: 'center', marginBottom: '40px' }}
        >
          Projects
        </Typography>

        <Grid2 container spacing={4}>
          {/* Cartão de Projeto 1 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>Project 1: Data Analysis Tool</ProjectTitle>
              <ProjectDescription>
                A robust data analysis tool built using Python and R to process and visualize genomic data for bioinformatics research.
              </ProjectDescription>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ marginTop: "10px" }}
                onClick={() => console.log("View Project 1")}
              >
                View More
              </Button>
            </ProjectCard>
          </Grid2>

          {/* Cartão de Projeto 2 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>Project 2: Web App for Environmental Risk</ProjectTitle>
              <ProjectDescription>
                A React and Node.js based web application that tracks environmental risk factors across river ecosystems using real-time data.
              </ProjectDescription>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ marginTop: "10px" }}
                onClick={() => console.log("View Project 2")}
              >
                View More
              </Button>
            </ProjectCard>
          </Grid2>

          {/* Cartão de Projeto 3 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>Project 3: Bioinformatics Pipeline</ProjectTitle>
              <ProjectDescription>
                Developed a bioinformatics pipeline using Perl and SQL for automated analysis of large-scale sequencing data.
              </ProjectDescription>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ marginTop: "10px" }}
                onClick={() => console.log("View Project 3")}
              >
                View More
              </Button>
            </ProjectCard>
          </Grid2>

          {/* Cartão de Projeto 4 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>Project 4: Machine Learning in Genomics</ProjectTitle>
              <ProjectDescription>
                A machine learning project to predict genetic mutations using TensorFlow and Keras, applied to cancer research.
              </ProjectDescription>
              <Button 
                variant="contained" 
                color="secondary" 
                sx={{ marginTop: "10px" }}
                onClick={() => console.log("View Project 4")}
              >
                View More
              </Button>
            </ProjectCard>
          </Grid2>
        </Grid2>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
