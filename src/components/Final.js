import React, { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import Seventh from "./Seventh";

function Final() {
  const [page, setPage] = useState(0);
  const FormTitles = [
    "Which describes you best?",
    "Which are you most interested in?",
    "",
    "What is your maths comfort level?",
    ""
  ];

  const handleNext = () => {
    setPage(page + 1);
  };

  const handleFormSubmit = () => {
    setPage(5);
    setTimeout(() => {
      setPage(6);
    }, 1500); // Navigate to the Seventh page after 5 seconds
  };

  const PageDisplay = () => {
    switch (page) {
      case 0:
        return <First onNext={handleNext} />;
      case 1:
        return <Second onNext={handleNext} />;
      case 2:
        return <Third onNext={handleNext} />;
      case 3:
        return <Fourth onNext={handleNext} />;
      case 4:
        return <Fifth onNext={handleNext} />;
      case 5:
        return <Sixth onNext={handleFormSubmit} />;
      case 6:
        return <Seventh />;
      default:
        return null;
    }
  };

  return (
    <div className="form">
       {page < 5 && (
         <div className="progressbar">
           <div
             style={{
              width:
                page === 0
                  ? "20%"
                  : page === 1
                  ? "40%"
                  : page === 2
                  ? "60%"
                  : page === 3
                  ? "80%"
                  : "100%"
            }}
          ></div>
        </div>
       )} 
      <div className="form-container">
        <div className="header">
          <h1>{FormTitles[page]}</h1>
        </div>
        <div className="body">{PageDisplay()}</div>
        <div className="footer">
          {page < 4 && (
            <button onClick={handleNext}>Continue</button>
          )}
          {page === 4 && (
            <button onClick={handleFormSubmit}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Final;

