import React, {useContext} from 'react';
import {nameContext} from './Context_1';

function Context_3(){
    const nameValue = useContext (nameContext);
    return(
        <div> Child 3 {nameValue}</div>
       
    )
}
export default Context_3;