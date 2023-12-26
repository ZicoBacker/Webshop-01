

function Product(Props) {

    return(
        <div className="Product">
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
    )
}

export default Product;