import React from "react";
import "./BannerCarousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerCarousel = ({data}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    return(
        <div className="BannerCarousel">
            <Slider {...settings}>
               {data.map((item) =>(
                <div key={item.id}>
                   <img src={item.Imgsrc} alt="" className="BannerCarousel-image" />
                </div>
               ))}
            </Slider>

        </div>
    );
};

export default BannerCarousel;