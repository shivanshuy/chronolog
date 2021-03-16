import React from "react";
export default function() {
return (
    <div className="blog-box-container">
    <div className="blog-heading">
      <div className="blog-text">Seiko</div>    
      <div className="blog-time-right">Japan / 1970</div>
      <div className="blog-heading-divider">
        <div className="blog-heading-divider-bar" />
        <div className="blog-heading-time-right">16/12/2019</div>
      </div>
    </div>    
    <div className="blog-box">
      <div className="blog-box-left">
        <div className="blog-box-container-text">
          <div className="blog-box-left-heading">Bit of Story</div>
          <div>This was my first Seiko watch which i baught in wearable condition along with my HMT Chinar.</div>        
        </div>
        <div className="blog-box-left-heading">Bit of History</div>
        <div>The 6600 series was a family of mechanical watch movements from Seiko in the 1960's.
          The 6602B movement was the work horse manual winder from that period(from 1968). It is a rock solid and very reliable calibre, evidenced by there being so many that are still working.</div>        
      </div>
      <div className="blog-box-devider-vertical" />
      <div className="blog-box-right">
        <div className="img-box">
          <img className="resize" src="./images/seiko-6602-1.png" />
        </div>
        <div className="img-box-devider" />
        <div className="img-box">
          <img className="resize" src="./images/seiko-6602-2.png" />
        </div>
      </div>
    </div>
  </div>  

);
}