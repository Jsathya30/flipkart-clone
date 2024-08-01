import React, { useState } from "react";
import "./LoginModal.css";
import { RxCross2 } from "react-icons/rx";
import supabase from "../../supabase";
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";

const LoginModal = ({isOpen, setIsOpen}) => {
       const [email, setEmail] = useState("");
       const [password, setPassword] = useState("");

       const [loginType, setLoginType] = useState(true);

       const dispatch = useDispatch()

       const signup = async()=>{
         const {data, error} = await supabase.auth.signUp({
            email,
            password,
         });
         if (data.user){
            alert("Account created. Please verify your Email.");
         }
       };

       const login = async()=>{
        // console.log("calling");
         const {data, error} = await supabase.auth.signInWithPassword({
            email,
            password,
         });
        //  console.log(data,error);
        if (error){
            alert(error?.message);
            return;
        }
        dispatch(setUser(data.user));
       };

    return(
        isOpen ? (
            <div className="overlay">
                <div className="LoginModal">
                    <div className="left">
                        <div className="left-container">
                           <p className="Login-title">
                              Login
                           </p>
                           <p className="Login-des">
                              Get access to your orders, Wishlist and Recommendations
                           </p>
                        </div>
                    </div>
                    <div className="right">
                        <input 
                            type="email"
                            className="Login-input"
                            placeholder="Email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password"
                            className="Login-input"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p className="termsandcon">
                           By continuing, you agree to Flipkart's{""}
                           <span style={{color:"blue"}}> Terms of use </span> and
                           <span style={{color:"blue"}}> Privacy Policy.</span> {""}
                        </p>
                        {
                            loginType ? (
                                <button className="Login-btn" onClick={login}> Login </button>
                            ) : (
                                <button className="Login-btn" onClick={signup}> Signup </button>
                            )
                        }
                        {
                            loginType ? (
                                <p className="Login-signup" onClick={() => setLoginType(false)}>
                                     New to Flipkart? Create and account
                                </p>
                            ) : (
                                <p className="Login-signup" onClick={() => setLoginType(true)}>
                                     Already an user? Login to an account
                                </p>
                            )
                        }
                    </div>
                    <div className="close" onClick={() => setIsOpen(false)}>
                       <RxCross2 />
                    </div>
                </div>
            </div>
        ): (
        <></>
        )
    );
};

export default LoginModal;