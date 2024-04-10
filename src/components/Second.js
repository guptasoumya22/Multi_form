// StepPage.jsx
import React, { useState } from 'react';
import '../styles/second.css'; // Import CSS file for styling

function StepPage({ onNext }) {
  const [selectedOption, setSelectedOption] = useState('');

  // Define the options with their content and icons
  const options = [
    { id: 1, text: 'Learning specific skills to advance my career', icon: '👩‍🎓' },
    { id: 2, text: 'Exploring new topics I am imterested in', icon: '👨‍🏫' },
    { id: 3, text: 'Refreshing my maths foundations', icon: '💼' },
    { id: 4, text: 'Exercising my brain to stay sharp',  icon: '📚' },
    { id: 5, text: 'Something else', icon: '📚' },
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
    <div className="step-page">
      <h2>Choose just one.This will help you get started.</h2>
      <div className="options">
        {options.map(option => (
          <div
            key={option.id}
            className={`option-boxs ${selectedOption === option.text ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option.text)}
          >
            <div className="details_second">
              <span className="icon_second">{option.icon}</span>
              <span className="text_second">{option.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepPage;
