import { Link } from '@tanstack/react-router';
import cart from '../assets/cart.svg';

export default function Header() {
  return (
    <nav className='nav'>
        <Link to="/home" className="nav-link">Home</Link>
        <Link to="/menu" className="nav-link">Menu</Link>
        <Link to="/contact" className="nav-link">Contact</Link>
        <Link to="/cart" className="cart-link">
            <img className="cart" src={cart} alt="cart" />
        </Link>
    </nav>
  );
}