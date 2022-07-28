import { createTheme } from "@mui/material/styles";

import { ptBR } from "@mui/material/locale";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#8C28E0",
      },
      secondary: {
        main: "#212121",
      },
    },
    typography: {
      fontFamily: "Myriad Pro, sans-serif",
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": "['myriad pro']",
        },
      },
    },
  },
  ptBR
);

export default theme;
