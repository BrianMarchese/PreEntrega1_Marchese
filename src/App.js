import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
function App() {
  return (
    <div className="App">
      <NavBar/>

      <ItemListContainer bienvenida={"Bienvenido a la barrica, la tienda mas grandes de bebidas."}/>

    </div>
  );
}

export default App;
