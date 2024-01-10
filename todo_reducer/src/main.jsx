import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Todoprovider } from './context/Context.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Todoprovider>
    <App />
    </Todoprovider>

  </React.StrictMode>,
)
