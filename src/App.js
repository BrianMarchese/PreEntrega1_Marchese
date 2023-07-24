import './App.css';
import NavBar from './components/NavBar/navBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route path="/item/:itemId" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Error 404 (No se encuentra la pagina seleccionada)</h1>}/>
        <Route/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
