import { Grid2, styled } from "@mui/material";
import Avatar from "../../../../assets/imagens/avatar.jpg";

const Hero = () => {

    const StyledHero = styled("div")(() => ({
        backgroundColor: "black",
        padding: "20px"
    }));
    
    const StyledImg = styled("img")(() => ({
        width: "30%",
        borderRadius: "50%"
    }));

    return (
      <StyledHero>
        <Grid2 container spacing={2}>
          <Grid2 item xs={4}>
            <StyledImg src={Avatar} alt="Avatar" />
          </Grid2>
          <Grid2 item xs={8}>
            xs=8
          </Grid2>
        </Grid2>
      </StyledHero>
    );
};

export default Hero;
