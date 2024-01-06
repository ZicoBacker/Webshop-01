import DiscountItem from "./DiscountItem";
import {useState, useEffect} from 'react';

function DiscountContainer() {
  useEffect(() => {
    const items = document.querySelectorAll('.discountContainer .discountItem');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');
    let active = Math.floor(items.length/2);
    
    function loadShow(){

    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex =  1;
    items[active].style.fliter = 'none';
    items[active].style.opacity = 1;
  
    for(var i = active + 1; i < items.length; i++){
      stt++;
      items[i].style.transform = `translateX(${150*(stt+0.3)}px) scale(${1 - 0.2*stt}) perspective(16px)`;
      items[i].style.fliter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for(var i = active - 1; i >= 0; i--){
      stt++;
      items[i].style.transform = `translateX(${-150*(stt+0.3)}px) scale(${1 - 0.2*stt}) perspective(16px)`;
      items[i].style.fliter = 'blur(5px)';
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    } 
  }
  loadShow();
  next.onclick = function(){
    active = active + 1 <items.length ? active + 1 : active;
    
    loadShow();
  }

  prev.onclick = function(){
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
  }
  }, []);

  return (
    <>
      <section className="Discount">
        <h2>ON SALE</h2>
        <div className="discountContainer">
          <DiscountItem name="product1" price="49.99" Amount={1} />
          <DiscountItem name="product2" price="19.99" Amount={10} />
          <DiscountItem name="product3" price="9.99" Amount={0} />
          <DiscountItem name="product4" price="29.99" Amount={5} />
          <DiscountItem name="product5" price="5.99" Amount={20} />
          <DiscountItem name="product6" price="49.99" Amount={1} />
          <DiscountItem name="product7" price="19.99" Amount={10} />
          <DiscountItem name="product8" price="9.99" Amount={0} />
          <DiscountItem name="product9" price="29.99" Amount={5} />
          <DiscountItem name="product10" price="5.99" Amount={20} />
          <DiscountItem name="product11" price="9.99" Amount={0} />
          
          <button id="next">{">"}</button>
          <button id="prev">{"<"}</button>
        </div>
      </section>
    </>
  );
}

export default DiscountContainer;
