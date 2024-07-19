import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Footer from "../../componentsPadrao/Footer/Footer"


export default function TelaCapitulos() {
    const params = useParams()

    const [capitulos, setCapitulos] = useState([])

    useEffect(() => {
        pegaCapitulos()
    }, [])

    const pegaCapitulos = async () => {
        try {
            
            const response = await fetch(`https://biblia-api-production-2063.up.railway.app/livros/${params.idLivro}`, {
                method: "GET"
            })
            
            const l = await response.json()

            setCapitulos(l)
            console.log(capitulos);

        } catch (e) {
            console.log(e);
        }
    }

    const amostrarCapitulos = () => {
        if (capitulos.length > 0) {
            return capitulos.map((c) => (
            <Link key={c.id}
            className="bg-cores-azul_medio text-cores-branco rounded-[0.5rem] p-[1rem] lg:text-[1.6rem] animate-[aparecer_1s_linear]"  to={`/biblia/livros/${params.idLivro}/${c}`} >{c}</Link>
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


    //==================================
    return (
        <>
            <section className="h-auto  bg-cores-azul text-cores-branco">
                <div className="p-[1rem] text-center">
                    <h2 className="text-[2rem] lg:text-[2.2rem] animate-[aparecer_1s_linear]">Capítulos</h2>
                    <div className="lg:w-[50%] 2xl:w-[50%] flex flex-row flex-wrap justify-center items-center m-auto">
                        <div className="text-[1.4rem] flex flex-row flex-wrap justify-center items-center gap-[0.5rem] min-h-[55vh]  p-[0.4rem] lg:flex-row ">
                            {amostrarCapitulos()}
                        </div>
                    </div>
                </div>
            </section>
            
            
            <Footer/>
        </>
    )
}