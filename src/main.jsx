import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './main.css'
import {BrowserRouter} from 'react-router-dom'
import { FavProvider } from './components/useContext/FavContent'

ReactDOM.createRoot(document.getElementById('root')).render(
  

<FavProvider>
  <BrowserRouter>
    <App />

  </BrowserRouter>
  </FavProvider>
)

