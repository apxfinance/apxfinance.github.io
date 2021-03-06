//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createMuiTheme } from '@material-ui/core/styles';

const newTheme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#6f4ef2',
    },
    background: {
      default: '#121212',
      paper: '#fff',
    },
    primary: {
      light: '#6f4ef2',
      main: '#6f4ef2',
      dark: '#6f4ef2',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#000',
    },
  },
  typography: {
    color: '#9a9cab',
    fontFamily: ['"Poppins"', 'sans-serif'].join(','),
  },
});

export default newTheme;
