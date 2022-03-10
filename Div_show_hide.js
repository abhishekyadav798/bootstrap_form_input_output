import React, {useContext, useEffect, useState} from 'react';
import Div_show from './Div_show'
import {nameContext} from './Context_1';
import { Row, Col } from 'reactstrap'

import 'bootstrap/dist/css/bootstrap.min.css'



function Div_show_hide ()  { 

    const nameValue = useContext (nameContext);


  const [divcontainer,finalDivconatiner] = useState(null)
  const [divcontainer_1,finalDivconatiner_1] = useState(null)

  const[show_, update_show]=useState(false)  
 
  useEffect(()=>{
    console.log("updated")
    
  },[divcontainer,divcontainer_1])

  useEffect(()=>{
      if(nameValue === "true"){
    finalDivconatiner( true );
    finalDivconatiner_1( false );

    console.log(nameValue)
      }else if(nameValue === "false") {
        finalDivconatiner( false );
        finalDivconatiner_1( true );

        console.log(nameValue)
      } 
},[nameValue])

    var Handlechange = e => {
        if(show_ === true){
            finalDivconatiner( false );
            // console.log("show");
            update_show (false);
            // console.log(show_)
        }else if(show_ === false){
            // console.log("hide")
            finalDivconatiner( true )
            update_show( true);
            // console.log(show_)
        }
    }
    

    
    return (
      <div>
        <center>
          <h1>how to hide and show</h1>
          <hr />
          <button onClick={Handlechange}>{divcontainer ? 'Hide' : 'Show'}</button>
          {divcontainer && (
               <div>
             
      div1
            </div>
          )}
           {divcontainer_1 && (
               <div>
             
       hjmhkjhkljhkjh
            </div>
          )}

        </center>

        {nameValue}
      </div>
    )
  }

export default Div_show_hide
