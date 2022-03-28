import React, { useState, useEffect } from 'react'
import Context_2 from './Context_2'
import Context_3 from './Context_3'
import { useContext } from 'react'
import { createContext } from 'react'
import Div_show from './Div_show'
import Div_show_hide from './Div_show_hide'

function Context_1() {
    var [initialshow, finalshow] = useState(false)

    var [initial, finalvalue] = useState('--')
    const [items, setItems] = useState()
    const [show_, update_show] = useState(false)

    var button = () => {
        if (show_ === true) {
            finalvalue('false')
            update_show(false)
        } else if (show_ === false) {
            finalvalue('true')
            update_show(true)
        }
    }

    return (
        <div>
            How the value is passed from Child1 to Child2 and Child3 onclick
            <button onClick={() => button()}>Click</button>
            {initial}
            <nameContext.Provider value={initial}>
                <Div_show_hide />
                <Context_2 />
                <Context_3 />
            </nameContext.Provider>
        </div>
    )
}

export const nameContext = createContext('finalvalue')
export default Context_1
