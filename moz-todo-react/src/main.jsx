import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// component - reusable module that renders part of app
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App subject="Crank" />
  </StrictMode>,
)
