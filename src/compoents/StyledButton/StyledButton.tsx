import { styled } from "@mui/material";
import React, { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: ()=> void
}

const StyledButton: React.FC<StyledButtonProps>= ({ children, onClick }) => {

    const StyledButton = styled("button")(({theme}) => ({
        backgroundColor: "transparent",
         border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5 px 15px",
        width: "150%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer", 
        '&:hover': {
          backgroundColor: theme.palette.secondary.dark, 
        }
    }));


    return (
      <>
        <StyledButton onClick={onClick}>{children}</StyledButton>
      </>
    )
  }
  
  export default StyledButton
  