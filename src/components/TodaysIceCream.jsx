import cart from '/assets/cart.svg';

export default function TodaysIceCream(props) {
  return (
    <div className='todays-ice-cream'>
      <h1>Ice Cream of the Day!</h1>

      <div className='todays-content'>
        <img
          className='todays-ice-cream-img'
          src={props.image}
          alt={props.name}
        />

        <div className='todays-info'>
          <h3>{props.name}</h3>
          <h4>{props.description}</h4>

          <div className='buy'>
            <p className='price'>${props.price}</p>

            <button className='cart-button'>
              <img className='cart-icon' src={cart} alt='cart' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}