import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Page_donot_reload () {
  const [count, setCount] = useState(0)

  
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`
     onLoad();
  })

  function hix () {
    window.alert("hicsdsidsh")
    console.log('text1')   
  }

  function onLoad () {
    window.alert("OnLoad")
    console.log('hello')
  }

  return (
    <div>
      <button onClick={() => hix()}>Click here </button>
    </div>
  )
}

export default Page_donot_reload
