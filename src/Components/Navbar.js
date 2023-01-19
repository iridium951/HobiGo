import { Link } from "react-router-dom";
import "@fontsource/outfit";
import { useLocation } from "react-router-dom";
import "@fontsource/outfit";

function Navbar() {
    const location = useLocation();
    const title = location.state ? location.state.title : 'Habby!';
    if (location.pathname === "/landing" || location.pathname === "/login" || location.pathname === "/signup") {
        return null;
    }
    return (
        <nav className="nav">
            <Link to="/home" className="site-title" style={{ fontFamily: "outfit" }}>
                {title}
            </Link>
            <ul>
                <CustomLink to="/search">
                    <span className="material-symbols-outlined">
                        search
                    </span>
                </CustomLink>
            </ul>
        </nav>
    )
}


function CustomLink({ to, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === to ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}


export default Navbar;