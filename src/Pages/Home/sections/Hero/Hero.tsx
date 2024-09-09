import { styled } from "@mui/material"
import Avatar from "../../../../assets/imagens/avatar.jpg"

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    backgroundColor: "black"
  }))

  const StyledImg = styled("img")(() => ({
    with: "30%",
    borderRadius: "50%"
  }))

  return (
    <>
      <StyledHero>

        <Grid container spacing={2}>
          <Grid item xs={8}>
            <StyledImg src={Avatar} />
          </Grid>
          <Grid item xs={4}>
            xs=4
          </Grid>
        </Grid>

      </StyledHero>
    </>
  )
}

export default Hero
