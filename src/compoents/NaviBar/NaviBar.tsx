import { AppBar, MenuItem, styled, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const NaviBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)(() => ({
    display: "flex",
    justifyContent: "space-between",
    minHeight: "40px",
    padding: "0 20px",
    marginBottom: "-10px",
    boxShadow: "none",
  }));

  const StyledMenuItem = styled(MenuItem)(() => ({
    fontSize: "16px",
    padding: "6px 70px",
    '&:hover': {
      backgroundColor: "#464646",
    }
  }));

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // Fecha o drawer após a seleção
  };

  return (
    <>
      <AppBar position="absolute">
        <StyledToolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => setIsOpen(true)}
            sx={{ display: { xs: "block", md: "none" } }} // Mostra apenas em telas pequenas
          >
            <MenuIcon />
          </IconButton>
          <StyledMenuItem onClick={() => handleScroll("about")} sx={{ display: { xs: "none", md: "block" } }}>
            About
          </StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll("skills")} sx={{ display: { xs: "none", md: "block" } }}>
            Skills
          </StyledMenuItem>
          <StyledMenuItem onClick={() => handleScroll("projects")} sx={{ display: { xs: "none", md: "block" } }}>
            Projects
          </StyledMenuItem>
        </StyledToolbar>
      </AppBar>

      <Drawer anchor="left" open={isOpen} onClose={() => setIsOpen(false)}>
        <List>
          <ListItem button onClick={() => handleScroll("about")}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("skills")}>
            <ListItemText primary="Skills" />
          </ListItem>
          <ListItem button onClick={() => handleScroll("projects")}>
            <ListItemText primary="Projects" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default NaviBar;
