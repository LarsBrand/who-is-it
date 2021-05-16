import React from 'react'
import debounce from 'lodash.debounce'


const defaultImages =[
  {url:"https://i.redd.it/3nwl8wsyehu51.jpg"},
  {url:"https://placekitten.com/200/300"},
  {url:"https://placedog.net/500"}
]
export const StateContext = React.createContext({images:defaultImages});

function WithStateContext(props) {
  const [index, setIndex]= React.useState(0)
  const [isOpen, setIsOpen]= React.useState(false)
  const [runningAnimation, setRunningAnimation]= React.useState("")
  const images=props.images || defaultImages

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

const value = {
  images,
  goPrevious,
  goNext,
  runningAnimation,
  index, 
  nextIndex, 
  previousIndex,
  isOpen,
  toggleIsOpen
}

  return (
    <StateContext.Provider value={value}>
      {props.children}
    </StateContext.Provider>
  );
}

export default WithStateContext;
