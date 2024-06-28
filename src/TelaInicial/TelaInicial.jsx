import Footer from "../componentsPadrao/Footer/Footer"
import Header from "../componentsPadrao/Header/Header"
import Banner from "./components/Banner/Banner"
import Vantagens from "./components/Vantagens/Vantagens"


export default function TelaInicial() {
    return(
        <>
        <Header/>
        <Banner/>
        <Vantagens/>
        <Footer/>
        </>
    )
}