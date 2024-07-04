import { Link, Outlet } from "react-router-dom";
import "./Header.css"

export default function Header() {
    return (
        <header className="bg-cores-azul text-cores-branco">
            
            <input type="checkbox" id="amostrar-lista-header" />
            <label htmlFor="amostrar-lista-header">
                <span className="bg-[url('/barras.svg')] flex w-[1.8rem] h-[1.5rem]"></span>
            </label>
            
            <nav className="flex flex-col gap-[0.7rem] bg-cores-azul_medio" id="lista">
                    <Link to={"/biblia/livros"}>Ler a Bíblia</Link>
                    <Link to={"duvidas/tiraduvidas"}>Tirar dúvidas</Link>
                    <a href="#vantagens">Vantagens</a>
            </nav>

                <div className="flex text-2xl lg: p-5 justify-between items-center text-center">

                <div className=" flex m-auto">
                    <Link className=" text-3xl" to={"/"}>Refúgio Bíblico</Link>
                </div>
                
                <div>
                <nav className="hidden  lg:flex gap-6 ">
                    <Link to={"/biblia/livros"}>Ler a Bíblia</Link>
                    <Link to={"duvidas/tiraduvidas"}>Tirar dúvidas</Link>
                    <a href="#vantagens">Vantagens</a>
                </nav>
                </div>
            </div>


            <Outlet/>
            

        </header>
    )
}