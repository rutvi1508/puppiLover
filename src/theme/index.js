import { createTheme, colors } from "@mui/material";


const theme = createTheme({
  palette: {
    background: {
      dark: "#ffffff",
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a4a4a4",
      white: "#ffffff",
    },
  },

 
});

export default theme;