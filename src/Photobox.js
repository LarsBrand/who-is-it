import React from 'react'

function Photobox() {
  const [isSmall, setIsSmall]= React.useState(true)

  return (
    <div className="photobox" onClick={()=>setIsSmall(!isSmall)}>
      <div className={`zoomer ${isSmall?'small':''}`}>
        <img src="https://i.redd.it/3nwl8wsyehu51.jpg" alt='guess who'/>
      </div>
      <div class="spotlight"></div>
    </div>
  );
}

export default Photobox;