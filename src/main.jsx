import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TelaInicial from './TelaInicial/TelaInicial.jsx'
import Header from './componentsPadrao/Header/Header.jsx'
import TelaBiblia from './TelaBiblia/TelaBiblia.jsx'

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Header/>,
    children: [
      {
        path: "/",
        element: <TelaInicial/>
      },

      {
        path: "/biblia",
        element: <TelaBiblia/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>,
)
