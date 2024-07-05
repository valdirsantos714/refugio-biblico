import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="text-cores-preto bg-[url('/banner_biblia.jpg')] bg-no-repeat bg-center bg-cover h-[90vh] flex justify-center items-center ">

            <div className=" bg-blue-300/60 w-4/5 h-[60vh] p-4 text-center  rounded-[1rem] lg:w-[90%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
                <h2 className="text-3xl pb-[0.5rem] lg:text-[2.5rem] 2xl:text-[3rem] animate-[aparecer_1s_linear]">Ajunte tesouros no céu agora mesmo!</h2>
                <p className="text-[1.2rem] pb-[0.7rem] lg:text-[1.7rem] 2xl:text-[2.2rem] 2xl:w-[70%] 2xl:p-[1rem] animate-[aparecer_1.2s_linear]">Leia a Bíblia agora e descubra como! Ou se preferir tire suas dúvidas bíblicas agora mesmo!</p>
                
                <div className="flex flex-col text-[1.3rem] gap-[0.5rem] lg:text-[1.5rem] justify-center items-center lg:p-[0rem] 2xl:flex-row 2xl:w-[60%] 2xl:justify-center 2xl:items-center 2xl:pt-[1rem] animate-[aparecer_1.3s_linear]" >
                    <Link to={"/biblia/livros"} className="bg-cores-azul text-cores-branco rounded-[0.4rem] p-[0.4rem] lg:w-2/5 lg:rounded-[1rem]  2xl:w-[100%] 2xl:text-[2rem] hover:cursor-pointer hover:opacity-[90%]">Ler a Bíblia</Link>
                    <Link to={"duvidas/tiraduvidas"} className="bg-cores-azul text-cores-branco rounded-[1rem] p-[0.4rem] lg:w-2/5 2xl:w-[100%] 2xl:text-[1.63rem] hover:cursor-pointer hover:opacity-[90%]">Tirar suas dúvidas bíblicas</Link>
                </div>

            </div>
        </section>
    )
}