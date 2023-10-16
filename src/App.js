import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
  padding: 20px;
  border: 2px solid #3498db;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    padding: 40px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

const TextArea = styled.textarea`
  width: 80%;
  height: 200px;
  margin-bottom: 20px;
  border-radius: 10px;
  @media (min-width: 768px) {
    width: 60%;
  }
  &:not(:focus) {
    background: transparent; /* Remove background color when not focused */
  }
  
  &:focus {
    background: #FFFFE0; /* Highlight background color when focused */
  }
`;

const TextInfo = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

const OutputArea = styled.textarea`
  width: 80%;
  height: 200px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 60%;
  }
`;

const TextManipulationDropdown = styled.select`
  width: 200px;
  padding: 5px;
  font-size: 16px;

  @media (min-width: 768px) {
    width: 240px;
  }
`;

const ApplyButton = styled.button`
  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    background-color: #2677af;
  }
`;



const App = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [operation, setOperation] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
  };

  const manipulateText = () => {
    switch (operation) {
      case 'capitalize':
        const capitalizedText = inputText.replace(/(^|\. |! |\? )(\w)/g, (match) => match.toUpperCase());
        setOutputText(capitalizedText);
        break;
      case 'uppercase':
        setOutputText(inputText.toUpperCase());
        break;
      case 'lowercase':
        setOutputText(inputText.toLowerCase());
        break;
      default:
        setOutputText(inputText);
    }
  };

  const wordCount = inputText.split(/\s+/).filter(Boolean).length;
  const sentenceCount = inputText.split(/[.!?]/).length - 1;
  const paragraphCount = inputText.split('\n\n').filter(Boolean).length;
  return (
    <Container>
      <Title>Text Manipulation Tool</Title>
      <TextArea
        placeholder="Enter text here"
        value={inputText}
        onChange={handleInputChange}
      />
      <TextInfo>
        Character Count: {inputText.length} | Word Count: {wordCount} | Sentence Count: {sentenceCount} | Paragraph Count: {paragraphCount}
      </TextInfo>
      <TextManipulationDropdown value={operation} onChange={handleOperationChange}>
        <option value="">Select Operation</option>
        <option value="capitalize">Capitalise</option>
        <option value="uppercase">Uppercase</option>
        <option value="lowercase">Lowercase</option>
      </TextManipulationDropdown>
      <ApplyButton onClick={manipulateText}>Apply</ApplyButton>
      <OutputArea value={outputText} 
      readOnly 
      
      />
    </Container>
  );
};

export default App;
