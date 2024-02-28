import Card from './Card';

function Cards() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <>
      <div className='cards'>
        {data.map((i) => {
          return <Card key={i} name={i} />;
        })}
      </div>
    </>
  );
}

export default Cards;
