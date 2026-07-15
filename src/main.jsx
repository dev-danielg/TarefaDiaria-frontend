import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MainPage from './components/MainPage.jsx'
import LoginPage from './components/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainPage/>
    <LoginPage/>
  </StrictMode>,
)
