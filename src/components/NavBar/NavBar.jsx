import CartWidget from "./CartWidget"
import "./navbar.css"

function NavBar() {
  return (
    <nav className="nav-menu">
        <ul className="nav-list">
            <li>
                <a href="/">
                    <img src="/imgs/Logo.jpg" alt="logo" />
                </a>
            </li>

            <li>
                <a href="/">Mermeladas</a>
            </li>
            <li>
                <a href="/">Dulces</a>
            </li>
            <li>
                <a href="/">Frutos secos</a>
            </li>
            <li>
                <CartWidget/>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar