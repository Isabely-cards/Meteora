import { useLocation } from "react-router-dom";
import BotaoCarrinho from "./BotaoCarrinho";
import BotaoTogglerMenu from "./BotaoTogglerMenu";
import Logo from "./Logo";
import Menu from "./Menu";
import CampoTexto from '../CampoTexto'
import Botao from "../Botao";

export default function BarraNavegacao() {
    const location = useLocation();
    const ehAPaginaCarrinho = location.pathname === "/carrinho";
    //const { quantidade } = useCarrinhoContext();
    const quantidade = 1
    return (
        <header>
            <nav className="navbar navbar-expand-md bg-black navbar-dark">
                <div className="container-fluid custom-margin">
                    <Logo />
                    <div className="d-flex flex-row-reverse">
                        <BotaoTogglerMenu />
                        <BotaoCarrinho
                            className={`d-md-none ${ehAPaginaCarrinho && "d-none"}`}
                            quantidadeProdutos={quantidade}
                        />
                    </div>
                    <div className="collapse navbar-collapse" id="conteudoBarraNavegacao">
                        <Menu />
                        <form className="d-flex" role="search">
                            <CampoTexto
                                className="me-2"
                                type="search"
                                placeholder="Digite o nome do produto"
                                aria-label="Pesquisar"
                            />
                            <Botao type="submit">Pesquisar</Botao>
                            <BotaoCarrinho
                                className={`d-none d-md-block ${ehAPaginaCarrinho && "d-md-none"
                                    }`}
                                quantidadeProdutos={quantidade}
                            />
                        </form>
                    </div>
                </div>
            </nav>
        </header>
    )
}