import { useState } from 'react';
import Card from './Card';
import '../styles/Cards.css';

function Cards() {
  const data = [232, 56, 324, 893, 23, 455, 321, 890, 789, 999, 673, 555];
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
      <main>
        <div className='score'>
          Score:{score} Best score:{bestScore}
        </div>
        <div className='cards'>
          {data.map((i) => {
            return <Card handleClick={handleClick} key={i} name={i} />;
          })}
        </div>
      </main>
    </>
  );
}

export default Cards;
