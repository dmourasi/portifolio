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
          Recents Projects
        </Typography>

        <Grid2 container spacing={4}>
          {/* Cartão de Projeto 1 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle> Main Project: Risk Assessment of Physical, Chemical, and Biological Factors in the Flow of the Capibaribe River Through Multivariate Analyses </ProjectTitle>
              <ProjectDescription>
              This study aims to assess the risk associated with physical, chemical, and biological factors in the flow of the Capibaribe River using multivariate analyses. By examining water samples and modeling sediment transport and deposition along different points of the river, the research investigates pollutant accumulation, sediment dynamics, and microbial communities. The focus is on understanding how sediment characteristics influence the distribution of contaminants and their ecological impacts. The goal is to identify areas with high environmental and human health risks, providing insights for better management and conservation strategies, particularly in regions affected by industrial pollution and seasonal changes in sediment flow.
              Research conducted in partnership with the Federal Rural University of Pernambuco (UFRPE).
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
              <ProjectTitle>Side Project: Impact of Sleep Patterns, Mood, Light Exposure, and Physical Activity during the COVID-19 Pandemic Isolation</ProjectTitle>
              <ProjectDescription>
              This project investigates the changes in sleep patterns among college students during the isolation period of the COVID-19 pandemic, focusing on the relationship between sleep, mood, physical activity, and light exposure. Through a comparative analysis of two phases of the pandemic, the study explores how students' sleep habits evolved, becoming more morning-oriented by the second year. The research also examines how shifts in sleep schedules are associated with mood variations, daily sunlight exposure, and exercise levels. By understanding these dynamics, the study aims to offer insights into the broader impacts of lifestyle changes prompted by the pandemic’s isolation on students' well-being.
              Research conducted in partnership with the Federal University of Pernambuco (UFPE).
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
              <ProjectTitle> Side Project: Trend Analysis of Rainfall Patterns in the Mesoregions of Pernambuco and Paraíba, Brazil </ProjectTitle>
              <ProjectDescription>
              This project analyzes rainfall trends on annual, seasonal, and monthly scales in the mesoregions of Pernambuco and Paraíba. Based on precipitation data collected from 1995 to 2020 by meteorological stations, the study applies the Mann-Kendall test to detect trends and Sen’s slope estimator to determine trend magnitudes.
              Research conducted in partnership with the Federal Rural University of Pernambuco (UFRPE).
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
              <ProjectTitle>Side Project: Correlation Between Osteosarcopenia and Inflammatory Mediators in Patients: Exploring Pro- and Anti-Inflammatory Biomarkers </ProjectTitle>
              <ProjectDescription>
              This study explores the association between osteosarcopenia and the balance of pro- and anti-inflammatory mediators in patients. It investigates how elevated pro-inflammatory and reduced anti-inflammatory biomarkers may contribute to the development of osteosarcopenia. The findings aim to enhance understanding of the inflammatory pathways involved, potentially guiding future therapeutic strategies for managing inflammation in affected individuals.
              Research conducted in partnership with the Jundiaí Medical School.
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
