
export default function Footer() {
    return (
        <>
        <footer className="h-[30vh]  text-center p-[1.2rem] flex flex-col justify-center items-center animate-[aparecer_1s_linear]">
            <h2 className="text-[1.5rem] lg:text-[1.7rem] 2xl:text-[1.8rem]">Obrigado por visitar o nosso site</h2>
            <p className="text-[1.2rem] lg:text-[1.5rem] 2xl:text-[1.6rem]">Volte sempre e recomende o nosso site para mais pessoas</p>
            <a href="https://github.com/valdirsantos714/refugio-biblico" target="_blank" className="text-[1.3rem] lg:text-[1.5rem] 2xl:text-[1.6rem] hover:opacity-[80%] transition-all text-cores-azul_fraco pt-[0.5rem]">Clique para ver o repositório deste projeto</a>
        </footer>
        </>
    )
}