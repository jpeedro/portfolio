import { Box, Container, Grid2, styled, Typography } from "@mui/material"
import FotoDoPerfil from "../../../../assets/images/profile_square.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const SobreMim = () => {

    const StyledSobreMim = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
        width: "100%",
        [theme.breakpoints.up('xs')]: {
            display: "block",
            padding: "20px",
            paddingTop: "100px",
            paddingBottom: "40px",
        },
        [theme.breakpoints.up('md')]: {
            display: "flex",
            alignItems: "center",
            paddingTop: "100px",
            height: "100vh"
        },
    }));

    const StyledImagem = styled("img")(({theme})=> ({
        width: "75%",
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
                            <Box position="absolute" width={"150%"} top={-200} right={0}>
                                <AnimatedBackground/>
                            </Box>
                            <Box position="relative" textAlign="center">
                                <StyledImagem src={FotoDoPerfil} />     
                            </Box>
                        </Box>
                    </Grid2>
                    <Grid2 size={{xs: 12, md: 7}}>
                    <Box display="flex" alignItems="flex-start">
                        <Box display="flex" alignItems="center" mr={2}>
                        <a href="https://github.com/jpeedro" target="_blank" rel="noopener noreferrer">
                            <GitHubIcon sx={{ color: 'primary.contrastText', fontSize: 50, cursor: 'pointer', mr: 2}} />
                        </a>
                        <a href="https://www.linkedin.com/in/jo%C3%A3opedronascimento" target="_blank" rel="noopener noreferrer">
                            <LinkedInIcon sx={{ color: 'primary.contrastText', fontSize: 55, cursor: 'pointer'}} />
                        </a>
                        </Box>
                    </Box>
                        <Typography color="primary.contrastText" variant="h2" textAlign="left" pb={2}>
                            Oi, sou o {' '}
                            <Box component="span" sx={{ color: '#00BFFF'}}>
                                João Pedro
                            </Box>
                        </Typography>
                        <Typography color="primary.contrastText" variant="h5" textAlign="left" pb={2}>
                            Desenvolvedor {''}
                            <Box component="span" sx={{color: "#00BFFF"}}>
                                Back-End
                            </Box>
                        </Typography>
                        <Typography component="p" color="primary.contrastText">
                            Sou motivado por desafios e pelo aprendizado contínuo, onde minha paixão por tecnologia e inovação impulsiona meu desempenho. Sempre buscando desenvolver soluções eficientes que gerem impacto e agreguem valor ao negócio.
                        </Typography>
                        <Grid2 container display="flex" justifyContent="left" spacing={3} pt={3}>
                            <Grid2 size={{ xs: 12, md: 4}} display="flex" justifyContent="center"> 
                                <StyledButton onClick={() => console.log('donwload')}>
                                    <DownloadIcon/>
                                    <Typography>
                                        Download CV
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