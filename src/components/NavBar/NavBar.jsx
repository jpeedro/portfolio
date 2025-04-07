import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {
    const StyledNavBar = styled(Toolbar)(()=> ({
        display: "flex",
        justifyContent: "space-evenly"
    }));

    return (
      <>
            <AppBar position="absolute">
                <StyledNavBar>
                    <MenuItem>Sobre Mim</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Projetos</MenuItem>
                    <MenuItem>Contato</MenuItem>
                </StyledNavBar>
            </AppBar>
      </>
    )
  }
  
  export default NavBar