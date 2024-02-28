function Card({ name, handleClick }) {
  return (
    <div onClick={handleClick} className='card'>
      <p>{name.toString()}</p>
    </div>
  );
}

export default Card;
