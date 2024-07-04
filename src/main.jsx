import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TelaInicial from './TelaInicial/TelaInicial.jsx'
import Header from './componentsPadrao/Header/Header.jsx'
import TelaLivros from './Biblia/TelaLivros/TelaLivros.jsx'
import TelaCapitulos from './Biblia/TelaCapitulos/TelaCapitulos.jsx'
import TelaTextos from './Biblia/TelaTextos/TelaTextos.jsx'
import TelaDuvida from './TelaDuvida/TelaDuvida.jsx'

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
        path: "/biblia/livros",
        element: <TelaLivros/>
      },

      {
        path: "/biblia/livros/:idLivro",
        element: <TelaCapitulos/>
      },

      {
        path: "/biblia/livros/:idLivro/:idCapitulo",
        element: <TelaTextos/>
      },

      {
        path: "duvidas/tiraduvidas",
        element: <TelaDuvida/>
      }

    ]
  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>,
)
