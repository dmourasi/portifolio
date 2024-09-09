import { Button, Container, Grid2, styled, Typography} from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        height: "100vh"
    }));
    
    const StyledImg = styled("img")(() => ({
        width: "100%",
        borderRadius: "70%"
    }));

    return (
      <StyledHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 size={{xs:12, md:4}}>
              <StyledImg src={Avatar} alt="Avatar" />
            </Grid2>
            <Grid2 size={{xs:12, md:8}}>
              <Typography color="primary" variant="h1" textAlign="center">Daniel Moura</Typography>
              <Typography color="primary" variant="h2" textAlign="center">I'am a Data Scientist</Typography>
              <Grid2 container  display="flex" justifyContent="center">
                <Grid2 size={{xs:16, md:4}} display="flex" justifyContent="center">
                  <Button>
                  <FileDownloadIcon />
                  Download CV
                  </Button>
                </Grid2>
                <Grid2 size={{xs:16, md:4}} display="flex" justifyContent="center">
                  <Button>
                  <MailOutlineIcon />
                  Contate me
                  </Button>
                </Grid2>
              </Grid2>            
            </Grid2>
          </Grid2>
        </Container>
      </StyledHero>
    );
};

export default Hero;
