import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

const name = 'Clément LABBÉ'
const paragraph = 'Developpeur junior en BUT informatique, je me perfectionne en programmation et en robotique, deux domaines qui me passionnent.'


function App() {
  return <>
            <CompterTest/>
          </>
}

function PersonPresentation() {
  return <>
            <TitlePresentation>{name}</TitlePresentation>
            <ParagraphPresentation>{paragraph}</ParagraphPresentation>
        </>
}

function ParagraphPresentation({children}) {
  return <>
        <p>{children}
            </p>  
  </>

}

function TitlePresentation({children}) {
  return <>
            <h1>{children}</h1>
          </>
}

function CompterTest() {
  const [count , setCount] = useState(0)

  const increment = () =>{
    setCount(count + 1)
  }

  const reset = () => {
    setCount(0)
  }

  return <>
    <h5>{count}</h5> 
    <button onClick={increment}>Increment</button>
    <button onClick={reset}>Reset</button>
  </>
}



export default App
