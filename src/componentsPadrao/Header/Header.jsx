import { Link, Outlet } from "react-router-dom";


export default function Header() {
    return (
        <header className="bg-cores-azul text-cores-branco">
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