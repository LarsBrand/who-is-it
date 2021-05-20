import React from 'react'
import DragMove from './DragMove';
import { StateContext } from './StateContext';

function Photobox(props) {  
  const {isOpen, toggleIsOpen, isEditMode}= React.useContext(StateContext)
  const isSmall= !props.active || !isOpen
 
  const handleDragMove = (e) => {
    props.setTranslate({
      x: props.translateX + e.movementX,
      y: props.translateY + e.movementY
    });
  };

    
  const handleScroll = (e) => {     
    props.setScale(props.scale + (e.deltaY/10000));
  };

  return (
    <div className={`photobox ${props.className || ''}`} onClick={!isEditMode && toggleIsOpen}>
      <div className={`zoomer ${isSmall?'small':''} ${!!isEditMode?'edit':''} `}>
        {!!isEditMode ? <> 
          <DragMove onDragMove={handleDragMove} onWheel={handleScroll} className='dragger'>
          <img src={props.url} alt='guess who'
           style={{
            transform: `translateX(${props.translateX}px) translateY(${props.translateY}px) scale(${props.scale})`
          }}
          />
        </DragMove>
        <div className='edit-highlight' /> 
        </> : <img src={props.url} alt='guess who'
        style={{
         transform: `translateX(${isOpen? 0: props.translateX}px) translateY(${isOpen? 0: props.translateY}px) scale(${isOpen? 1 : props.scale})`
       }}
       />}
      </div>
    </div>
  );
}

export default Photobox;