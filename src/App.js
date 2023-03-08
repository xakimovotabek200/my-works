import Concat from './components/Concat/Concat'
import Drawer from './components/Concat/Drawer'
import { useState } from 'react'
function App ()
{
  const [ show, setShow ] = useState( false )
  return (
    <>
      { show ? <Drawer /> : "error" }
      <button onClick={ () => setShow( !show ) }>Clikcha</button>
    </>
  )
}

export default App