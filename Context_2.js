import React, {useContext} from 'react';
import {nameContext} from './Context_1';

function Context_2(){
    const nameValue = useContext (nameContext);
    return(
        <div> Child2 {nameValue}</div>
    )
}
export default Context_2;