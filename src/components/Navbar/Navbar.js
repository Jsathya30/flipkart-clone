import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown, MdShoppingCart} from "react-icons/md";
import LoginModal from "../LoginModal/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import supabase from "../../supabase";
import { removeUser } from "../../slices/userSlice";
import { ProductsData } from "../../ProductsData";
import { MdClose } from "react-icons/md";
import { Products } from "../../data";


const Navbar = () => {

      const [isOpen, setIsOpen] = useState(false);

      const dispatch = useDispatch();

      const user = useSelector((state) => state.userData.user);
      // console.log(user);
      useEffect(() => {
        if(user){
         setIsOpen(false);
        }
      },[user]);

      const signOut = async() => {
         const {error} = await supabase.auth.signOut();
         if(!error){
            dispatch(removeUser());
         }
      }

      const [search, setSearch] = useState("");
      const [searchData, setSearchData] = useState([]);
      const [selectedItem, setSelectedItem] = useState(-1);


      const handleChange = e => {
         setSearch(e.target.value)
      }
      const handleClose =() => {
         setSearch("")
         setSearchData([])
      }
      const handleKeyDown = e => {
         if(e.key === "ArrowUp" && selectedItem > 0) {
            setSelectedItem(prev => prev -1)
         }
         else if(e.key === "ArrowDown" && selectedItem < searchData.length - 1) {
            setSelectedItem(prev => prev +1)
         }
         else if(e.key === "Enter" && selectedItem >= 0){
            window.open(searchData[selectedItem].url)
         }
      };
      
      useEffect(() => {
         if (search !== ""){
            const newFilterData = ProductsData.filter(ProductsData => {
               return ProductsData.Product.toLowerCase().includes(search.toLowerCase());
            });
            setSearchData(newFilterData)
         }else {
            setSearchData([]);
         }
      },[search]);
      

    return(
        <>
         <div className="navbar-container">
            <div className="navbar">
                <Link to={"/"}>
                   <img
                    src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
                    alt="logo"
                    className="navbar-logo"
                     
                   />
                
                </Link>
                <div className="navbar-search">
                    <input
                       type="text"
                       placeholder="Search for Products,brands and more..."
                       className="navbar-searchbox"
                       onChange={handleChange}
                       value={search}
                       onKeyDown={handleKeyDown}
                    />
                     <button className="searchbtn">
                        {
                           search === "" ? (
                              <FaSearch />
                           ) : (
                              <MdClose onClick={handleClose} />
                           )
                        }
                     </button>
                  </div>
                  <div className="Search-result">
                      {
                        searchData.slice(0,10).map((ProductsData,index) => {
                           return <Link to="./Products" key={index} className="Search-suggestion">
                              {ProductsData.name}
                           </Link>
                           // ProductsData.url
                        })
                      }
                  </div>
                  {
                     user ? (
                        <h3 onClick={signOut}>@{user?.email.slice(0,10)}</h3>
                     ) : <button className="navbar-btn" onClick={() => setIsOpen(true)}> Login</button>
                  }
                   
                   <div className="navbar-seller">
                      <h3>Become a seller</h3>
                   </div>
                   <div className="navbar-more">
                     <h3>More
                        <i className="moredown">
                           <MdOutlineKeyboardArrowDown />
                        </i>
                     
                     </h3>
                   </div>
                   <div className="navbar-cart">
                      <div className="cart-icon">
                        <MdShoppingCart />
                      </div>
                      <Link to={"/cart"} className="cart">
                        Cart
                      </Link>

                   </div>
                
                </div>
                <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}/>
            </div>
        </>
        
    );
};

export default Navbar;