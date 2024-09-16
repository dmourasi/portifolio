import { Box, Container, Grid2, styled, Typography} from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.png";
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
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            backgroundImage: `url(${Avatar})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Container maxWidth="lg" sx={{ height: "100%" }}>
            <Grid2 container spacing={2} sx={{ height: "100%" }}>
              <Grid2
                size={{ xs: 12, md: 7 }}
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Box>
                  <Typography color="primary.contrastText" variant="h4" textAlign="left" sx={{ fontFamily: 'Nexa'}}>
                    M.Sc. Daniel
                  </Typography>
                  <Typography color="primary.contrastText" variant="h1" textAlign="left" fontWeight="bold" sx={{ fontFamily: 'Avenir Next'}}>
                    Moura
                  </Typography>
                  <Typography color="primary.contrastText" variant="h6" textAlign="left">
                    Data Scientist and Bioinformatician
                  </Typography>
                  <Grid2 container display="flex" justifyContent="flex-start" spacing={1} mt={1}>
                    <Grid2 size={{ xs: 16, md: 4 }} display="contents" justifyContent="right">
                      <StyledButton onClick={() => console.log("download")}>
                        <FileDownloadIcon />
                        <Typography>Download CV</Typography>
                      </StyledButton>
                    </Grid2>
                    <Grid2 size={{ xs: 16, md: 4 }} display="contents" justifyContent="left">
                      <StyledButton onClick={() => console.log("contact")}>
                        <MailOutlineIcon />
                        <Typography>Contact me</Typography>
                      </StyledButton>
                    </Grid2>
                  </Grid2>
                </Box>
              </Grid2>
            </Grid2>
          </Container>
        </Box>
      </StyledHero>
    );
    
};

export default Hero;
