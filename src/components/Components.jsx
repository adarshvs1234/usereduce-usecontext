import React from 'react'
import { useCount } from '../CountProvider'

const Components =() => {

    const {store,dispatch} = useCount()

  return (
    <div>
        {store.name}
        <button onClick={()=>dispatch({type:"CHANGE"})}>CHANGE</button>
    </div>
  )
}

export default Components
