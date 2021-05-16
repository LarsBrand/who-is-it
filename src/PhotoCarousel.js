import React from 'react'
import Photobox from './Photobox';
import { StateContext } from './StateContext';

function PhotoCarousel() {
  const {goNext, goPrevious, runningAnimation, index, nextIndex, previousIndex, images} = React.useContext(StateContext);

  return (
    <>
    <div className="controls">
      <div className="prev-btn" onClick={goPrevious} ></div>
      <div className="next-btn" onClick={goNext}></div>
    </div>
    <div className="container">
      <Photobox className={`previous ${runningAnimation==="previous"? 'go-to-active':''}`} url={images[previousIndex].url}/>
      <Photobox className={`current ${!!runningAnimation? 'go-to-'+runningAnimation : ''}`} url={images[index].url} active={true}/>
      <Photobox className={`next ${runningAnimation==="next"? 'go-to-active':''}`} url={images[nextIndex].url}/>
      </div>
    </>
  );
}

export default PhotoCarousel;