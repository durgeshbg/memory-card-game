import { useEffect, useState } from 'react';
import Card from './Card';
import '../styles/Cards.css';
import Loading from './Loading';
import Level from './Level';

function Cards() {
  const [data, setData] = useState({});
  const [consecSelect, setConsecSelect] = useState([]);
  const [level, setLevel] = useState(0);
  const n = 3 * (level + 2);

  // Score State
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Fetch images
  useEffect(() => {
    if (Object.keys(data).length >= n) return;
    const i = Math.floor(Math.random() * 1000);
    fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
      .then((raw) => raw.json())
      .then((res) => {
        setData({ ...data, [res.name]: res.sprites.front_default });
      });
  }, [data, level]);

  // Update score
  const handleClick = (e) => {
    const value = e.target.classList[0];
    if (consecSelect.includes(value)) {
      setScore(0);
      setConsecSelect([]);
    } else {
      setScore(score + 1);
      setConsecSelect([...consecSelect, value]);
    }
  };
  if (score > bestScore) setBestScore(score);

  // Shuffle object
  const temp = Object.fromEntries(Object.entries(data).sort(() => Math.random() - 0.5));

  return (
    <>
      <main>
        <div className='score'>
          Score:{score} Best score:{bestScore}
        </div>
        {!level ? (
          <Level setLevel={setLevel} />
        ) : (
          <div className='cards'>
            {Object.keys(temp).length < n ? (
              <Loading />
            ) : (
              Object.keys(temp).map((name) => (
                <Card handleClick={handleClick} url={data[name]} key={name} name={name} />
              ))
            )}
          </div>
        )}
      </main>
    </>
  );
}

export default Cards;
