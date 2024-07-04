import { useState } from "react";
import Footer from "../componentsPadrao/Footer/Footer";
import { GoogleGenerativeAI } from "@google/generative-ai";


export default function TelaDuvida() {

    const [dados, setDados] = useState([])
    const [input, setInput] = useState("")

    const cliente = new GoogleGenerativeAI("AIzaSyAQyyvt5WFVP5ku2h2QaAYjkLM8DiAAd5A")

    const pegaDados = async () => {
        try {
            
            const response = cliente.getGenerativeModel({model: 'gemini-1.0-pro'})

            const generationConfig = {
                temperature: 0.9,
                topP: 1,
                topK: 0,
                maxOutputTokens: 2048,
                responseMimeType: "text/plain",
              };

            const chat = response.startChat({
                generationConfig,
                history: [

                ]
            })

            const respostaMesmo = await chat.sendMessage(input)
            const r = await respostaMesmo.response.text;

            setDados(r)

        } catch (error) {
            console.error(error);
        }
    }

    const amostrarDados = () => {
        setInput("")
        pegaDados();
        
        if (dados.length > 0) {
            return dados

        } else {
            return <div className="w-[24px] h-[24px] p-[1rem] animate-spin border-[10px] border-b-transparent border-blue-600 rounded-[50%]">oi</div>
        }
    }

    const pegaDadosInput = (evento) => {
        setInput(evento.target.value)
    }

    const limpaResposta = () => {
        setDados([])
    }

    return (
        <>
        <main>
            <section className="min-h-[65vh] ">
                <div className="w-[100%] min-h-[60vh] h-auto p-[0.5rem] bg-cores-azul text-cores-branco flex flex-col flex-wrap justify-center items-center">
                <h2 className="text-[2rem] p-[1rem]">Tira Dúvidas</h2>
                <p className="text-[1.2rem] text-center w-[90%] pb-[1rem]">Tire todas as suas dúvidas sobre a Bíblia</p>
                <p className="text-[1.3rem] pb-[0.5rem] text-cores-azul_fraco">{dados}</p>

                <textarea id="input-duvida" className="text-cores-azul mt-[1rem] w-[100%] h-[10vh] p-[0.5rem] text-[1.3rem] border-[0.1rem] border-black" placeholder="Digite sua Dúvida" value={input} onChange={pegaDadosInput}></textarea>

                <div className="flex flex-row   w-[80%] justify-center items-center gap-[1rem]">
                <button className="bg-cores-azul_fraco p-[1.1rem] mt-[1rem] rounded-[1rem] text-[1.5rem] text-cores-azul" onClick={amostrarDados}>Enviar</button>
                <button className="bg-cores-azul_fraco text-cores-azul p-[1.1rem] mt-[1rem] rounded-[1rem] text-[1.3rem]" onClick={limpaResposta}>Limpar Resposta</button>

                </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}