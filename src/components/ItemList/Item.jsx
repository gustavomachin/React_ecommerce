
import "./item.css"
import MyButton from "../MyButton/MyButton"

function Item(props) {
  return (
    <div className="card">
        <div className="card-img">
            <img src={props.imgurl} alt={props.title}/>
        </div>
        <div className="card-detail">
            <h3>{props.title}</h3>
            <p>${props.price}</p>
        </div>
        <MyButton text="Ver más" color={props.color}/> 
        {/* ahí podría ir color={"un color"} */}
        {/* <MyButton color="red">Ver más</MyButton> */}
    </div>
  );
}

export default Item