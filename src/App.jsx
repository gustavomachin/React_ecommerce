// import logo from './logo.svg';
import './App.css';

//Importamos componentes
// import MyButton from './components/MyButton/MyButton';
import ItemListContainer from './components/ItemList/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  // const title = "Bienvenidos a la clase 4";
  
  /*CSS in JS*/
/*   const styleH3 = {backgroundColor: "darkred", color: "white"};
  let titulo = <h3 style={styleH3}>Hola Comisión #34815!</h3>; */

  return (
    <>
      <div className="App">
        <header className="App-header">
          <NavBar/>
          <ItemListContainer greeting="Bienvenidos a la tienda"/>
          {/* {titulo} */}
{/*           <img src={logo} className="App-logo" alt="logo" />
          <p>{title}</p>
          <MyButton text="Botón 1" color="darkgreen"/>
          <MyButton text="Botón 2" color="darkblue"/>
          <MyButton text="Botón 3" color="red"/> */}

          

        </header>
      </div>
    </>    
  );
}

export default App;
