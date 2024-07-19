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
            
            const response = await fetch(`https://biblia-api-production-2063.up.railway.app/livros/${params.idLivro}/${params.idCapitulo}`, {
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

        if (textos.length > 0) {
            return textos.sort((l, v) => l.versiculo - v.versiculo).map((l) => (
            <p key={l.id}
            className="w-[100%] text-cores-branco rounded-[1rem] p-[1rem] lg:text-[1.6rem] 2xl:w-[50%] 2xl:text-[1.8rem] animate-[aparecer_1s_linear]"  >{l.versiculo} {l.texto}</p>
        ))
 
        } else {
            return (
            <div className="flex justify-center flex-col items-center" >
                <div className="w-[24px] h-[24px] p-[1rem] animate-spin border-[10px] border-blue-800  border-b-transparent bg-transparent rounded-[50%]">
                </div>
                <p className="pt-[1rem]">Carregando... Esse processo pode levar de 3 a 5 minutos</p>
            </div>
            )
        }
    }



    return (
        <>
            <section className="h-auto  bg-cores-azul text-cores-branco">
                <div className="p-[1rem] text-center">
                    <h2 className="text-[2rem] lg:text-[2.2rem] animate-[aparecer_1s_linear]">Versículos</h2>
                    <div className=" w-[100%] text-[1.4rem] flex flex-row flex-wrap justify-center items-center gap-[0.5rem] min-h-[55vh]  p-[0.4rem] lg:flex-row ">
                        {amostrarTextos()}
                    </div>
                </div>
            </section>
            
            
            <Footer/>
        </>
    )
}