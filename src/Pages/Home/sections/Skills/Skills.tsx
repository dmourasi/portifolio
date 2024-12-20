import { Box, Container, Grid, Typography } from "@mui/material"; // Alterado para importar Grid do MUI
import { styled } from "@mui/system";

// Importando os ícones diretamente
import pythonIcon from './technical/python.webp';
import rIcon from './technical/r_project.webp';
import perlIcon from './technical/perl.png';
import sqlIcon from './technical/sql.png';
import scrumIcon from './technical/scrum.png';
import machineIcon from './technical/machine.png';

// Ícones de Expertise Topics
import biostatsIcon from './expertise/biostats.png';
import computIcon from './expertise/comput.png';
import enviIcon from './expertise/envi.png';
import forensicIcon from './expertise/forensic.png';
import microIcon from './expertise/micro.png';
import physioIcon from './expertise/physio.png';

const Skills = () => {
  const StyledSkills = styled("div")({
    backgroundColor: "#000",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
  });

  const SkillBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "20px 10px", // Reduzir o padding
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: 'Nexa',
    fontSize: "16px", // Reduzir o tamanho da fonte
    fontWeight: "bold",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
    cursor: "pointer",
    height: "120px", // Definir altura fixa para todos os SkillBox
    "& img": {
      marginBottom: "8px", // Reduzir o espaçamento da imagem
    },
    "& span": {
      fontSize: "18px", // Reduzir o tamanho da fonte do span
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

        <Grid container spacing={4}>
          {/* Habilidades técnicas */}
          <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" color="primary.contrastText" gutterBottom sx={{ fontFamily: 'Nexa', marginBottom: '16px', textAlign: 'center', fontSize: '28px' }}>
              Technical Skills
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={pythonIcon} alt="Python" width="50" height="50" />
                  <span>Python</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={rIcon} alt="R" width="50" height="50" />
                  <span>R</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={perlIcon} alt="Perl" width="50" height="50" />
                  <span>Perl</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={sqlIcon} alt="SQL" width="50" height="50" />
                  <span>SQL</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={scrumIcon} alt="Scrum" width="50" height="50" />
                  <span>Scrum</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={machineIcon} alt="Machine Learning" width="50" height="50" />
                  <span>Machine Learning</span>
                </SkillBox>
              </Grid>
            </Grid>
          </Grid>

          {/* Tópicos de conhecimento */}
          <Grid item xs={12} md={6} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" color="primary.contrastText" gutterBottom sx={{ fontFamily: 'Nexa', marginBottom: '16px', textAlign: 'center', fontSize: '28px' }}>
              Expertise Topics
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={biostatsIcon} alt="Biostatistics" width="50" height="50" />
                  <span>Biostatistics</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={computIcon} alt="Computational Biology" width="50" height="50" />
                  <span>Computational Biology</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={physioIcon} alt="Physiology & Behavior" width="50" height="50" />
                  <span>Physiology & Behavior</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={enviIcon} alt="Environmental Science" width="50" height="50" />
                  <span>Environmental Science</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={microIcon} alt="Microbiology" width="50" height="50" />
                  <span>Microbiology</span>
                </SkillBox>
              </Grid>
              <Grid item xs={6} sm={4} md={6}> {/* Alterado para xs={6} */}
                <SkillBox>
                  <img src={forensicIcon} alt="Forensic Biology" width="50" height="50" />
                  <span>Forensic Biology</span>
                </SkillBox>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
