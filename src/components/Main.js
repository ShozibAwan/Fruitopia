import React from "react";
function Main(){
    return(
        <div className="banner">
            <div className="left-column">
                <div className="search-box">
                    <img src="/images/search.png"/>  
                    <input type="text"></input>
                 </div>
                 <h1>Straw<span>berries</span></h1>
                 <h3>Always fills your heart with joy</h3>
                 <p>
                    The standard chunk of Lorem Ipsum used since the
                    1500s is reproduced for those interested.<br/> Duis 
                    erat ex, pretium at blandit nec, dictum sit amet
                    metus. 
                 </p>
                 <div className="btn">
                    <button type="button" className="primary-btn">Learn More</button>
                    <button type="button">Watch Video</button>
                 </div>
                 <div className="social-icons">
                    <img src="/images/twitter.png"/>
                    <img src="/images/instagram.png"/>
                    <img src="/images/pinterest.png"/>
                    <img src="/images/facebook.png"/>
                 </div>
            </div>
            <div className="right-column">
                <img src="/images/feature.png"/>
            </div>
        </div>
    );
}
export default Main