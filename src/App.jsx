import './App.css'
import Navbar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <>
     <Navbar />
     <ItemListContainer text="Este es el texto que quiero renderizar como prop, mi ItemListContainer."/>
    </>
  )
}

export default App
