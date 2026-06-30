import cart from '/assets/cart.svg';

export default function IceCream(props) {
  return (
    <div className='ice-cream'>
      <img src={props.image} alt={props.name} />
      <h3>{props.name}</h3>
      <h4>{props.description}</h4>
      <div className='buy'>
        <p className='price'>${props.price}</p>

        <button className='cart-button'>
          <img className='cart-icon' src={cart} alt='cart' />
        </button>
      </div>
    </div>
  );
}
