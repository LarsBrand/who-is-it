import React from 'react'
import Config from './Config';
import Photobox from './Photobox';
import { StateContext } from './StateContext';

function PhotoCarousel() {
  const {goNext, goPrevious, runningAnimation, index, nextIndex, previousIndex, images, isEditMode, setImages} = React.useContext(StateContext);

  const setTranslate = React.useCallback(({x, y})=>{
    const newImages = [...images]
    newImages[index].closed = newImages[index].closed || {}
    newImages[index].closed.imageTranslateX = x || 0
    newImages[index].closed.imageTranslateY = y || 0
    setImages(newImages)
  },[index, setImages, images])

  const setScale =  React.useCallback((newScale)=>{
    const newImages = [...images]
    newImages[index].closed = newImages[index].closed || {}
    newImages[index].closed.imageZoom = newScale || 1
    setImages(newImages)
  },[index, setImages, images])

  return (
    <>
    <div className="container">
      {!isEditMode && <Photobox className={`previous ${runningAnimation==="previous"? 'go-to-active':''}`} url={images[previousIndex].url}
        translateX={images[previousIndex].closed?.imageTranslateX}  
        translateY={images[previousIndex].closed?.imageTranslateY} 
        boxHeight={images[previousIndex].closed?.boxHeight}
        boxWidth={images[previousIndex].closed?.boxWidth}
        scale={images[previousIndex].closed?.imageZoom}/>}
      <Photobox className={`current ${!!runningAnimation? 'go-to-'+runningAnimation : ''}`} 
        key={index}
        url={images[index].url} 
        translateX={images[index].closed?.imageTranslateX}  
        translateY={images[index].closed?.imageTranslateY} 
        boxHeight={images[index].closed?.boxHeight}
        boxWidth={images[index].closed?.boxWidth}
        scale={images[index].closed?.imageZoom}
        name={images[index].open?.name}
        setTranslate={setTranslate}
        setScale={setScale}
        active={true}/>
      {!isEditMode && <Photobox className={`next ${runningAnimation==="next"? 'go-to-active':''}`} url={images[nextIndex].url}       
        translateX={images[nextIndex].closed?.imageTranslateX}  
        translateY={images[nextIndex].closed?.imageTranslateY} 
        boxHeight={images[nextIndex].closed?.boxHeight}
        boxWidth={images[nextIndex].closed?.boxWidth}
        scale={images[nextIndex].closed?.imageZoom}/>}
    </div>
    <div className={`controls ${isEditMode? 'edit':''}`}>
      <div className="prev-btn" onClick={goPrevious} ></div>
      <Config/>
      <div className="next-btn" onClick={goNext}></div>
    </div>
    </>
  );
}

export default PhotoCarousel;