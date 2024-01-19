import BotaoTogglerMenu from "./BotaoTogglerMenu";
import Logo from "./Logo";

export default function BarraNavegacao () {
    return(
        <header>
            <nav className="navbar navbar-expand-md bg-black navbar-dark">
                <div className="container-fluid custom-margin">
                    <Logo/>
                    <div className="d-flex flex-row-reverse">
                        <BotaoTogglerMenu/>
                    </div>
                </div>
            </nav>
        </header>

    )
}