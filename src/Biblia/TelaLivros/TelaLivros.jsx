import { useEffect } from "react"
import { useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "../../componentsPadrao/Footer/Footer"


export default function TelaLivros() {

    const params = useParams()

    const [livros, setLivros] = useState([])

    useEffect(() => {
        pegaLivros()
    }, [])

    const pegaLivros = async () => {
        try {
            
            const response = await fetch("https://biblia-api.onrender.com/livros/all", {
                method: "GET"
            })
            
            const l = await response.json()

            setLivros(l)
            console.log(livros);

        } catch (e) {
            console.log(e);
        }
    }

    const amostrarLivros = () => {

        if (livros.length > 0) {
            return livros.map((l) => (
                <Link key={l.id}
                className="bg-cores-azul_medio text-cores-branco rounded-[1rem] p-[1rem] lg:text-[1.6rem]"  to={`/biblia/livros/${l.id}`}>{l.nome}</Link>
            ))
        } else {
            return (
            <div className="flex justify-center flex-col items-center" >
                <div className="w-[24px] h-[24px] p-[1rem] animate-spin border-[10px] border-cores-azul_fraco  border-b-transparent bg-transparent rounded-[50%]">
                </div>
                <p className="pt-[1rem]">Carregando... Esse processo pode levar de 3 a 5 minutos</p>
            </div>
            )
        }
    }

    return (
        <>
            <section className="h-auto min-h-[65vh] bg-cores-azul text-cores-branco">
                <div className="p-[1rem] text-center">
                    <h2 className="text-[2rem] lg:text-[2.2rem]">Livros da Bíblia</h2>
                    <div className="text-[1.4rem] flex flex-col justify-center items-center gap-[0.5rem]  p-[0.4rem] lg:flex-row flex-wrap">
                        {amostrarLivros()}
                    </div>
                </div>
            </section>
            
            <Footer/>
        </>
    )
}