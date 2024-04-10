// StepPage.jsx
import React, { useState } from 'react';
import '../styles/first.css'; // Import CSS file for styling

function First({ onNext }) {
  const [selectedOption, setSelectedOption] = useState('');

  // Define the options with their content and icons
  const options = [
    { id: 1, text: 'Student', description: 'or soon to be enrolled', icon: '👩‍🎓' },
    { id: 2, text: 'Professional', description: 'pusuing a career', icon: '👨‍🏫' },
    { id: 3, text: 'Parent', description: 'of a school-age child', icon: '💼' },
    { id: 4, text: 'Lifelong Learner', description: '', icon: '📚' },
    { id: 5, text: 'Teacher', description: '', icon: '📚' },
    { id: 6, text: 'Other', description: '', icon: '📚' }
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
      <h2>This will help you personalize your experience</h2>
      <div className="options">
        {options.map(option => (
          <div
            key={option.id}
            className={`option-boxs ${selectedOption === option.text ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option.text)}
          >
            <div className="details_first">
              <span className="icon_first">{option.icon}</span>
              <span className="text_first">{option.text}</span>
              <span className="description">{option.description}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default First;
