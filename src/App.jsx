import { ThemeProvider } from '@emotion/react'
import './App.css'
import Routers  from './routers/Routers'
import { darkTheme } from './theme/DarkTheme'
import { CssBaseline } from '@mui/material'
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Routers/>
    </ThemeProvider>
  )

}

export default App
