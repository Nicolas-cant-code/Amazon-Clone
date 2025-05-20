import React from "react";
// import { Link } from "react-router-dom";
import "./Products.css";
import Product from "./Product";
import ProductDeals from "./ProductDeals";
import Categories from "./Categories";

const Products = () => {
  return (
    <>
      <div className="products_row">
        <Product
          id="1"
          title="Shop Books"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Books_CC0.5x._SY304_CB546927798_.jpg"
          anchor="Shop now"
          price={3700}
          rating={4}
        />
        <Product
          id="2"
          title="Shop Electronics"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/Electronics_CC0.5x._SY304_CB546927220_.jpg"
          anchor="Discover more"
          price={4200}
          rating={5}
        />
        <Product
          id="3"
          title="Shop Personal Care"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Personal_care_CC0.5x._SY304_CB546915412_.jpg"
          anchor="Discover more"
          price={1500}
          rating={4}
        />
        <Product
          id="4"
          title="Shop Beauty Essentials"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/Beauty_cc0.5x._SY304_CB546930076_.jpg"
          anchor="Discover More"
          price={1000}
          rating={3}
        />
        <Product
          id="5"
          title="50% off Polaroid Airpad Speaker"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/BTS25-final/Category-cards/Desktop/polaroid_cat_card0.5x._SY304_CB545598590_.jpg"
          anchor="Shop now"
          price={6420}
          rating={4}
        />
        <Product
          id="6"
          title="Shop Mzansi"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/2_Shop_Mzansi_DT_Cat_Card_low_res._SY304_CB546926871_.jpg"
          anchor="Discover more"
          price={890}
          rating={5}
        />
        <Product
          id="7"
          title="Shop Personal Care"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/BuzzDeals/Personal_care_CC0.5x._SY304_CB545641780_.jpg"
          anchor="Shop now"
          price={5000}
          rating={2}
        />
        <Product
          id="8"
          title="Shop Hair Care"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/WomensDay/Herobanners/Hair_Care_CC_-_DT_-_Low_RES._SY304_CB566462616_.jpg"
          anchor="Discover More"
          price={2500}
          rating={3}
        />
      </div>
      <div className="one_item">
        <div className=" right_arrow_styles">
          <div className="right_arrow">
            <i></i>
          </div>
        </div>

        <h1>Today's deals</h1>

        <div className="items">
          <ProductDeals
            id="9"
            image="https://m.media-amazon.com/images/I/413mPtvmotL._SR480,440_.jpg"
            percent="15% off"
            deal="Limited time deal"
            price="R2,599"
            name="Packard Bell Montenero-C Intel Celero..."
          />
          <ProductDeals
            id="10"
            image="	https://m.media-amazon.com/images/I/31bL2Z6OWEL._SR480,440_.jpg"
            percent="15% off"
            deal="Limited time deal"
            price="R2,599"
            name="Samsung A05s 128GB DS Black"
          />
          <ProductDeals
            id="11"
            image="https://m.media-amazon.com/images/I/41d7RgpZZ7L._SR480,440_.jpg"
            percent="23% off"
            deal="Limited time deal"
            price="R2,324"
            name="Acer Aspire Lite i3 N300 8GB 512GB..."
          />
          <ProductDeals
            id="12"
            image="https://m.media-amazon.com/images/I/41blYip6w6L._SR480,440_.jpg"
            percent="15% off"
            deal="18% off Limited time deal"
            price="R6,599"
            name="Kärcher WD 3 V-17/4/20 wet and dry..."
          />
          <ProductDeals
            id="13"
            image="https://m.media-amazon.com/images/I/31uj+97bDaL._SR480,440_.jpg"
            percent="30% off"
            deal="Limited time deal"
            price="R1,399"
            name="Smeg All Hobs Non-Stick Frying Pan,..."
          />
          <ProductDeals
            id="14"
            image="https://m.media-amazon.com/images/I/312LjhABKdL._SR480,440_.jpg"
            percent="38% off"
            deal="Limited time deal"
            price="R1,399"
            name="Mitzuma Premium Indoor Table T"
          />
        </div>
      </div>

      <div className="categories">
        <div className=" right_arrow_styles">
          <div className="right_arrow">
            <i></i>
          </div>
        </div>

        <h1>Shop our Categories</h1>
        <div className="items">
          <Categories
            id="15"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Toydays_dealsbubble_shove_1._CB546958766_.jpg"
          />
          <Categories
            id="16"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Booksbubble_shove_1._CB546958766_.jpg"
          />
          <Categories
            id="17"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Electronicsbubble_shove_1._CB546958766_.jpg"
          />
          <Categories
            id="18"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Jewellerybubble_shove_1._CB546958766_.jpg"
          />
          <Categories
            id="19"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Toys_and_Ganmesbubble_shove_1._CB546958766_.jpg"
          />
          <Categories
            id="20"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Babybubble_shove_1._CB546958766_.jpg"
          />
          <Categories
            id="21"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Beautybubble_shove_1._CB546958766_.jpg"
          />
        </div>
      </div>

      <div className="products_row">
        <Product
          id="22"
          title="Discover Toys for all ages"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/CategoryCard/379x304/Toys/ZA_GW_Toys_CC_Hi_Res_379x304._SY304_CB538872799_.jpg"
          anchor="Shop now"
          price={500}
        />
        <Product
          id="23"
          title="Shop Home Improvement"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/Homepage/Home_Improvement_CC_low_res._SY304_CB549071740_.jpg"
          anchor="Discover more"
          price={500}
        />
        <Product
          id="24"
          title="Home and Kitchen"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/EasterCampaign/Where_will_the_H_take_you_CC0.5x._SY304_CB545635418_.jpg"
          anchor="Discover more"
          price={500}
        />
        <Product
          id="25"
          title="Shop Toys & Games"
          image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2025/EasterCampaign/Toysxee_50.5x._SY304_CB545631624_.jpg"
          anchor="Discover More"
          price={500}
        />
      </div>

      <div className="categories">
        <div className=" right_arrow_styles">
          <div className="right_arrow">
            <i></i>
          </div>
        </div>

        <h1>Shop our Categories</h1>
        <div className="items">
          <Categories
            id="26"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/Belkin_200x200_7._CB541894929_.png"
          />
          <Categories
            id="27"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/Instant_3._CB541939140_.png"
          />
          <Categories
            id="28"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/Lego_200x200_8._CB549498435_.png"
          />
          <Categories
            id="29"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2023/Launch/XCM_CUTTLE_1400643_2124058_ZA_CUTTLE_200x200_1X_en_SG._CB556530865_.jpg"
          />
          <Categories
            id="30"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/asus_33._CB541894929_.png"
          />
          <Categories
            id="31"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/Homepage2024/einhell_1._CB541894929_.png"
          />
          <Categories
            id="32"
            image="https://images-eu.ssl-images-amazon.com/images/G/53/RBSxFELA/2023/Launch/Tommmie_Tippse._CB549808994_.png"
          />
        </div>
      </div>
    </>
  );
};

export default Products;
