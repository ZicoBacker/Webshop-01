import "./css/index.css";

function Banner(Props) {

  return (
    <>
      <div id="banner">
        <img src={Props.url} alt="" />
        <div className="text">
          <h1>SuperWebshop</h1>
          <p>
            The superwebshop where you can buy all the prodcuts you might want!
          </p>
        </div>
      </div>
    </>
  );
}

export default Banner;
