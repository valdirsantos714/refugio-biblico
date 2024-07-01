import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Footer from "../../componentsPadrao/Footer/Footer";


export default function TelaTextos() {

    const params = useParams()
    console.log(params.idLivro);

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


        return textos.sort((l, v) => l.versiculo - v.versiculo).map((l) => (
            <p key={l.id}
            className="rounded-[1rem] p-[1rem] lg:text-[1.6rem]"  >{l.versiculo} {l.texto}</p>
        ))
    }



    return (
        <>
            <section className="h-auto bg-white text-black">
                <div className="p-[1rem] text-center">
                    <h2 className="text-[2rem] lg:text-[2.2rem]">Versículos</h2>
                    <div className="text-[1.4rem] flex flex-row flex-wrap justify-center items-center gap-[0.5rem] min-h-[52vh]  p-[0.4rem] lg:flex-row">
                        {amostrarTextos()}
                    </div>
                </div>
            </section>
            
            
            <Footer/>
        </>
    )
}