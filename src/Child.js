import React from 'react'
import { memo } from 'react'

function Child(props) {
    console.log('child')
  return (
    <div>
    <button onClick={props.incrementAdd}> incrementFromchildComp</button>
    </div>
  )
}

export default memo(Child)
