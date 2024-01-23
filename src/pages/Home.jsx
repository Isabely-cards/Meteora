import BarraNavegacao from "../components/BarraNavegacao";
import CarrinhoSuspenso from "../components/CarrinhoSuspenso";
import Carrossel from "../components/Carrossel";
import Categorias from "../components/Categorias";

export default function Home () {
    return(
        <>
            <BarraNavegacao/>
            <CarrinhoSuspenso/>
            <main>
                <Carrossel/>
                <Categorias/>
            </main>
        </>
    )
}