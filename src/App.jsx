import Cards from './components/Cards';
import './styles/Modal.css';

function App() {
  const openDialog = (e) => {
    e.target.parentElement.nextSibling.showModal();
  };
  const closeDialog = (e) => {
    e.target.parentElement.parentElement.parentElement.close(); // Sorry
  };

  return (
    <>
      <h1>Poképick</h1>
      <div className='dialog-opener'>
        <button onClick={openDialog}>Rules</button>
      </div>
      <dialog>
        <button onClick={closeDialog}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1}
            stroke='white'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
            />
          </svg>
        </button>
        <div className='rules-container'>
          <h1 className='rules-header'>Memory Card Game Rules</h1>
          <p>Here are the simple rules for the memory card game:</p>

          <ul>
            <li>
              <strong>Objective:</strong> Match all pairs of cards on the board to build
              your streak and score.
            </li>
            <li>
              <strong>Levels:</strong>
              <ul>
                <li>
                  <strong>Level 1:</strong> 9 cards
                </li>
                <li>
                  <strong>Level 2:</strong> 12 cards
                </li>
                <li>
                  <strong>Level 3:</strong> 15 cards
                </li>
              </ul>
            </li>
            <li>
              <strong>Turn:</strong>
              <ul>
                <li>Pick a card and try to remember it.</li>
                <li>The cards are shuffled after each pick.</li>
                <li>In your next turn, pick another card.</li>
                <li>If you pick the same card as before, your streak breaks.</li>
                <li>If you pick a different card, your streak increases by 1.</li>
              </ul>
            </li>
            <li>
              <strong>Winning:</strong> Keep your streak going, to increase your score.
            </li>
            <li>
              <strong>Scoring:</strong>
              <ul>
                <li>Your streak length is your score.</li>
                <li>Breaking your streak resets your score to 0.</li>
              </ul>
            </li>
          </ul>

          <p className='footer'>Good Luck and Have Fun!</p>
        </div>
      </dialog>
      <Cards />
    </>
  );
}

export default App;
