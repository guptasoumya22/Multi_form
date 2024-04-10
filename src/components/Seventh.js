import React from 'react';
import '../styles/seventh.css'; // Import CSS file for styling
import course from '../images/course.jpg';
function Seventh() {
  return (
    <div className="seventh-page">
      <h2>Learning paths based on your answers</h2>
      <h3>Choose One</h3>
      <div className="opt">
        <div className="optionbox">
          <div className="text">Option 1</div>
          <img src={course} alt="Option 1" className="images" />
        </div>
        <div className="optionbox">
          <div className="text">Option 2</div>
          <img src={course} alt="Option 2" className="images" />
        </div>
      </div>
    </div>
  );
}

export default Seventh;
