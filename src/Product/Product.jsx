import React from "react";
import './Product.css';
import scfi from '../assets/combo.jpeg';
import fan from '../assets/skin.jpeg';
import com from '../assets/hair.jpeg';
import rom from '../assets/mom.jpeg';
import cla from '../assets/fragrance.jpeg';
import thr from '../assets/personal.jpeg';
import sun from '../assets/ayurveda.jpeg';
import co from '../assets/men.jpeg';
const Product = () =>{
    return(
      <div className="bd">
      <div className="gh">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <h1>Product-Categories</h1>
      </div>
        <div class="cards-list">
<div class="card 1">
  <div class="card_image">
    <img src={scfi}></img>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <div class="card_title title-white">
    <p><a href="https://www.amazon.in/">Makeup</a></p>
  </div>
</div>
  <div class="card 2">
  <div class="card_image">
    <img src={fan}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-white">
    <p>Skin</p>
  </div>
</div>

<div class="card 3">
  <div class="card_image">
    <img src={com}/>
  </div>
  <br/>
  <br/>
  <br/>
  <br/>
  <div class="card_title title-white">
    <p>Hair</p>
  </div>
</div>
  
  <div class="card 4">
  <div class="card_image">
    <img src={thr}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>SelfCare</p>
  </div>
  </div>
  <div class="card 5">
  <div class="card_image">
    <img src={rom}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Mom&Baby</p>
  </div>
  </div>
  <div class="card 6">
  <div class="card_image">
    <img src={cla}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Fragrance</p>
  </div>
  </div>
  <div class="card 7">
  <div class="card_image">
    <img src={sun}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Ayurveda</p>
  </div>
  </div>
  <div class="card 8">
  <div class="card_image">
    <img src={co}/>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
  <div class="card_title title-black">
    <p>Men's Care</p>
  </div>
  </div>
</div>
</div>
    )
}
export default Product;
