
function Product(Props) {
    
  return (
    <div className="Product col-12 col-s-8 col-m-5 col-l-4">
      <a href="" className="inner">
        <div>
          <img src={Props.url} alt="" />
          <div className="text">
            <p>{Props.name}</p>
            <p className="price">{Props.price}</p>
          </div>
        </div>
      </a>
    </div>
  );
}

export default Product;
