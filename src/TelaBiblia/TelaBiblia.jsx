import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "../componentsPadrao/Footer/Footer"

export default function TelaBiblia() {
    const params = useParams();
    const [livros, setLivros] = useState([])

    useEffect(() => {
        pegaLivros()
    }, [])


    const pegaLivros = async () => {
        try {
            
            const resposta = await fetch("https://biblia-api.onrender.com/livros/all", {
                method: "GET"
            })

            const l = await resposta.json()

            setLivros(l)
            console.log(livros);


        } catch (error) {
            console.log("Deu erro ", error);
        }
    }

    const livroEscolhido = livros.find((l) => {return l.id === params.id});
//    console.log(livroEscolhido);


    const amostrarLivros = () => {
        return livros.map((l) => (
            <Link key={l.id}  to={`/biblia/${l.id}`}  className="text-[1.4rem] bg-green-700 text-white p-[0.7rem] rounded-[1rem] ">{l.nome}</Link>
            
        ))
    }


    return (
        <>
        <main>
            <section className="bg-white text-black text-center">
                <h2 className="text-[1.6rem] p-[1rem] lg:text-[2.4rem]">Livros da Bíblia</h2>
                <div className="flex flex-col flex-wrap gap-[0.7rem] justify-center items-center pb-[0.5rem] lg:flex-row p-[1rem] pb-[1rem]">
                    {amostrarLivros()}
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}