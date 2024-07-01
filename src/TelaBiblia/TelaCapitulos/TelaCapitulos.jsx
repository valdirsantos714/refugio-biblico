import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"


export default function TelaCapitulos() {
    const params = useParams();
    //console.log(params);

    const [capitulos, setCapitulos] = useState([])

    useEffect(() => {
        pegaLivros()        

    }, [])

    const pegaLivros = async () => {
        try {
            
            const resposta = await fetch(`https://biblia-api.onrender.com/livros/${params.id}`, {
                method: "GET"
            })

            const l = await resposta.json()

            setCapitulos(l)
            console.log(capitulos);


        } catch(e) {
            console.log(e);
        }
    }

    const amostrarCapitulos = () => {
        return capitulos.map((l) => (
            <Link key={l.id}  className="text-[1.4rem] bg-green-700 text-white p-[0.7rem] rounded-[1rem] lg:flex  ">{l}</Link>
            
        ))
    }



    return (
        <section>
        <h2>Capitulo {params.id}</h2>
        {amostrarCapitulos()}
        </section>
    )
}