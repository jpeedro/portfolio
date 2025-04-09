import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"


const NavBar = () => {
    const StyledNavBar = styled(Toolbar)(()=> ({
        display: "flex",
        justifyContent: "space-evenly"
    }));

    const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'transparent',
          color: '#00BFFF'
        }
      }));

    return (
      <>
            <AppBar position="absolute">
                <StyledNavBar >
                    <StyledMenuItem>
                        Sobre Mim
                    </StyledMenuItem>
                    <StyledMenuItem>
                        Skills
                    </StyledMenuItem>
                    <StyledMenuItem>
                        Projetos
                    </StyledMenuItem>
                    <StyledMenuItem>
                        Contato
                    </StyledMenuItem>
                </StyledNavBar>
            </AppBar>
      </>
    )
  }
  
  export default NavBar