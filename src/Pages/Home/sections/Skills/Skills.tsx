import { Box, Container, Grid2, Typography } from "@mui/material";
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
  const StyledSkills = styled("div")(({ theme }) => ({
    backgroundColor: "#000",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    paddingTop: "100px",
    paddingBottom: "100px",
  }));

  const SkillBox = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: "40px 20px",
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    fontFamily: 'Nexa',
    fontSize: "18px",
    fontWeight: "bold",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.4)",
    transition: "transform 0.4s ease, background-color 0.4s ease, box-shadow 0.4s ease",
    cursor: "pointer",
    "&:hover": {
      transform: "scale(1.1)",
      backgroundColor: theme.palette.secondary.main,
      boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.7)",
    },
    "& img": {
      marginBottom: "12px",
    },
    "& span": {
      fontSize: "20px", // Aumentando o tamanho da fonte
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
          <Grid2 size={{ xs: 12, md: 6 }} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" color="primary.contrastText" gutterBottom sx={{ fontFamily: 'Nexa', marginBottom: '16px', textAlign: 'center', fontSize: '28px' }}>
              Technical Skills
            </Typography>
            <Grid2 container spacing={3} justifyContent="center">
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={pythonIcon} alt="Python" width="50" height="50" />
                  <span>Python</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={rIcon} alt="R" width="50" height="50" />
                  <span>R</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={perlIcon} alt="Perl" width="50" height="50" />
                  <span>Perl</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={sqlIcon} alt="SQL" width="50" height="50" />
                  <span>SQL</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={scrumIcon} alt="Scrum" width="50" height="50" />
                  <span>Scrum</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={machineIcon} alt="Machine Learning" width="50" height="50" />
                  <span>Machine Learning</span>
                </SkillBox>
              </Grid2>
            </Grid2>
          </Grid2>

          {/* Tópicos de conhecimento */}
          <Grid2 size={{ xs: 12, md: 6 }} display="flex" flexDirection="column" alignItems="center">
            <Typography variant="h4" color="primary.contrastText" gutterBottom sx={{ fontFamily: 'Nexa', marginBottom: '16px', textAlign: 'center', fontSize: '28px' }}>
              Expertise Topics
            </Typography>
            <Grid2 container spacing={3} justifyContent="center">
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={biostatsIcon} alt="Biostatistics" width="50" height="50" />
                  <span>Biostatistics</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={computIcon} alt="Computational Biology" width="50" height="50" />
                  <span>Computational Biology</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={physioIcon} alt="Physiology & Behavior" width="50" height="50" />
                  <span>Physiology & Behavior</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={enviIcon} alt="Environmental Science" width="50" height="50" />
                  <span>Environmental Science</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={microIcon} alt="Microbiology" width="50" height="50" />
                  <span>Microbiology</span>
                </SkillBox>
              </Grid2>
              <Grid2 size={{ xs: 12, sm: 6 }}>
                <SkillBox>
                  <img src={forensicIcon} alt="Forensic Biology" width="50" height="50" />
                  <span>Forensic Biology</span>
                </SkillBox>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
