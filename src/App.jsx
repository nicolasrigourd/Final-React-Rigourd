
import './App.css'
import Navbar from './Components/NavBar'
import ItemList from './Components/ItemLIst'
import Footer from './Components/Footer'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <ItemList title={"Listado de Productos"}></ItemList>
      <Footer></Footer>
    </>
 )
}

export default App
