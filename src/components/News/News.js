import React from 'react';
import "../News/News.css";

const NewsPage = () => {
    return (
        <div className='MainNewsContainer'>
            <h1>Latest Real Estate News in Wilmington, NC</h1>

            <section className="article">
                <img src="" alt="Downtown Development" className="article-image" />
                <div className="article-content">
                    <h2>New Developments in Downtown Wilmington</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
                    <p><a href="#">Read more</a></p>
                </div>
            </section>

            <section className="article">
                <img src="" alt="Rising Home Prices" className="article-image" />
                <div className="article-content">
                    <h2>Home Prices on the Rise</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
                    <p><a href="#">Read more</a></p>
                </div>
            </section>

            <section className="article">
                <img src="" alt="New Suburban Communities" className="article-image" />
                <div className="article-content">
                    <h2>Emerging Suburban Communities</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
                    <p><a href="#">Read more</a></p>
                </div>
            </section>

            <section className="article">
                <img src="" alt="Luxury Real Estate Market" className="article-image" />
                <div className="article-content">
                    <h2>Luxury Real Estate Market Booming</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt justo eu mauris faucibus, a congue libero auctor.</p>
                    <p><a href="#">Read more</a></p>
                </div>
            </section>
        </div>
    );
}

export default NewsPage;
