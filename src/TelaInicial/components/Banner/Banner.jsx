import { Link } from "react-router-dom";

export default function Banner() {
    return (
        <section className="bg-[url('/banner_biblia.jpg')] bg-no-repeat bg-center bg-cover h-[60vh] flex justify-center items-center">

            <div className=" bg-blue-300/60 w-4/5 p-4 text-center ">
                <h2 className="text-3xl pb-[0.5rem] lg:text-[2.5rem]">Ajunte tesouros no céu agora mesmo!</h2>
                <p className="text-[1.2rem] pb-[0.7rem] lg:text-[1.4rem]">Leia a Bíblia agora e descubra como! Ou se preferir tire suas dúvidas bíblicas agora mesmo!</p>
                
                <div className="flex flex-col text-[1.3rem] gap-[0.5rem] lg:text-[1.5rem] justify-center items-center">
                    <Link className="bg-green-600 rounded-[0.4rem] p-[0.4rem] lg:w-2/5 rounded-[1rem]">Ler a Bíblia</Link>
                    <Link className="bg-green-600 rounded-[1rem] lg:w-2/5">Tirar suas dúvidas bíblicas</Link>
                </div>

            </div>
        </section>
    )
}