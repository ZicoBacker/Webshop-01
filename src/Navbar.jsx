import "./css/index.css";

function Navbar() {
    
  return (
    <nav className="Navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#productContainer">Shop</a>
        </li>
        <li>
          <a href="#">About us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
