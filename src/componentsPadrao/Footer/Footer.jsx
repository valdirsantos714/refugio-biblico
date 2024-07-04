import { GoogleGenerativeAI } from "@google/generative-ai";
import { useEffect, useState } from "react";

export default function Footer() {
    const cliente = new GoogleGenerativeAI('AIzaSyAQyyvt5WFVP5ku2h2QaAYjkLM8DiAAd5A')

    const [dados, setDados] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        pegaDados()
    }, [])

    const handleChange = (event) => {
        setInput(event.target.value);
      };

    const pegaDados = async () => {
        try {

            const response = cliente.getGenerativeModel({model: 'gemini-1.0-pro'})

            const generationConfig = {
                temperature: 0.9,
                topK: 1,
                topP: 1,
                maxOutputTokens: 2048,
              };

            const chat = response.startChat({
                generationConfig,
                history: [
                ],
              });

            const respostaMesmo = await chat.sendMessage(input)
            
            const r  = await respostaMesmo.response.text
            setDados(r)
            console.log(dados)

        } catch (error) {
            console.error(error);
        }
    } 

    const amostrar = () => {
        if (dados.length > 0) {
            
            /*Object.entries(dados[0]).map((d) => (
                <h2 key={d.id}>{d}</h2>
            ))*/
            //console.log(Object.entries(dados).forEach((n) => console.log(n)));
            return dados
            
          } else {
            return (
            <div className="flex justify-center flex-col items-center" >
                <div className="w-[24px] h-[24px] p-[1rem] animate-spin border-[10px] border-blue-800  border-b-transparent bg-transparent rounded-[50%]">
                </div>
                <p className="pt-[1rem]">Carregando... Esse processo levará de 3 a 5 minutos</p>
            </div>
            )
        }
          
    }

    return (
        <>
        <footer className="h-[auto]  text-center p-[1.2rem] flex flex-col justify-center items-center">
            <h2 className="text-[1.5rem] lg:text-[1.7rem]">Obrigado por visitar o nosso site</h2>
            <p className="text-[1.2rem] lg:text-[1.5rem]">Volte sempre e recomende o nosso site para mais pessoas</p>
            {amostrar()}
            <input type="text" placeholder="Digite" className="text-black p-[1rem]" value={input} onChange={handleChange}/>
            <button onClick={pegaDados}>Enviar</button>
        </footer>
        </>
    )
}