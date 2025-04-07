import { Box, Container, Grid2, styled, Typography } from "@mui/material"
import FotoDoPerfil from "../../../../assets/images/profile_square.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const SobreMim = () => {

    const StyledSobreMim = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center"
    }));

    const StyledImagem = styled("img")(({theme})=> ({
        width: "80%",
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`
    }));

    return (
      <>        
        <StyledSobreMim>
            <Container maxWidth="lg">
                <Grid2 container spacing={2}>
                    <Grid2 size={{ xs: 12, md: 5}} order={{ xs: -1, md: 1 }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground></AnimatedBackground>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImagem src={FotoDoPerfil} />     
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 7}}>
                        <Typography color="primary.contrastText" variant="h1" textAlign="center" pb={2}>João Pedro</Typography>
                        <Typography color="primary.contrastText" variant="h2" textAlign="center">Sou um Desenvovledor Back-End</Typography>
                        <Grid2 container display="flex" justifyContent="center" spacing={3} pt={3}>
                            <Grid2 size={{ xs: 12, md: 4}} display="flex" justifyContent="center"> 
                                <StyledButton>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV
                                    </Typography>
                                </StyledButton>
                            </Grid2>
                            <Grid2 size={{ xs: 12, md: 4}} display="flex" justifyContent="center">
                                <StyledButton>
                                    <EmailIcon/>
                                    <Typography>
                                        Contato
                                    </Typography>
                                </StyledButton>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Container>   
        </StyledSobreMim>
      </>
    )
  }
  
  export default SobreMim