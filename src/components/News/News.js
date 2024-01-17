import React from 'react';
import Img1 from '../News/NewsImages/Img1.jpg';
import Img2 from '../News/NewsImages/Img2.jpg';
import Img3 from '../News/NewsImages/Img3.jpg';
import Img4 from '../News/NewsImages/Img4.jpg';

import "../News/News.css";

const NewsPage = () => {
    return (
        <div className='MainNewsContainer'>
            <h1 className='news1'>Latest Real Estate News in Wilmington, NC</h1>

            <section className="article">
                <img src={Img1} alt="Downtown Development" className="article-image" />
                <div className="article-content">
                    <h2 className='news2'>New Developments in Downtown Wilmington</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
               
                </div>
            </section>

            <section className="article">
                <img src={Img2} alt="Rising Home Prices" className="article-image" />
                <div className="article-content">
                    <h2 className='news2'>Home Prices on the Rise</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
                 
                </div>
            </section>

            <section className="article">
                <img src={Img3} alt="New Suburban Communities" className="article-image" />
                <div className="article-content">
                    <h2 className='news2'>Emerging Suburban Communities</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
                
                </div>
            </section>

            <section className="article">
                <img src={Img4} alt="Luxury Real Estate Market" className="article-image" />
                <div className="article-content">
                    <h2 className='news2'>Luxury Real Estate Market Booming</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
             
                </div>
            </section>
        </div>
    );
}

export default NewsPage;
