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

        return livros.map((l) => (
            <Link key={l.id}
            className="bg-green-600 rounded-[1rem] p-[1rem] lg:text-[1.6rem]"  to={`/biblia/livros/${l.id}`}>{l.nome}</Link>
        ))
    }

    return (
        <>
            <section className="h-auto bg-white text-black">
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