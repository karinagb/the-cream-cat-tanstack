import { Link } from '@tanstack/react-router';
import cart from '/assets/cart.svg';
import logo from '/assets/logo.png';


export default function Header() {
  return (
    <nav className='nav'>
        <Link to="/" className="nav-link">
        <img src={logo} alt="The Cream Cat" className="nav-logo" />
        The Cream Cat
      </Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/cart" className="cart-link">
            <img className="cart" src={cart} alt="cart" />
        </Link>
    </nav>
  );
}