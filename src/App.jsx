import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import "./App.css";

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
            <div className="App">Hello</div>
        </ThemeProvider>
    );
};

export default App;
