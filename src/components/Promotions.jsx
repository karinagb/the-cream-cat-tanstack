import cart from '/assets/cart.svg';

export default function Promotions(props) {
  const promoPrice = (props.price * 0.75).toFixed(2);

  return (
    <div className='promo-content'>
      <div className='promo-info'>
        <h1>Promotions of the month!</h1>
        <h3>{props.name}</h3>

        <div className='promo-buy'>
          <p className='promo-price'>${promoPrice}</p>
          <button className='cart-button'>
            <img className='cart-icon' src={cart} alt='cart' />
          </button>
        </div>

      </div>

      <img className='promo-ice-cream-img' src={props.image} alt={props.name} />
    </div>
  );
}
