import React from 'react'
import { memo } from 'react'

function Child(props) {
    console.log('child')
  return (
    <div>
    <button onClick={props.incrementAdd}> Add</button>
    </div>
  )
}

export default memo(Child)
