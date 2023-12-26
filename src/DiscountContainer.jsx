import DiscountItem from "./DiscountItem";

function DiscountContainer() {



    return(
        <>
        <section className="Discount">
            <h2>ON SALE!</h2>
            <div className="discountContainer">
                <DiscountItem name='product' price='49.99' Amount={1}/>
                <DiscountItem name='product' price='19.99' Amount={10}/>
                <DiscountItem name='product' price='9.99' Amount={0}/>
                <DiscountItem name='product' price='29.99' Amount={5}/>
                <DiscountItem name='product' price='5.99' Amount={20}/>
            </div>
    </section>
    </>
    )
}

export default DiscountContainer;