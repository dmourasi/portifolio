import { Box, Container, Grid2, Typography, Button } from "@mui/material";
import { styled } from "@mui/system";

const Projects = () => {
  // Estilo principal da seção de Projects
  const StyledProjects = styled("div")({
    backgroundColor: "#000", // Fundo preto
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
  });

  // Estilo dos cartões de projetos
  const ProjectCard = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main, // Cor principal do tema
    color: theme.palette.primary.contrastText,
    padding: "20px",
    borderRadius: "12px", // Bordas arredondadas
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)", // Sombra para criar profundidade
    transition: "box-shadow 0.3s ease", // Removida a transformação de escala
    "&:hover": {
      // transform: "scale(1.05)", // Linha removida para desativar o zoom
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)", // Sombra mais intensa
    },
  }));

  const ProjectTitle = styled(Typography)({
    fontFamily: 'Nexa',
    fontSize: "22px",
    fontWeight: "bold",
    marginBottom: "10px",
  });

  const ProjectDescription = styled(Typography)({
    fontFamily: 'Avenir Next',
    fontSize: "16px",
    marginBottom: "15px",
  });

  const ProjectStack = styled(Typography)({
    fontFamily: 'Avenir Next',
    fontSize: "13px",
    color: "rgba(255, 255, 255, 0.55)",
    marginTop: "12px",
    letterSpacing: "0.03em",
  });

  return (
    <StyledProjects>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          color="primary.contrastText"
          sx={{ fontFamily: 'Nexa', textAlign: 'center', marginBottom: '40px' }}
        >
          Recent Projects
        </Typography>

        <Grid2 container spacing={4}>
          {/* Cartão de Projeto 1 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>Main Project: Risk Assessment of Physical, Chemical, and Biological Factors in the Flow of the Capibaribe River Through Multivariate Analyses</ProjectTitle>
              <ProjectDescription>
              This study aims to assess the risk associated with physical, chemical, and biological factors in the flow of the Capibaribe River
              using multivariate analyses. By examining water samples and modeling sediment transport and deposition along different points of the
              river, the research investigates pollutant accumulation, sediment dynamics, and microbial communities. The focus is on understanding 
              how sediment characteristics influence the distribution of contaminants and their ecological impacts. The goal is to identify areas with
              high environmental and human health risks, providing insights for better management and conservation strategies, particularly
              in regions affected by industrial pollution and seasonal changes in sediment flow. Research conducted in partnership with the Federal Rural 
              University of Pernambuco (UFRPE).
              </ProjectDescription>
              <ProjectStack>R · Shiny · vegan · FactoMineR · sf · leaflet · tidyverse</ProjectStack>
              <Button
                variant="outlined"
                disabled
                sx={{ marginTop: "10px", borderColor: "#2e7d32", color: "#4caf50", opacity: 0.5, cursor: "default", "&.Mui-disabled": { borderColor: "#2e7d32", color: "#4caf50" } }}
              >
                In Progress
              </Button>
            </ProjectCard>            
          </Grid2>

          {/* Cartão de Projeto 2 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>
                Side Project: Impact of Sleep Patterns, Mood, Light Exposure, and Physical Activity during the COVID-19 Pandemic Isolation
              </ProjectTitle>
              <ProjectDescription>
                This project investigates the changes in sleep patterns among college students during the isolation period of the COVID-19 pandemic,
                focusing on the relationship between sleep, mood, physical activity, and light exposure. Through a comparative analysis of two phases
                of the pandemic, the study explores how students' sleep habits evolved, becoming more morning-oriented by the second year. The research
                also examines how shifts in sleep schedules are associated with mood variations, daily sunlight exposure, and exercise levels. 
                By understanding these dynamics, the study aims to offer insights into the broader impacts of lifestyle changes prompted by the pandemic’s 
                isolation on students' well-being. Research conducted in partnership with the Federal University of Pernambuco (UFPE).
              </ProjectDescription>
              <ProjectStack>R  · vegan · FactoMineR · sf  · tidyverse</ProjectStack>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: "10px", marginRight: "10px" }}
                onClick={() => window.open("https://www.tandfonline.com/doi/full/10.1080/13548506.2022.2159457", "_blank")}
              >
                Paper 1
              </Button>
              <Button
                variant="contained"
                color="secondary"
                sx={{ marginTop: "10px" }}
                onClick={() => window.open("https://www.tandfonline.com/doi/abs/10.1080/09291016.2023.2206125", "_blank")}
              >
                Paper 2
              </Button>
            </ProjectCard>
          </Grid2>

          {/* Cartão de Projeto 3 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>Side Project: Mapping and Predicting Risk of Crimes Against Indigenous Peoples in Brazil: Spatial Patterns, Structural Breaks and Machine Learning</ProjectTitle>
              <ProjectDescription>
              This project analyzes spatial and temporal patterns of crimes against Indigenous peoples in Brazil. Crime records aggregated by year, state,
              and municipality were processed with statistical and geospatial methods to identify structural breaks and spatial clusters. The study also applies
              machine learning models, using environmental and anthropic predictors, to estimate and map future risks. Research conducted in partnership with the
              Federal Rural University of Pernambuco (UFRPE).
              </ProjectDescription>
              <ProjectStack>R · Python · tidyverse · sf · randomForest · xgboost · sklearn</ProjectStack>
              <Button
                variant="outlined"
                disabled
                sx={{ marginTop: "10px", borderColor: "#2e7d32", color: "#4caf50", opacity: 0.5, cursor: "default", "&.Mui-disabled": { borderColor: "#2e7d32", color: "#4caf50" } }}
              >
                In Progress
              </Button>
            </ProjectCard>
          </Grid2>

          {/* Cartão de Projeto 4 */}
          <Grid2 size={{ xs: 12, md: 6 }}>
            <ProjectCard>
              <ProjectTitle>Side Project: Correlation Between Sarcopenia and Inflammatory Mediators in Patients:
                 Exploring Pro- and Anti-Inflammatory Biomarkers
              </ProjectTitle>
              <ProjectDescription>
              This study analyzes the correlation between sarcopenia and the systemic imbalance of inflammatory mediators in patients, 
              in partnership with Jundiaí Medical School (FMJ). The research investigates how the synergy between elevated pro-inflammatory 
              cytokines and depleted anti-inflammatory markers contributes to muscle mass loss. By applying statistical modeling to these biomarkers,
              the project aims to map inflammatory pathways and provide a quantitative basis for future therapeutic strategies in sarcopenia management.
              </ProjectDescription>
              <ProjectStack>R · Python · tidyverse · glmnet · randomForest · xgboost · sklearn</ProjectStack>
              <Button
                variant="outlined"
                disabled
                sx={{ marginTop: "10px", borderColor: "#2e7d32", color: "#4caf50", opacity: 0.5, cursor: "default", "&.Mui-disabled": { borderColor: "#2e7d32", color: "#4caf50" } }}
              >
                In Progress
              </Button>
            </ProjectCard>
          </Grid2>
        </Grid2>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
