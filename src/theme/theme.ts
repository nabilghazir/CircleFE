import { createTheme } from '@mui/material/styles';

const customTheme = createTheme({
    palette: {
        primary: {
            main: '#04A51E',
        },
        background: {
            default: '#1D1D1D',
            paper: '#262626',
        },
        grey: {
            500: '#909090',
            600: '#3F3F3F'
        },
        text: {
            primary: '#FFFFFF',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    '&:before': {
                        backgroundColor: '#005E0E',
                    },
                    '&:hover': {
                        backgroundColor: '#04A51E',
                    },
                },
            },
        },
    },
    shape: {
        borderRadius: 8,
    },
});

export default customTheme;
