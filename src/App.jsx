import Banner from './Banner.jsx';
import ShoppingInterface from './ShoppingInterface.jsx';
import Navbar from './Navbar.jsx';
import './css/index.css';


function App() {
  return (
    <>
      <header>
      <Navbar></Navbar>
      <Banner url="src/Images/background.webp"></Banner>
      </header>
    
      <body>
      <ShoppingInterface></ShoppingInterface>
      
      </body>
    </>
  )
}

export default App;