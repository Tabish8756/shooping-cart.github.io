import { Link } from "react-router-dom";
import './Header.css';
function Header() {
    return (
        <div className="nav-bar">
            <div className="logo">
                <h2>Shop Enviro</h2>
            </div>
            <ul className="ul">
                <li className="li">
                    <Link to='/Home' style={{textDecoration:'none', color:'white', fontWeight:'700', fontSize:'18px', letterSpacing:'1px'}}>Home</Link>
                </li>
                <li>
                    <Link to='/Cart' style={{textDecoration:'none' , color:'white', fontWeight:'700', fontSize:'18px', letterSpacing:'1px'}} >Cart</Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;