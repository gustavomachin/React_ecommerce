//rfce: componente funcional de react
import Item from "./Item";
import "./itemlist.css"

function ItemListContainer(props) {
  return (
    <div>
        {/* prop de bienvenida */}
        <h1>{props.greeting}</h1>
        <div className="cards">
          <Item 
              //ruta absoluta web
              imgurl="/imgs/dulceFrutosRojos.webp" 
              title="Mermelada de Frutos del Bosque" 
              price={1000}
          />
          <Item
              //imagen local
              imgurl="/imgs/dulceFrambuesa.webp" 
              title="Mermelada de Frambuesa" 
              price={900}
          />
          <Item
              imgurl="/imgs/almendras1.webp" 
              title="Almendras Non Pareil por kg." 
              price={1800}
          />
        </div>
    </div>
  )
}

export default ItemListContainer