import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import InvestorMicrosite from './App.jsx'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvestorMicrosite />
  </React.StrictMode>
)
