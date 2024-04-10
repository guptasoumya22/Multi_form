import React from 'react';
import "../styles/fifth.css";
import main from "../images/mic.jpg";
import small from "../images/star.jpg";
function Fifth() {
  return (
    <div>
    <div className="container">
      <div className="left">
        <img src={main} alt="Main Image" />
      </div>
      <div className="right">
        <div className="info">
           <h2>You're on your way</h2>
          <img src={small} alt="Small Image" />
          <i class="fa fa-bold" aria-hidden="true">Through its engaging and well structured courses,brilliant has taught me
             mathematical concepts that i previously struggled to understand.I now feel
             confident approaching both technical job interviews and real world problem
             solving situations.</i>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Fifth;
