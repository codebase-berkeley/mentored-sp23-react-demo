import './NavBar.css';
import checkout from '../assets/checkout.png';

function NavBar(props) {
  let title = "Mentored Class Shopping <3";

  function checkoutItems() {
    // props.balance = props.cart_balance;
    alert("You broke lmao");
  }

  return (
    <div className="NavBar">
        <img className="checkout" src={checkout} alt="joe_mama" onClick={checkoutItems}></img>
        <div className="total_money" placeholder={0}>
            ${props.balance}
        </div>
        <div className="title">{title}</div>
    </div>
  );
}

export default NavBar;
