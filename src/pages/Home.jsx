import BarraNavegacao from "../components/BarraNavegacao";
import CarrinhoSuspenso from "../components/CarrinhoSuspenso";
import Carrossel from "../components/Carrossel";
import Categorias from "../components/Categorias";
import Produtos from "../components/Produtos"
import Facilidades from "../components/Facilidades"
import Novidades from "../components/Novidades"
import Rodape from "../components/Rodape"

export default function Home () {
    return(
        <>
      <BarraNavegacao />
      <CarrinhoSuspenso />
      <main>
        <Carrossel />
        <Categorias />
        <Produtos />
        <Facilidades />
        <Novidades />
      </main>
      <Rodape />
    </>
    )
}