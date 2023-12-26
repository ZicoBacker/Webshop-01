import Banner from './Banner.jsx';
import Navbar from './Navbar.jsx';
import DiscountContainer from './discountContainer.jsx';
import ProductContainer from './ProductContainer.jsx';
import './css/index.css';


function App() {
  return (
    <>
      <header>
      <Navbar></Navbar>
      <Banner url="src/Images/background2.jpg"></Banner>
      </header>
        
      <main>
      <DiscountContainer></DiscountContainer>
      <ProductContainer></ProductContainer>
      </main>
    </>
  )
}

export default App;