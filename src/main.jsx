import React from 'react'
import ReactDOM from 'react-dom/client'
import { CreateNote } from './Pages/CreateNote'
import { ThemeProvider } from 'styled-components'
import GlobalStyle  from "./styles/global.js"
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <CreateNote />
    </ThemeProvider>
  </React.StrictMode>
)
