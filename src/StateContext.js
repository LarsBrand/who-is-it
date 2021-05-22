import React from 'react'
import debounce from 'lodash.debounce' 
import usePersistantState from './usePersistantState'

const defaultImages =[
  {url:"https://i.redd.it/3nwl8wsyehu51.jpg", closed: { boxHeight: 150, boxWidth: 150, imageZoom:1, imageTranslateX:0, imageTranslateY:0}, open: { name:'sexy jigsaw' }},
  {url:"https://placekitten.com/200/300", closed: { boxHeight: 150, boxWidth: 150, imageZoom:1, imageTranslateX:0, imageTranslateY:0}, open: { name:'cure kitten' }},
  {url:"https://placedog.net/500", closed: { boxHeight: 150, boxWidth: 150, imageZoom:1, imageTranslateX:0, imageTranslateY:0}, open: { name:'mystery dog' }}
]
export const StateContext = React.createContext();

function WithStateContext(props) {
  const [isEditMode, setIsEditMode]= React.useState(false)
  const [index, setIndex]= React.useState(0)
  const [isOpen, setIsOpen]= React.useState(false)
  const [runningAnimation, setRunningAnimation]= React.useState("")
  const [images, setImages] = usePersistantState(defaultImages, "stored_config")

  const applyState = React.useCallback((newIndex)=>{
    setRunningAnimation("")
    setIndex(newIndex)
  },[])

  const debouncedSetIndex = debounce((newIndex)=>applyState(newIndex), 1500)

  const setRunningAnimationCallback =  React.useCallback((anim, newIndex)=>{
    setIsOpen(false)
    setRunningAnimation(anim)
    debouncedSetIndex(newIndex)
  }, [setRunningAnimation,debouncedSetIndex])

  const nextIndex = index+1 > images.length-1 ? 0 : index+1
  const previousIndex  = index-1 < 0 ? images.length-1 : index-1

  const goPrevious=  React.useCallback(()=>{
    setRunningAnimationCallback('previous', previousIndex)  
  }, [previousIndex, setRunningAnimationCallback])

  const goNext=  React.useCallback(()=>{
    setRunningAnimationCallback('next', nextIndex)
  }, [nextIndex, setRunningAnimationCallback])
 
  const toggleIsOpen=  React.useCallback((e)=>{
    e.preventDefault()
    setIsOpen(!isOpen)
  }, [isOpen, setIsOpen])
  
  const toggleIsEditMode=  React.useCallback((e)=>{
    e.preventDefault()
    setIsEditMode(!isEditMode)
  }, [isEditMode, setIsEditMode])

const value = {
  images,
  goPrevious,
  goNext,
  runningAnimation,
  index, 
  nextIndex, 
  previousIndex,
  isOpen,
  toggleIsOpen,
  isEditMode,
  toggleIsEditMode,
  setImages
}

  return (
    <StateContext.Provider value={value}>
      {props.children}
    </StateContext.Provider>
  );
}

export default WithStateContext;
