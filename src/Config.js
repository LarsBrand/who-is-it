import React from 'react'
import { StateContext } from './StateContext';

function Config(props) {  
  const {toggleIsEditMode, images, index, setImages, isEditMode}= React.useContext(StateContext)
  const setNewHeightBox =  React.useCallback((event)=>{
    const newImages = [...images]
    newImages[index].closed = newImages[index].closed || {}
    newImages[index].closed.boxHeight = event.target.value || 150
    setImages(newImages)
  },[index, setImages, images])

  const setNewWidthBox =  React.useCallback((event)=>{
    const newImages = [...images]
    newImages[index].closed = newImages[index].closed || {}
    newImages[index].closed.boxWidth = event.target.value || 150
    setImages(newImages)
  },[index, setImages, images])

  const setNewURL =  React.useCallback((event)=>{
    const newImages = [...images]
    newImages[index].url = event.target.value || ''
    setImages(newImages)
  },[index, setImages, images])

  const setNewName =  React.useCallback((event)=>{
    const newImages = [...images]
	newImages[index].open = newImages[index].open || {}
    newImages[index].open.name = event.target.value || ''
    setImages(newImages)
  },[index, setImages, images])

  const onDelete =  React.useCallback(()=>{
    const newImages = [...images]
	newImages.splice(index,1)
	console.log(newImages)
    setImages(newImages)
  },[index, setImages, images])

  const onNew =  React.useCallback(()=>{
    const newImages = [...images]
	newImages.splice(index,0, {url:''})
	console.log(newImages)
    setImages(newImages)
  },[index, setImages, images])

  const setConfig =  React.useCallback((event)=>{
	try{ 
		const newConfig = JSON.parse(event.target.value)
		setImages(newConfig)
	}
	catch{}
  },[setImages])

  return (
    <>
    <div onClick={toggleIsEditMode}>
      <svg class="gear-icon" viewBox="0 0 100 100">
		    <path d="M50,7.852c0.849,0,1.701,0.027,2.568,0.083l0.953,4.296l0.57,2.568l2.583,0.494c1.655,0.316,3.306,0.758,4.905,1.312
			  l2.482,0.86l1.775-1.936l2.98-3.25c1.526,0.764,3.009,1.623,4.438,2.572l-1.325,4.209l-0.788,2.504l1.983,1.72
			  c1.275,1.106,2.483,2.313,3.59,3.59l1.72,1.983l2.503-0.788l4.21-1.324c0.949,1.429,1.809,2.912,2.572,4.438l-3.25,2.98
			  l-1.938,1.776l0.861,2.483c0.553,1.593,0.994,3.242,1.312,4.903l0.495,2.581l2.565,0.57l4.297,0.955
			  c0.055,0.86,0.082,1.705,0.082,2.547v0.039c0,0.831-0.028,1.683-0.083,2.549l-4.296,0.953l-2.568,0.57l-0.493,2.585
			  c-0.315,1.652-0.757,3.302-1.312,4.903l-0.86,2.481l1.936,1.775l3.25,2.982c-0.765,1.526-1.624,3.009-2.573,4.438l-4.209-1.325
			  l-2.505-0.789l-1.72,1.985c-1.103,1.272-2.31,2.479-3.587,3.586l-1.984,1.72l0.788,2.505l1.325,4.21
			  c-1.431,0.949-2.914,1.809-4.44,2.573l-2.98-3.25l-1.775-1.937l-2.482,0.86c-1.595,0.553-3.244,0.994-4.904,1.312l-2.582,0.495
			  l-0.57,2.566l-0.954,4.296C51.7,92.121,50.849,92.148,50,92.148c-0.839,0-1.697-0.028-2.569-0.084l-0.953-4.295l-0.57-2.569
			  l-2.584-0.493c-1.653-0.316-3.302-0.757-4.902-1.312l-2.481-0.86l-1.776,1.936l-2.98,3.251c-1.527-0.765-3.011-1.625-4.441-2.574
			  l1.326-4.208l0.789-2.506l-1.985-1.72c-1.272-1.103-2.479-2.31-3.586-3.587l-1.72-1.985l-2.505,0.789l-4.209,1.325
			  c-0.95-1.43-1.81-2.913-2.574-4.44l3.251-2.98l1.938-1.775l-0.861-2.483c-0.555-1.6-0.996-3.248-1.312-4.9l-0.494-2.583
			  l-2.568-0.571l-4.296-0.954C7.879,51.7,7.852,50.849,7.852,50s0.027-1.701,0.083-2.569l4.296-0.953l2.568-0.57l0.494-2.583
			  c0.316-1.655,0.758-3.305,1.312-4.902l0.86-2.483l-1.937-1.775l-3.25-2.979c0.765-1.527,1.624-3.011,2.574-4.441l4.208,1.326
			  l2.506,0.789l1.72-1.985c1.104-1.274,2.311-2.481,3.587-3.588l1.983-1.72l-0.788-2.504l-1.325-4.208
			  c1.43-0.95,2.914-1.81,4.44-2.575l2.98,3.25l1.776,1.938l2.482-0.861c1.599-0.555,3.248-0.996,4.9-1.312l2.585-0.494l0.57-2.568
			  l0.953-4.296C48.299,7.879,49.152,7.852,50,7.852 M50,66.515c9.106,0,16.515-7.408,16.515-16.515S59.107,33.485,50,33.485
			  S33.486,40.894,33.486,50S40.894,66.515,50,66.515 M50,3.852c-1.981,0-3.929,0.139-5.844,0.381l-1.583,7.131
			  c-1.871,0.357-3.694,0.849-5.461,1.461l-4.948-5.397c-3.63,1.523-7.021,3.5-10.109,5.854l2.198,6.979
			  c-1.424,1.234-2.757,2.567-3.99,3.991l-6.98-2.199c-2.354,3.089-4.331,6.479-5.854,10.109l5.397,4.948
			  c-0.613,1.768-1.104,3.59-1.461,5.461l-7.131,1.583C3.991,46.071,3.852,48.019,3.852,50c0,1.98,0.139,3.928,0.381,5.843
			  l7.131,1.584c0.357,1.871,0.849,3.693,1.461,5.46l-5.398,4.948c1.523,3.63,3.5,7.021,5.854,10.109l6.98-2.198
			  c1.233,1.424,2.566,2.758,3.99,3.991l-2.199,6.979c3.089,2.354,6.479,4.332,10.109,5.854l4.949-5.396
			  c1.767,0.612,3.59,1.104,5.461,1.461l1.582,7.131c1.916,0.243,3.864,0.382,5.846,0.382c1.98,0,3.927-0.139,5.842-0.381
			  l1.584-7.131c1.871-0.358,3.694-0.849,5.461-1.461l4.948,5.396c3.63-1.522,7.021-3.499,10.108-5.853l-2.197-6.981
			  c1.424-1.233,2.758-2.566,3.991-3.99l6.979,2.198c2.354-3.088,4.331-6.478,5.854-10.106l-5.396-4.95
			  c0.612-1.768,1.104-3.591,1.461-5.463l7.131-1.583c0.242-1.908,0.381-3.85,0.381-5.824c0-0.007,0.001-0.013,0.001-0.02
			  s-0.001-0.013-0.001-0.02c0-1.973-0.139-3.913-0.38-5.821l-7.131-1.585c-0.358-1.871-0.849-3.694-1.462-5.462l5.397-4.948
			  c-1.522-3.629-3.499-7.02-5.853-10.106l-6.98,2.196c-1.234-1.424-2.568-2.758-3.992-3.992l2.198-6.979
			  c-3.087-2.354-6.477-4.33-10.106-5.853l-4.949,5.396c-1.768-0.612-3.592-1.104-5.463-1.461l-1.583-7.131
			  C53.929,3.991,51.982,3.852,50,3.852L50,3.852z M50,62.515c-6.9,0-12.515-5.614-12.515-12.515S43.1,37.485,50,37.485
			  S62.515,43.1,62.515,50S56.901,62.515,50,62.515L50,62.515z"/>
      </svg>
    </div>
	{isEditMode && <div class='edit-controls'>
	  <div> 
		<button onClick={onNew}>new</button>
		<button onClick={onDelete}>delete</button>
	  </div>
	  <div>name</div>
	  <input type="text" value={images[index].open?.name||''} onChange={setNewName} />
	  <div>URL</div>
	  <input type="text" value={images[index].url||''} onChange={setNewURL} />
	  <div>Box</div>
	  <input type="number" value={images[index].closed?.boxHeight || 150} onChange={setNewHeightBox} />
	  <input type="number" value={images[index].closed?.boxWidth || 150} onChange={setNewWidthBox} />
	  
	  <div>raw config</div>
	  <textarea value={JSON.stringify(images)} onChange={setConfig}/>
	</div>
	}
    </>
  );
}

export default Config;