import React from "react";
import Product from '../Product/Product';

import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          {/* <Product
            id="12321341"
            title="The learn startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          /> */}
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB)- Silver (4th Generation), Dough Hook and whisk, 5 Litre Glass Bowl"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
            <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB)- Silver (4th Generation), Dough Hook and whisk, 5 Litre Glass Bowl"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung L9RG90SSUXen 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://m.media-amazon.com/images/I/61JRrtXVAvL._AC_UL480_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB)- Silver (4th Generation), Dough Hook and whisk, 5 Litre Glass Bowl"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB)- Silver (4th Generation), Dough Hook and whisk, 5 Litre Glass Bowl"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-fi, 128GB)- Silver (4th Generation), Dough Hook and whisk, 5 Litre Glass Bowl"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
