import { useState } from "react";
import Footer from "../componentsPadrao/Footer/Footer";
import { GoogleGenerativeAI } from "@google/generative-ai";


export default function TelaDuvida() {

    const [dados, setDados] = useState([])
    const [input, setInput] = useState("")
    const [duvida, setDuvida] = useState("")

    const cliente = new GoogleGenerativeAI("SUA_API_KEY")

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
        setDuvida(evento.target.value)
    }

    const limpaResposta = () => {
        setDados([])
        setDuvida("")
        setInput("")
    }

    return (
        <>
        <main>
            <section className="min-h-[65vh] animate-[aparecer_1s_linear] ">
                <div className="w-[100%] min-h-[60vh] h-auto p-[0.5rem] bg-cores-azul text-cores-branco flex flex-col flex-wrap justify-center items-center">
                <h2 className="text-[2rem] p-[1rem] 2xl:text-[2.7rem]">Tira Dúvidas</h2>

                <p className="text-[1.2rem] text-center w-[90%] pb-[1rem] 2xl:text-[2rem]">Tire todas as suas dúvidas sobre a Bíblia</p>

                <div className="border-[1px] border-cores-azul_fraco w-full p-[0.4rem] flex flex-col lg:w-[75%] 2xl:w-[70%]">
                    <div className="ml-auto max-w-[70%] bg-cores-preto p-[0.3rem] text-center rounded-[0.8rem]
                    text-[1.2rem] lg:text-[1.3rem] 2xl:text-[1.6rem]">Dúvida: {duvida}</div>
                    <div className="mt-[0.7rem] mr-auto max-w-[70%]  bg-cores-azul_medio/[30%] text-cores-branco p-[0.3rem] text-center rounded-[0.8rem] text-[1.2rem] lg:text-[1.3rem] lg:max-w-[85%] 2xl:text-[1.6rem]">Resposta: {dados}</div>
                </div>

                <textarea id="input-duvida" className="text-cores-branco mt-[1rem] w-[100%] h-[10vh] p-[0.5rem] text-[1.3rem] border-[0.1rem] border-cores-branco bg-cores-azul lg:w-[70%] 2xl:w-[50%] 2xl:text-[1.7rem]" placeholder="Digite sua Dúvida" value={input} onChange={pegaDadosInput}></textarea>

                <div className="flex flex-row   w-[80%] justify-center items-center gap-[1rem]">
                <button className="bg-cores-azul_fraco p-[1.1rem] mt-[1rem] rounded-[1rem] text-[1.5rem] text-cores-azul hover:cursor-pointer hover:opacity-[90%]" onClick={amostrarDados}>Enviar</button>
                <button className="bg-cores-azul_fraco text-cores-azul p-[0.3rem] mt-[1rem] rounded-[1rem] text-[1.3rem] lg:p-[1.2rem] lg:text-[1.5rem] hover:cursor-pointer hover:opacity-[90%]" onClick={limpaResposta}>Limpar</button>

                </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}
