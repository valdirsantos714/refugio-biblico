import { Link, Outlet } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <>
        <header className="bg-cores-azul text-cores-branco ">
                <div className="hidden text-2xl lg: p-5 justify-between items-center text-center lg:flex">

                <div className=" flex m-auto">
                    <Link className=" text-3xl animate-[aparecer_300ms_linear]hover:cursor-pointer hover:opacity-[90%]" to={"/"}>Refúgio Bíblico</Link>
                </div>
                
                <div>
                <nav className="hidden  lg:flex gap-6 animate-[aparecer_300ms_linear]">
                    <Link className="hover:cursor-pointer hover:opacity-[90%]" to={"/biblia/livros"}>Ler a Bíblia</Link>
                    <Link className="hover:cursor-pointer hover:opacity-[90%]" to={"duvidas/tiraduvidas"}>Tirar dúvidas</Link>
                    <Link className="hover:cursor-pointer hover:opacity-[90%]" href="#vantagens">Vantagens</Link>
                </nav>
                </div>
            </div>

            <div className="flex justify-center items-center h-[10vh] relative top-0 left-0 bg-cores-azul lg:hidden ">
            <div className="flex lg:hidden pl-[0.4rem]">
                <input type="checkbox" id="amostrar-lista-header" />
                <label htmlFor="amostrar-lista-header">
                    <span className="bg-[url('/barras.svg')] flex w-[25px] h-[25px]"></span>
                </label>
                <nav className="hidden bg-cores-azul_medio flex-col p-[1rem] text-[1.3rem] gap-[0.3rem] animate-[aparecer_300ms_linear]" id="lista">
                    <Link to={"/"}>Ir para o início</Link>
                    <Link to={"/biblia/livros"}>Ler a Bíblia</Link>
                    <Link to={"duvidas/tiraduvidas"}>Tirar dúvidas</Link>
                    <Link to={"/#vantagens"}>Vantagens</Link>
                </nav>
            </div>


                <div className=" block m-auto lg:hidden">
                    <Link className=" text-3xl" to={"/"}>Refúgio Bíblico</Link>
                </div>

                </div>

                

            <Outlet/>
            

        </header>
  
        </>
    )
}