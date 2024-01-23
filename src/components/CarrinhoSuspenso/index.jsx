import Titulo from "../Titulo";
import Botao from '../Botao'
import ListaProdutosCarrinho from '../ListaProdutosCarrinho'
import TotalCarrinho from  '../CarrinhoSuspenso/TotalCarrinho'
export default function CarrinhoSuspenso() {
  return (
    <div
      className="offcanvas offcanvas-end text-bg-dark"
      tabIndex="-1"
      id="modalCarrinhoSuspenso"
      aria-labelledby="modalCarrinhoSuspensoLabel"
    >
      <div className="offcanvas-header botao-lilas">
        <Titulo
          element="h5"
          className="offcanvas-title"
          id="modalCarrinhoSuspensoLabel"
        >
          Carrinho
        </Titulo>
        <Botao
          variant="close"
          type="button"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></Botao>
      </div>
      <div className="offcanvas-body">
        <ListaProdutosCarrinho carrinho={carrinho} />
        <TotalCarrinho valorTotalCarrinho={valorTotal} />
      </div>
    </div>
  );
}
