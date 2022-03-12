import React, { useEffect, useState } from 'react'

function If_Else_conditional() {
//     var loginButton;
//   const [ login, logout] = useState(true)
//     if (loggedIn) {
//         login = <logoutbutton />;
//     } else {
//         logout = <loginButton /> 
//     }

var [initialvalue, finalvalue] = useState(5)

var [ initial, final] = useState('abcgdefgh')

useEffect(()=>{
    console.log(initial)
},[initial])

var school = '{"type": [{"class":"first","board":"cbse"},{"class":"second","board":"haryana"}],"type2":[{"class":"10th","board":"up"},{"class":"9th","board":"raj"}]}'
var arr1 = JSON.parse(school)


//  useEffect(()=>{
//     var raw = "";

//     var requestOptions = {
//       method: 'GET',
     
//       redirect: 'follow'
//     };
    
//     fetch("http://143.244.137.54:3005/", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
//  },[])
    function clickthis (){
        console.log('abc')
        var raw = "";

        var requestOptions = {
          method: 'GET',
          
          redirect: 'follow'
        };
        
        fetch("http://143.244.137.54:3005/", requestOptions)
          .then(response => response.text())
          .then(result => clickthisone(result))
          .catch(error => console.log('error', error));
    }

    function clickthisone (res){

        var school = res
        var arr2 = JSON.parse(school)
        console.log(arr2[0].name)
        final(arr2[0].name)
    }
  return (
    <div>
         <a>login status </a>
         <button onClick={clickthis}>click to check</button>
         {initial}
    </div>
  )
}

export default If_Else_conditional