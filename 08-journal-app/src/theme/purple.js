import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';


export const purpleTheme = createTheme ({
    palette: {
        primary: {
            main: '#2196f3',
            contrastText: '#fff',
        },
        secondary: {
            main: '#f44336',
            contrastText: '#fff',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fafafa',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
}
);
