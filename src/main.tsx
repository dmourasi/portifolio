import { StrictMode } from 'react'
import App from './App.tsx'
import { Css } from '@mui/icons-material'
import { CssBaseline, ThemeProvider } from '@mui/material'
import ReactDOM from 'react-dom'
import React from 'react'
import theme from './theme.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
       
  </React.StrictMode>,
)
