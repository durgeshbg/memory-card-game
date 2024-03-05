import '../styles/Loading.css';

function Loading() {
  return (
    <>
      <div className='loading'>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'>
          <rect width='30' height='30' x='25' y='50'>
            <animate
              attributeName='y'
              calcMode='spline'
              dur='2'
              values='50;120;50;'
              keySplines='.5 0 .5 1;.5 0 .5 1'
              repeatCount='indefinite'
              begin='-.4'
            ></animate>
          </rect>
          <rect width='30' height='30' x='85' y='50'>
            <animate
              attributeName='y'
              calcMode='spline'
              dur='2'
              values='50;120;50;'
              keySplines='.5 0 .5 1;.5 0 .5 1'
              repeatCount='indefinite'
              begin='-.2'
            ></animate>
          </rect>
          <rect width='30' height='30' x='145' y='50'>
            <animate
              attributeName='y'
              calcMode='spline'
              dur='2'
              values='50;120;50;'
              keySplines='.5 0 .5 1;.5 0 .5 1'
              repeatCount='indefinite'
              begin='0'
            ></animate>
          </rect>
        </svg>
      </div>
    </>
  );
}

export default Loading;
