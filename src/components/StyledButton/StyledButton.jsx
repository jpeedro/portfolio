import { styled } from "@mui/material";


const StyledButton = ({children, onClick}) => {

    const StyledButton = styled("button")(({ theme })=> ({
        backgroundColor: "transparent",
        border: `1px solid ${ theme.palette.primary.contrastText }`,
        padding: "5px 15px",
        verticalAlign: "middle",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        cursor: "pointer",
        '&:hover': {
            backgroundColor: "#00BFFF"
        }
    }));

    return (
        <>
            <StyledButton onClick={onClick}>
                {children}
            </StyledButton>
        </>
  )
}

export default StyledButton
