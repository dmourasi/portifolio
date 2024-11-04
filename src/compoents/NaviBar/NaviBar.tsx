import { AppBar, MenuItem, styled, Toolbar, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NaviBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    minHeight: "40px",
    padding: "0 20px",
    marginBottom: "-10px",
    boxShadow: "none",
    [theme.breakpoints.down('sm')]: {
      justifyContent: "space-between", // Alinha para ícone de menu
      padding: "10px 20px",
    },
  })); 

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: "16px",
    padding: "6px 70px",
    '&:hover': {
      backgroundColor: "#464646",
    },
    [theme.breakpoints.down('sm')]: {
      padding: "10px 20px", // Ajusta o padding em telas menores
      fontSize: "14px",
    },
  }));

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // Fecha o Drawer ao selecionar um item
    }
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          {/* Menu para abrir o Drawer no mobile */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }} // Mostra só em telas pequenas
          >
            <MenuIcon />
          </IconButton>

          {/* Menu items para telas maiores */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <StyledMenuItem onClick={() => handleScroll("about")}>About</StyledMenuItem>
            <StyledMenuItem onClick={() => handleScroll("skills")}>Skills</StyledMenuItem>
            <StyledMenuItem onClick={() => handleScroll("projects")}>Projects</StyledMenuItem>
          </Box>
        </StyledToolbar>
      </AppBar>

      {/* Drawer para dispositivos móveis */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{ display: { xs: "block", md: "none" } }}
      >
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setDrawerOpen(false)}
          onKeyDown={() => setDrawerOpen(false)}
        >
          <StyledMenuItem onClick={() => handleScroll("about")}>About</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll("skills")}>Skills</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll("projects")}>Projects</StyledMenuItem>
        </Box>
      </Drawer>
    </>
  );
};

export default NaviBar;
