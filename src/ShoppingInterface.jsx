import ShoppingItem from './ShoppingItem.jsx'


function ShoppingInterface() {



    return(
        <>
        <section className="shop">
    <ShoppingItem name='Panties' price='49.99' Amount={1}/>
    <ShoppingItem name='Leggings' price='19.99' Amount={10}/>
    <ShoppingItem name='Thights' price='9.99' Amount={0}/>
    <ShoppingItem name='Fishnets' price='29.99' Amount={5}/>
    <ShoppingItem name='Socks' price='5.99' Amount={20}/>
    </section>
    </>
    )
}

export default ShoppingInterface;