import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#8e8e8e',
      main: '#13293d',
      dark: '#13293d',
      contrastText: '#d4a0a7',
    },
    secondary: {
      light: '#ffad42',
      main: '#f57c00',
      dark: '#bb4d00',
      contrastText: '#d4a0a7',
    },
      openTitle: '#455a64',
      protectedTitle: '#1d7874',
      type: 'light'
    }
  })

  export default theme