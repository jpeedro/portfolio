import { styled } from "@mui/material";


const StyledButton = ({children}) => {

    const StyledButton = styled("button")(({ theme })=> ({
        backgroundColor: "transparent",
        border: `1px solid ${ theme.palette.primary.contrastText }`,
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.main
        }
    }));

    return (
        <>
            <StyledButton>
                {children}
            </StyledButton>
        </>
  )
}

export default StyledButton
