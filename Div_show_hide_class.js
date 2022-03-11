import React from 'react'
import Div_show from './Div_show'

class Div_show_hide extends React.Component {
  state = {
    divcontainer: false
  }
  render () {
    var Handlechange = e => {
      this.setState({ divcontainer: !this.state.divcontainer })
    }
    const x = this.state.divcontainer
    return (
      <div>
        <center>
          <h1>how to hide and show</h1>
          <hr />
          <button onClick={Handlechange}>{x ? 'Hide' : 'Show'}</button>
          {x && (
            <div>
              <Div_show />
            </div>
          )}
        </center>
      </div>
    )
  }
}
export default Div_show_hide
