import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        fontFamily: 'Poppins',
        color: '#ffffff',
        h1: {
            fontSize: '5rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.9)',
        },

    },
});

export default theme;
