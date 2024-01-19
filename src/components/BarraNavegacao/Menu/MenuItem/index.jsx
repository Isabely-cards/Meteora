import { Link } from "react-router-dom";

export default function MenuItem({ link }) {
    return (
        <li className="nav-item">
            <Link className="nav-link" to={link.path} aria-current="page">
                {link.name}
            </Link>
        </li>
    )
}