import React from 'react';
import "../styles/third.css";
import main from "../images/yes.jpg";
function Third() {
  return (
    <div>
    <div className="container">
      <div className="lefts">
        <img src={main} alt="Main Image" />
      </div>
      <div className="right">
        <div className="info">
           <h2>You're in the right place.</h2><br></br>
          <i class="fa fa-bold" aria-hidden="true">Brilliant gets you hands-on to help improve your professional
            skills and knowledge.You'll interact with concepts and solve
            fun problems in maths,science and computer science</i>
        </div>
        
      </div>
      </div>
    </div>
  );
}

export default Third;
