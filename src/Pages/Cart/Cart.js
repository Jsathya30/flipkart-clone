import React, { useState } from 'react';
import "./Cart.css";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from '../../slices/cartSlice';

const Cart = () => {
    const [active, setActive] = useState(1);

    const dispatch = useDispatch();

    const cartItems = useSelector((state) => state.cartData.cart);
    const user = useSelector((state) => state.userData.user);

    // console.log(cartItems);
    const removeFromCart = (id) => {
        dispatch(removeCart(id))
    };
       
    return(
        <div className='Cart'>
            <div className='Cart-tabs'>
                <p
                  className={`flipkart ${active === 0 ? "active" : ""}`}
                  onClick = {() => setActive(0)}
                > 
                Flipkart
                </p>
                <p
                  className={`grocery ${active === 1 ? "active" : ""}`}
                  onClick={() => setActive(1)}
                >
                    Grocery
                </p>
            </div>
            {
                user ? (
                    <div className='Cart-items'>
                        <div className='Cart-container'>
                            {
                                cartItems.map((cart,index) => (
                                    <div key={index} className='Cart-item'>
                                        <div className="Cart-item-left">
                                            <img src={cart?.url} alt='' />
                                        </div>
                                        <div className='Cart-item-right'>
                                            <h3> {cart.Product} </h3>
                                            <p> {cart.Display}, {cart.Description} </p>
                                            <p> ₹{cart.Sellingprice} </p>
                                            <button
                                                className='Cart-item-button'
                                                onClick={() => removeFromCart(cart.id)}
                                            >
                                                Remove From Cart
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                ) : (
                    <div className="Cart-items">
                       <div className="CartitemsNull">
                           <img
                              src="https://static.vecteezy.com/system/resources/previews/005/073/073/non_2x/no-item-in-the-shopping-cart-add-product-click-to-shop-now-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
                              alt=""
                              className="CartitemsNull-img" 
                           />
                           <p className='CartitemsNull-title'>Missing Cart items? </p>
                           <p className='CartitemsNull-des'>
                              Login to see the items you added previously
                           </p>
                           <button className='CartitemsNull-btn'>Login</button>
                       </div>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;