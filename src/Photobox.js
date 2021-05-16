import React from 'react'
import { StateContext } from './StateContext';

function Photobox(props) {  
  const {isOpen, toggleIsOpen}= React.useContext(StateContext)
  const isSmall= !props.active || !isOpen

  return (
    <div className={`photobox ${props.className||''}`} onClick={toggleIsOpen}>
      <div className={`zoomer ${isSmall?'small':''}`}>
        <img src={props.url} alt='guess who'/>
      </div>
    </div>
  );
}

export default Photobox;