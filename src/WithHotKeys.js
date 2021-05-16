import React from 'react'
import { HotKeys } from "react-hotkeys";
import { StateContext } from './StateContext';


const keyMap = {
  next: "right",
  previous: "left",
  toggleCurrent: ["space"]
};

function WithHotKeys(props) {
  const {goNext, goPrevious, toggleIsOpen} = React.useContext(StateContext);
  const handlers = {
    next: goNext,
    previous: goPrevious,
    toggleCurrent: toggleIsOpen,  
  }

  return (
    <HotKeys keyMap={keyMap} handlers={handlers} allowChanges={true}>
      {props.children}
    </HotKeys>
  );
}

export default WithHotKeys;
