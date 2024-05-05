import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Component/Header.jsx'
import Body from './Component/Body.jsx'
import Footer from './Component/Footer.jsx'
import Induk from './Pages/Induk.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}

    {/* <Header />
    <Body />
    <Footer /> */}

    <Induk />
  </React.StrictMode>,
)
