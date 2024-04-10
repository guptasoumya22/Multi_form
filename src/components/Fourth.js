import React, { useState } from 'react';
import '../styles/fourth.css'; // Import CSS file for styling

function Fourth({ onNext }) {
  const [selectedOption, setSelectedOption] = useState('');

  // Define the options with their content
  const optionss = [
    { id: 1, text: '5 x 1/2 = ?', description: 'Arithmetic', level: 'Introductory' },
    { id: 2, text: '3x + 5 = 4', description: 'Basic Algebra', level: 'Foundational' },
    { id: 3, text: 'x = (-b ± √(b² - 4ac) )/ 2a', description: 'Intermediate Algebra', level: 'Intermediate' },
    { id: 4, text: '∫ x² dx', description: 'Calculus', level: 'Advanced' }
  ];

  // Function to handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  // Function to handle continue button click
  const handleContinue = () => {
    if (selectedOption) {
      onNext(selectedOption); // Pass the selected option to the parent component
    } else {
      alert('Please select an option.'); // Show an alert if no option is selected
    }
  };

  return (
    <div className="form-page">
      <h2>Choose the highest level you feel confident in - you can always adjust later.</h2>
      <div className="optionss">
        {optionss.map(option => (
          <div
            key={option.id}
            className={`option-box ${selectedOption === option.text ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option.text)}
          >
            <div>{option.text}</div>
            <div className="description">{option.description}</div>
            <div className="level">{option.level}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Fourth;
