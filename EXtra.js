import React, { useContext, useState } from 'react'
import { nameContext } from './Cart'
import './Login.css'

function Login (props) {
  const { login, setLogin } = props

  const nameValue = useContext(nameContext)
  // const [initial,setInitial] = useState('')
  const [divcontainer, setDivconatiner] = useState(null)
  const [show_, update_show] = useState(true)

  let loginStatus
  if (login === true) {
    loginStatus = 'Light Theme'
  } else {
    loginStatus = 'Dark Theme'
  }
  const clickForLight = () => {
    setLogin(true)
  }
  const clickToDark = () => {
    setLogin(false)
  }

//   const clickToShow = () => {
//     if (setLogin === true) {
//       setInitial('Dark')
//     } else {
//       setInitial('Light')
//     }
//   }

  const Handlechange = e => {
    if (show_ === true) {
      setDivconatiner(false)
      update_show(false)
      setLogin(true)
    } else if (show_ === false) {
      setDivconatiner(true)
      update_show(true)
      setLogin(false)
    }
  }

  return (
    <div className='login_style'>
      {loginStatus}
      <br />
      <button onClick={() => clickForLight()}>Light Mode</button>
      <br />
      <button onClick={() => clickToDark()}>Dark Mode</button>
      {/* <button onClick={()=>clickToShow}>{setInitial}</button> */}
      <br/>
      <button onClick={Handlechange}>
        {divcontainer ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  )
}

export default Login
