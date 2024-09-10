import { Box, Container, Grid2, styled, Typography} from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.jpg";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import StyledButton from "../../../../compoents/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../compoents/AnimatedBackgroud/AnimatedBackgound";

const Hero = () => {

    const StyledHero = styled("div")(({theme}) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: { 
          paddingTop: "100px"

        },
        [theme.breakpoints.up('md')]:{
          paddingTop: "0"
        }
    }));
    
    const StyledImg = styled("img")(({theme}) => ({
        width: "80%",
        borderRadius: "0%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    return (
      <StyledHero>
        <Container maxWidth="lg">
          <Grid2 container spacing={2}>
            <Grid2 size={{xs:12, md:5}}>
              <Box position="relative">
                <Box position="absolute" width={"150%"} top={-100} right={0}>
                  <AnimatedBackground />
                </Box>
                <Box position="relative" textAlign="center">
                  <StyledImg src={Avatar} />
                </Box>
              </Box>
                          </Grid2>
            <Grid2 size={{xs:12, md:7}}>
              <Typography color="primary.contrastText" variant="h1" textAlign="center">Daniel Moura</Typography>
              <Typography color="primary.contrastText" variant="h2" textAlign="center">I'am a Data Scientist</Typography>
              <Grid2 container  display="flex" justifyContent="center" spacing={3}>
                <Grid2 size={{xs:16, md:4}} display="flex" justifyContent="center">
                  <StyledButton onClick={()=> console.log("download")}>
                  <FileDownloadIcon />
                  <Typography>
                     Download CV
                  </Typography>
                  </StyledButton>
                </Grid2>
                <Grid2 size={{xs:16, md:4}} display="flex" justifyContent="center">
                  <StyledButton onClick={()=> console.log("contat")}>
                  <MailOutlineIcon />
                  <Typography>
                    Contat me
                  </Typography>
                  </StyledButton>
                </Grid2>
              </Grid2>            
            </Grid2>
          </Grid2>
        </Container>
      </StyledHero>
    );
};

export default Hero;
