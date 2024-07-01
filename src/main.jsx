import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import TelaInicial from './TelaInicial/TelaInicial.jsx'
import Header from './componentsPadrao/Header/Header.jsx'
import TelaLivros from './Biblia/TelaLivros/TelaLivros.jsx'
import Footer from './componentsPadrao/Footer/Footer.jsx'
import TelaCapitulos from './Biblia/TelaCapitulos/TelaCapitulos.jsx'
import TelaTextos from './Biblia/TelaTextos/TelaTextos.jsx'

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
        path: "/biblia/livros/l/:idCapitulo",
        element: <TelaTextos/>
      }

    ]
  }



])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={rotas}/>
  </React.StrictMode>,
)
