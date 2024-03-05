function Card({ name, handleClick, url }) {
  return (
    <div className={name + ' card'} onClick={handleClick}>
      <img className={name + ' image'} src={url} alt={name} />
      <div className={name + ' name'}>{name.toUpperCase()}</div>
    </div>
  );
}

export default Card;
