import './css/index.css'
function Banner(Props) {


    return(
        <>
        <section id="banner">
            <img src={Props.url} alt="" />

            <div className="text">
                <h1>SuperWebshop</h1>
                <p>The superwebshop where you can sell all the lingerie you might want!</p>
            </div>
        </section>
        </>
    )
}

export default Banner;