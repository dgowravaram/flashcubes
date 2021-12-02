import React, { useState } from 'react';
import FlashcardList from './FlashcardList';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
  return (
    <FlashcardList flashcards={flashcards} />
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2+4?',
    answer: '4',
    options: [
      '2',
      '3',
      '4',
      '5'
    ],
    thirdSide: 'third'
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    options: [
      'Answer2',
      'Answer3',
      'Answer4',
      'Answer5'
    ],
    thirdSide: 'third'
  },
  {
    id: 3,
    question: 'Question 3?',
    answer: 'Answer',
    options: [
      'Answer2',
      'Answer3',
      'Answer4',
      'Answer5'
    ],
    thirdSide: 'third',
    fourthSide: 'fourth',
    fifthSide: 'fifth',
    sixthSide: 'sixth'
  }
]

export default App;
