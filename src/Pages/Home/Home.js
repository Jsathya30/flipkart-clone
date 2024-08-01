import React from 'react';
import "./Home.css";
import { CategoryBarData, CarouselData, BestOf } from '../../data';
import CategoryBar from '../../components/CategoryBar/CategoryBar';
import BannerCarousel from '../../components/BannerCarousel/BannerCarousel';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel';


const Home = () => {
    return(
        <div className='Home'>
            <div className='Home-CategoryContainer'>
                <div className='Home-CategoryBar'>
                   {
                    CategoryBarData.map((item,index) => (
                        <CategoryBar 
                           key={index}
                           Imgsrc={item.imageSrc}
                           CategoryName={item.category}
                        />

                    )) 
                    }
                </div>
            </div>
            <div className='Home-container'>
                <div className='Home-Carousel'>
                   <BannerCarousel data={CarouselData} />
                </div>
                <div className='Home-ProductCarousel'>
                   <ProductCarousel 
                      BgImg="https://rukminim2.flixcart.com/image/200/200/xif0q/printer/y/e/y/ecotank-l18050-epson-original-imags9x2sdewrsdj.jpeg?q=70"
                      Title="Best of Electronics"
                      Data={BestOf.Electronics}
                   />
                   <ProductCarousel 
                      BgImg="https://www.bing.com/th?id=OPAC.VsTuilJ%2bUHmsug474C474&o=5&pid=21.1&w=148&h=223&rs=1&qlt=100&dpr=1&bw=6&bc=FFFFFF"
                      Title="Beauty Kits"
                      Data={BestOf.BeautyKits}
                   />
                   <ProductCarousel 
                      BgImg="https://www.bing.com/th?id=OPAC.vXIEUvhY9yIEuA474C474&o=5&pid=21.1&w=136&h=136&rs=1&qlt=100&dpr=1&c=8&pcl=f5f5f5"
                      Title="Gifts & Toys"
                      Data={BestOf.GiftsandToys}
                   />
                   <ProductCarousel 
                      BgImg="https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/1/5/x/m-rlp-neckstand-rimeline-original-imagwg75eja3gsaz.jpeg?q=70"                     
                      Title="Best Fashion Brand"
                      Data={BestOf.FashionBrand}
                   />
                   
                </div>
            </div>
        </div>
        
    );
};

export default Home;