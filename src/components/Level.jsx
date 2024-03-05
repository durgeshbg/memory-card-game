import '../styles/Level.css';

function Level({ setLevel }) {
  const changeLevel = (e) => setLevel(Number(e.target.textContent));

  return (
    <>
      <div className='msg'>Please select a level...</div>
      <div className='levels'>
        <div onClick={changeLevel} className='level'>
          1
        </div>
        <div onClick={changeLevel} className='level'>
          2
        </div>
        <div onClick={changeLevel} className='level'>
          3
        </div>
      </div>
    </>
  );
}

export default Level;
