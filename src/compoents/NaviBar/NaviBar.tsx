import { AppBar, MenuItem, styled, Toolbar, IconButton, Drawer, Box } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

const NaviBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-between",
    minHeight: "40px",
    padding: "0 20px",
    marginBottom: "-10px",
    boxShadow: "none",
    backgroundColor: "#30000", // Cor de fundo da Navbar (cinza escuro)
    [theme.breakpoints.down('sm')]: {
      padding: "10px 20px",
    },
  }));

  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    fontSize: "16px",
    padding: "10px 0", // Ajusta o padding vertical para centralização
    textAlign: "center",
    flex: 1, // Faz cada item ocupar espaço igual
    display: "flex", // Usar flexbox para centralização
    justifyContent: "center", // Centraliza horizontalmente
    alignItems: "center", // Centraliza verticalmente
    color: "white", // Cor do texto
    '&:hover': {
      backgroundColor: "#464646", // Cor do fundo ao passar o mouse
    },
    [theme.breakpoints.down('sm')]: {
      padding: "10px 0", // Ajusta o padding em telas menores
      fontSize: "14px",
    },
  }));

  // Estilizando o Drawer
  const StyledDrawer = styled(Drawer)({
    '& .MuiDrawer-paper': {
      backgroundColor: "#333333", // Cor de fundo do Drawer (cinza escuro)
      color: "white", // Cor do texto do Drawer
    },
  });

  function handleScroll({ id }: { id: any; }) {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setDrawerOpen(false); // Fecha o Drawer ao selecionar um item
    }
  }

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
          <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            <StyledMenuItem onClick={() => handleScroll({ id: "about" })}>About</StyledMenuItem>
            <StyledMenuItem onClick={() => handleScroll({ id: "skills" })}>Skills</StyledMenuItem>
            <StyledMenuItem onClick={() => handleScroll({ id: "projects" })}>Projects</StyledMenuItem>
          </Box>
        </StyledToolbar>
      </AppBar>

      {/* Drawer para dispositivos móveis */}
      <StyledDrawer
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
          <StyledMenuItem onClick={() => handleScroll({ id: "about" })}>About</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll({ id: "skills" })}>Skills</StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll({ id: "projects" })}>Projects</StyledMenuItem>
        </Box>
      </StyledDrawer>
    </>
  );
};

export default NaviBar;
