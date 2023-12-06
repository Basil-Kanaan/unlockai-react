import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Inter, sans-serif',
        h1: {
            fontSize: '4rem',
            fontWeight: '800',
        },

        h2: {
            fontSize: '3rem',
            fontWeight: '600',
        },
        h3: {
            fontSize: '2rem',
            fontWeight: '600',
        },
        p: {
            fontsize: '0.5rem'
        },
    },
});

export default theme;
