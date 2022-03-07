import React, { useState } from 'react'

function UseState_auto_cahnge_data () {
  const [click, setClick] = useState([])

  function addNumber () {
    setClick([
      click,
      {
        id: click.length,
        value: Math.random() * 10
      }
    ])
  }

  return (
    <div>
      <p>{addNumber}</p>
      <ul>
        {click.map(item => (
          <li key={item.id}>{item.value}</li>
        ))}
      </ul>
      <button onClick={addNumber}>add </button>
    </div>
  )
}

export default UseState_auto_cahnge_data
