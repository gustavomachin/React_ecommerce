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
              imgurl="https://http2.mlstatic.com/D_NQ_NP_831858-MLA48044614602_102021-W.webp" 
              title="Remera X" 
              price={100}
              color="purple"
          />
          <Item
              //imagen local
              imgurl="/imgs/remera1.webp" 
              title="Remera Y" 
              price={200}
              color="red"
          />
          <Item
              imgurl="https://http2.mlstatic.com/D_NQ_NP_705326-MLA49735701383_042022-W.webp" 
              title="Zapatillas X" 
              price={400}
              color="blue"
          />
        </div>
    </div>
  )
}

export default ItemListContainer