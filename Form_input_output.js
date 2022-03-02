import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Form_input_output () {
  const [count, setCount] = useState(0)

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
    //  onLoad();
  })

  function hix () {
    //window.alert("hicsdsidsh")
    console.log(text1)
    setText2(text1 + ' xyz')
    // setText("asdasdas");
  }
  function onLoad (value_) {
    // window.alert("OnLoad")
    console.log('hello')
  }

  const [text1, setText] = useState('defaultvalue123')
  const [text2, setText2] = useState('')

  const onChange = event => {
    console.log(event.target.value)
    setText(event.target.value)
    // setText2(text1+" xyz")
    //  hix("event.target.value")
  }

  return (
    <div>
      <input type='text' defaultValue={'text123'} onChange={onChange} />

      <button onClick={() => hix()}>Click here </button>
      <div>{text2}</div>
    </div>
  )
}

export default Form_input_output
