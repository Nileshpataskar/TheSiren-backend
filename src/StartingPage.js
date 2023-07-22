import React, { useRef } from "react";
import "./startingpage.css";
import DownPart from "./DownPart";

const StartingPage = () => {
  const scrollTargetRef = useRef(null);

  return (
    <div className="main">
      <div className="background">
        <div className="forflex">
          {/* <span className="the41">THE </span>
          <span className="siren41">SIREN</span> */}
        
       <span className="siren41">
       <span className="the4">THE</span> SIREN
        </span> 
        </div>
        <span className="adlib">One Place To View All News</span>
      </div>
      <div className="background2">
        <DownPart scrollTargetRef={scrollTargetRef} />
      </div>

      {/* Target element to scroll to */}
      <div ref={scrollTargetRef} id="scrollTarget">
        
      </div>
    </div>
  );
};

export default StartingPage;
