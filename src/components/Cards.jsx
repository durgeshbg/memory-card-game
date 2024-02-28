import { useState } from 'react';
import Card from './Card';
import '../styles/Cards.css';

function Cards() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [consecSelect, setConsecSelect] = useState([]);

  // Score State
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Shuffle array
  data.sort(() => Math.random() - 0.5);

  // Updating best score
  if (score > bestScore) setBestScore(score);

  // Update score
  const handleClick = (e) => {
    const value = e.target.children.length
      ? e.target.children[0].textContent
      : e.target.textContent;
    if (consecSelect.includes(value)) {
      setScore(0);
      setConsecSelect([]);
    } else {
      setScore(score + 1);
      setConsecSelect([...consecSelect, value]);
    }
  };

  return (
    <>
      <div className='score'>
        Score:{score} Best score:{bestScore}
      </div>
      <div className='cards'>
        {data.map((i) => {
          return <Card handleClick={handleClick} key={i} name={i} />;
        })}
      </div>
    </>
  );
}

export default Cards;
