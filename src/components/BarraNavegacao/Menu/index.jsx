import MenuItem from "./MenuItem"

export default function Menu (){
    const links = [
        {name: "Home", path:"/"},
        {name: "Carrinho", path:"/carrinho"},
        {name: "Lojas", path:"/lojas"},
        {name: "Novidades", path:"/novidades"},
        {name: "Promoções", path:"/promocoes"},
    ]
    return(
        <ul className="navbar-nav me-auto">
            {links.map((link) => (
                <MenuItem key={link.path} link={link}/>
            ))}
        </ul>
    )
}