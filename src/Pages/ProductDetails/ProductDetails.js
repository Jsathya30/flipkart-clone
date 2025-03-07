import React, { useEffect, useState } from "react";
import "./ProductDetails.css";
import {useParams} from "react-router-dom";
import {ProductsData} from "../../ProductsData"
import { FaShoppingCart } from "react-icons/fa";
import { AiFillStar, AiFillThunderbolt } from "react-icons/ai";
import {useDispatch} from "react-redux";
import { addCart } from "../../slices/cartSlice";


const ProductDetails = () => {

    const[data, setData] = useState({});
    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(() => {
        const product = ProductsData.find((item) => {
            return item.id.toString() === id;
        });
        setData(product);
    }, [id]);

    // console.log(data);

    const addToCart = () => {
        dispatch(addCart(data))
    };

    return(
        <div className="ProductDetails">
            <div className="ProductDetails-left">
                <div className="Otherimages">
                    <img src={data.url} alt="" className="proimg" />
                    <img src={data.url} alt="" className="proimg" />
                    <img src={data.url} alt="" className="proimg" />
                    <img src={data.url} alt="" className="proimg" />
                    <img src={data.url} alt="" className="proimg" />
                </div>
                <div className="ProductDetail-Img">
                    <img src={data.url} alt="" />
                    <div className="ProductDetail-btns">
                        <button className="ProductDetail-btn" onClick={addToCart}>
                            <FaShoppingCart /> Add to Cart
                        </button>
                        <button className="ProductDetail-btn">
                            <AiFillThunderbolt /> Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <div className="ProductDetails-right">
                <p className="ProductName"> {data.Product} </p>
                <div className="ratingsreviews">
                    <div className="stars">
                        {data.ratings} <AiFillStar />
                    </div>
                    <div className="ratings">
                        {data.reviews} Ratings & {data.ratings} Reviews
                    </div>
                </div>
                <p className="price"> ₹{data.SellingPrice} </p>
                <p className="packfee"> + ₹69 Secured Packing Fee </p>
                <p className="availableoff"> Available offers</p>
                <div className="offers">
                    <img 
                    src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" 
                    alt="" 
                    height = {20}/>
                    <div>
                    <b>Bank Offer</b>10% off up to ₹750 on Axis Bank Credit Card Txns (incl. migrated ones), Min Txn Value: ₹5,000T&C
                    </div>
                </div>
                <div className="offers">
                    <img 
                    src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" 
                    alt="" 
                    height = {20}/>
                    <div>
                    <b>Bank Offer</b>10% off up to ₹1,500 on Axis Bank Credit Card EMI Txns (incl. migrated ones), Min Txn Value: ₹5,000T&C
                    </div>
                    
                </div>
                <div className="offers">
                    <img 
                    src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" 
                    alt="" 
                    height = {20}/>
                    <div>
                    <b>Bank Offer</b>10% off up to ₹1,500 on HDFC Bank Credit Card EMI Txns, Min Txn Value: ₹5,000T&C
                    </div>
                    
                </div>
                <div className="offers">
                    <img 
                    src="https://rukminim2.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90" 
                    alt="" 
                    height = {20}/>
                    <div>
                    <b>Special Price</b>Get extra ₹6000 off (price inclusive of cashback/coupon)T&C
                    </div>
                    
                </div>
                <div className="descriptions">
                    <div className="colors">
                        <p className="color"> Color </p>
                        <div className="colorimgs">
                            <img src={data.url} alt="" />
                            <img src={data.url} alt="" />
                            <img src={data.url} alt="" />
                        </div>
                    </div>
                    <div className="highlights">
                        <p className="highlight-title"> Highlights</p>
                        <ul className="highlight">
                            <li className="highlight-item"> {data.Description} </li>
                            <li className="highlight-item"> {data.Display} </li>
                            <li className="highlight-item"> {data.Camera}  </li>
                            <li className="highlight-item"> {data.Battery}  </li>
                            <li className="highlight-item"> {data.Processor}  </li>
                        </ul>
                    </div>
                </div>
                <div className="RatingsAndReviews">
                    <p className="RatingsAndReviews-title"> Ratings & Reviews</p>
                    <div className="RatingsAndReviews-container">
                        <div className="RatingsAndReviews-stars">
                            <p className="RatingsAndReviews-reviews"> {data.ratings} <AiFillStar /> </p>
                            <p className="RatingsAndReviews-ratings"> 
                                {data.ratings} Ratings & {data.reviews} Reviews
                            </p>
                        </div>
                        <ul className="RatingsAndReviews-charts">
                            <li>
                                <p className="star"> 5 </p>
                                <div className="bar">
                                    <div className="innerbar" style={{width:"80%"}}></div>
                                </div>
                            </li>
                            <li>
                                <p className="star"> 4 </p>
                                <div className="bar">
                                    <div className="innerbar" style={{width:"50%"}}></div>
                                </div>
                            </li>
                            <li>
                                <p className="star"> 3 </p>
                                <div className="bar">
                                    <div className="innerbar" style={{width:"33.6%"}}></div>
                                </div>
                            </li>
                            <li>
                                <p className="star"> 2 </p>
                                <div className="bar">
                                    <div className="innerbar" style={{width:"29.6%"}}></div>
                                </div>
                            </li>
                            <li>
                                <p className="star"> 1 </p>
                                <div className="bar">
                                    <div className="innerbar" style={{width:"10%"}}></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;