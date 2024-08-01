import React from "react";
import "./CategoryBar.css";

const CategoryBar = ({ Imgsrc, CategoryName }) => {
    return(
        <div className="CategoryBar">
            <div className="CategoryBar-Img">
                <img src = {Imgsrc} alt="CategoryImg" />
            </div>
            <p className="CategoryBar-name"> {CategoryName} </p>

        </div>
    );
};
export default CategoryBar;