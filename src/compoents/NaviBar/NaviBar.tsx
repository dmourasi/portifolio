import { AppBar, MenuItem, styled, Toolbar } from "@mui/material";

const NaviBar = () => {
    const StyledToolbar = styled(Toolbar)(() => ({
      display: "flex",
      justifyContent: "space-evenly",
      minHeight: "40px",
      padding: "0 20px",
      marginBottom: "-10px",
      boxShadow: "none",
    }));
  const StyledMenuItem = styled(MenuItem)(() => ({
    fontSize: "16px", // Tamanho da fonte menor
    padding: "6px 70px", // Padding interno dos itens do menu
    '&:hover': {
      backgroundColor: "#464646", // Cor de fundo ao passar o mouse
    }
    
  }));
  // Função para scroll suave
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <StyledMenuItem onClick={() => handleScroll("about")}>About</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll("skills")}>Skills</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll("projects")}>Projects</StyledMenuItem>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NaviBar;