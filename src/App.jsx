import Banner from './Banner.jsx';
import ShoppingInterface from './ShoppingInterface.jsx';
import Navbar from './Navbar.jsx';
import './css/index.css';


function App() {
  return (
    <>
      <header>
      <Navbar></Navbar>
      <Banner url="src/Images/background2.jpg"></Banner>
      </header>
        
      <main>
      <ShoppingInterface></ShoppingInterface>
      
      </main>
    </>
  )
}

export default App;