import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './Header/Header.jsx'
import TelaInicial from './TelaInicial/TelaInicial.jsx'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <TelaInicial/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>,
)
