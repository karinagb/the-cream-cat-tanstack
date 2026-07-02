import { Link } from '@tanstack/react-router';
import cartLogo from '/assets/cart.svg';
import logo from '/assets/logo.png';
import { CartContext } from '../components/context';
import { useContext } from 'react';


export default function Header() {
  const [cart] = useContext(CartContext);
  
  return (
    <nav className='nav'>
      <Link to="/" className="nav-link">
        <img src={logo} alt="The Cream Cat" className="nav-logo" />
        The Cream Cat
      </Link>
      <Link to="/menu" className="nav-link">Menu</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
      <Link to="/cart" className="nav-cart">
        <img className="cart-icon" src={cartLogo} alt="cart" />
        <span className='nav-cart-number'>{cart.length}</span>
      </Link>
    </nav>
  );
}