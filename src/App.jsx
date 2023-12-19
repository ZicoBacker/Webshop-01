import Banner from './Banner.jsx';
import ShoppingInterface from './ShoppingInterface.jsx';
import Navbar from './Navbar.jsx';
import './css/index.css'


function App() {
  return (
    <>
    <Navbar></Navbar>
    <Banner url="src/Images/background.webp"></Banner>


    <ShoppingInterface></ShoppingInterface>
    </>
  )
}

export default App;