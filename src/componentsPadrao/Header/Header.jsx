import { Link, Outlet } from "react-router-dom";


export default function Header() {
    return (
        <header className="bg-blue-900 text-white">
            <div className="flex text-2xl lg: p-5 justify-between items-center text-center">

                <div className=" flex m-auto">
                    <h2 className=" text-3xl">Bíblia</h2>
                </div>
                
                <div>
                <nav className="hidden  lg:flex gap-6 ">
                    <Link>Ler a Bíblia</Link>
                    <Link>Tirar dúvidas</Link>
                    <Link>Vantagens</Link>
                </nav>
                </div>
            </div>

            <Outlet/>
            
        </header>
    )
}