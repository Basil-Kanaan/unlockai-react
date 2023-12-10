import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '5rem',
            fontWeight: '800',
        },

        h2: {
            fontSize: '3rem',
            fontWeight: '800',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: '600',
        },
        h4: {
            fontSize: '1.5rem',
            fontWeight: '600',
        },
        p: {
            fontsize: '0.5rem'
        },
    },
});

export default theme;
