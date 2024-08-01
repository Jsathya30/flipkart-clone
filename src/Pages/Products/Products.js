import React from "react";
import "./Products.css";
import {ProductsData} from "../../ProductsData";
import ProductDetailCard from "../../components/ProductDetailCard/ProductDetailCard";
import { Link } from "react-router-dom";

const Products = () => {
    return(
        <div className="Products">
            <div className="Products-Filters">
                <p className="filter-head">Filters</p>
                <div className="category">
                    <p className="filter-CatgoryHead">Categories</p>
                    <div className="filter-Category">Mobiles</div>

                </div>
                <div className="Price">
                    <p className="PriceHead">Price</p>
                    <input type="range" name="" id="" className="PriceRange" />
                    <div className="Price-Input">
                        <input value={0} className="Price-Box" /> <p>to</p>
                        <input value={3000} className="Price-Box" />
                    </div>
                </div>
                <div className="Brand">
                    <p>Brand</p>
                </div>
            </div>
           
            <div className="Products-items">
                <p className="Totalresults">
                    Showing 1-{ProductsData.length} of {ProductsData.length} results
                </p>
                <div className="Sortby">
                   <p>Sort By</p>
                   <ul className="Sort-items">
                    <li className="Sort-item"> Relevance</li>
                    <li className="Sort-item"> Popularity</li>
                    <li className="Sort-item"> Price -- Low to High</li>
                    <li className="Sort-item"> Price -- High to Low</li>
                    <li className="Sort-item"> Newest First</li>
                   </ul>
                </div>
                <div>
                   {ProductsData.map((item,index) => (
                     <Link key={index} to={`/Productdetails/${item.id}`}>
                        <ProductDetailCard Data={item} />
                     </Link>
                   ))}
                </div>
            </div>
            
        </div>
    );
};

export default Products;