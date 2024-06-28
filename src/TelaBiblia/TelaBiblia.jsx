import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Footer from "../componentsPadrao/Footer/Footer"

export default function TelaBiblia() {

    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHIiOiJGcmkgSnVuIDI4IDIwMjQgMTQ6Mzg6NTkgR01UKzAwMDAudmFsZGlyc2FudG9zdDQwQGdtYWlsLmNvbSIsImlhdCI6MTcxOTU4NTUzOX0.G8MZIUyE8o3wOOxkGyEpLAxH896o0R6-Inz3OFwvX88"

    const [livros, setLivros] = useState([])

    useEffect(() => {
        pegaLivros()
    }, [])


    const pegaLivros = async () => {
        try {
            
            const resposta = await fetch("https://www.abibliadigital.com.br/api/books", {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Accept": "application/json"
                }
            })

            const l = await resposta.json()

            const listaNomesLivros = l.map((l) => l.name)
            setLivros(listaNomesLivros)
            console.log(livros);


        } catch (error) {
            console.log("Deu erro ", error);
        }
    }

    const amostrarLivros = () => {
        return livros.map((l) => (
            <Link className="text-[1.4rem] bg-green-700 text-white p-[0.7rem] rounded-[1rem] ">{l}</Link>
            
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