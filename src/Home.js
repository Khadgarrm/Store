import React, { useState } from "react";
import Checkout from "./Checkout";
import "./Home.css";
import Product from "./Product";


const Home = () => {
  const [drawer, setDrawer] = useState(false);

  return (
    <div className="home">
      <div className="home__container">
      <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          className="home__image"
        />
        <div className="home__row">
          <Product
            id="12849"
            title=""
            price={20.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/41wBo8-XN7L._AC_SX184_.jpg`}
            rating={3}
          />
          <Product
            id="3534345"
            title=""
            price={12.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/41HbeJH0GtL._AC_SX184_.jpg`}
            rating={5}
          />
         
          
        </div>

        <div className="home__row">
          <Product
            id="24242"
            title=""
            price={16.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/51Hj-Lfw+0S._AC_SX184_.jpg`}
            rating={2}
          />
          <Product
            id="23553647"
            title=""
            price={22.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/41DlLS+7DJS._AC_SX184_.jpg`}
            rating={5}
          />
         
        </div>
        <div className="home__row">
          <Product
            id="4839274"
            title=""
            price={14.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/41uORm5aOQS._AC_SX184_.jpg`}
            rating={4}
          />
           <Product
            id="359473"
            title=""
            price={10.99}
            image={`https://images-na.ssl-images-amazon.com/images/I/51guckcmxlL._AC_SX184_.jpg`}
            rating={1}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
