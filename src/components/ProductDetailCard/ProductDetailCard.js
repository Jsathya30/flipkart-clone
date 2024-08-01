import React from "react";
import "./ProductDetailCard.css";

const ProductDetailCard = ({Data}) => {
    return(
        <div className="ProductDetailCard">
            <div className="ProductDetailCard-Img">
                <img src={Data.url} alt=""/>
            </div>
            <div className="ProductDetailCard-details">
                <p className="ProductDetailCard-name">{Data.Product}</p>
                <div className="ratingsAndreviews">
                    <div className="stars">{Data.ratings} *</div>
                    
                    <p className="ratings">
                         {Data.ratings} Ratings & {Data.reviews} Reviews
                    </p>
                   
                </div>
                <ul className="ProductDetailCard-Productdetails">
                    <li className="ProductDetailCard-detail"> {Data.Description} </li>
                    <li className="ProductDetailCard-detail"> {Data.Display} </li>
                    <li className="ProductDetailCard-detail"> {Data.Camera} </li>
                    <li className="ProductDetailCard-detail"> {Data.Processor} </li>
                </ul>
            </div>
            <div className="ProductDetailCard-PriceandDelivery">
                <div className="pricecontainer">
                    <p className="ProductDetailCard-price">
                      ₹{Data.SellingPrice}
                    </p>
                    <img
                        src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/fa_62673a.png"
                        height={21}
                        alt="" 
                    />
                </div>
                <p className="freedel"> Free delivery</p>
                <p className="discount"> {Data.Discount} </p>
            </div>
        </div>
    );
};

export default ProductDetailCard;