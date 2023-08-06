import { ThemeProvider } from "@emotion/react";
import { Box, createTheme } from "@mui/material";
import "./App.css";
import { Game } from "./Game";

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: "Nunito",
        },
    },
});

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box className="App" sx={{padding: "0.2em"}}><Game/></Box>
        </ThemeProvider>
    );
};

export default App;
