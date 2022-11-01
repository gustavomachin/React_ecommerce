import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <div>
      <FontAwesomeIcon icon={ faCartShopping } color="rgb(59,59,50)"/> 
    </div>
  )
}

export default CartWidget