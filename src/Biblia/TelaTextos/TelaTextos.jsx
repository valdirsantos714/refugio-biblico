import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function TelaTextos() {

    const params = useParams()

    const [textos, setTextos] = useState([])

    useEffect(() => {
        pegaTextos()
    }, [])

    const pegaTextos = async () => {
        try {
            
            const response = await fetch(`https://biblia-api.onrender.com/livros/${params.idLivro}/${params.idCapitulo}`, {
                method: "GET"
            })
            
            const l = await response.json()

            setTextos(l)
            console.log(textos)

        } catch (e) {
            console.log(e);
        }
    }

    const amostrarTextos = () => {

        return textos.map((l) => (
            <Link key={l.id}
            className="bg-green-600 rounded-[1rem] p-[1rem] lg:text-[1.6rem]"  to={`/biblia/livros/${l.id}`}>{l.nome}</Link>
        ))
    }



    return (
        <h2>Tela textos id: {params.idCapitulo}</h2>
    )
}