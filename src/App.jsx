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
            <Box className="App"><Game/></Box>
        </ThemeProvider>
    );
};

export default App;
