import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon icon={ faCartShopping } color="#374B73"/> 
    </div>
  )
}

export default CartWidget