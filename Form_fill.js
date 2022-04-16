import React, { useEffect, useState } from 'react'
import './Form_fill.css'
import Design from './design.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'

function Form_fill () {
  var [name, finalname] = useState('')
  var [mobile, finalmobile] = useState()
  var [password, finalpassword] = useState()
  var [confpassword, finalconfpassword] = useState()

  useEffect(() => {
    console.log('initialinput')
  }, [name])
  function changename (event) {
    //    finalinput(preState => !preState)
    //    console.log(event.target.value)
    finalname(event.target.value)
  }

  function changemobile (event) {
    finalmobile(event.target.value)
  }
  function changepassword (event) {
    finalpassword(event.target.value)
  }
  function changeconfirmpassword (event) {
    finalconfpassword(event.target.value)
  }
  function changecheckbox () {
    var x = document.getElementById('myInput')
    if (x.type === 'password') {
      x.type = 'text'
    } else {
      x.type = 'password'
    }
  }

  function clicktosubmit (event) {
    event.preventDefault()
    if (password != confpassword) {
      console.log('password dont match')
    } else {
      console.log(
        'name is : ' + name,
        'mobile is : ' + mobile,
        'password is : ' + password,
        'confirm password is :' + confpassword
      )
      
    }
  }
  return (
    <div>
      {/* <img src={Design} style={{width:"150px"}} /> */}
      <header className='App-header'>
        <form>
          <h6>Create Account</h6>
          <label>Your name </label> <br />
          <input type='text' onChange={changename} size='23' /> <br />
          <label>Mobile number Or email </label> <br />
          <input type='email' onChange={changemobile} size='23' />
          <br />
          <label>Password</label> <br />
          <input
            type='password'
            onChange={changepassword}
            id='myInput'
            size='23'
          />
          <br />
          <label>Password again</label> <br />
          <input type='password' onChange={changeconfirmpassword} size='23' />
          <br />
          <input type='checkbox' onChange={changecheckbox} /> Show Password
          <br />
          <br />
          <button onClick={clicktosubmit} className='button_style'>
            Submit
          </button>
          {/* <input type='text' value='submit' /> */}
        </form>
      </header>
    </div>
  )
}

export default Form_fill
