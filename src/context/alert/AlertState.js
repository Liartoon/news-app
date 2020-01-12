import React, {useReducer} from 'react'
import {AlertContext} from './AlertContext'
import {alertReducer} from './AlertReducer'
import { SHOW_ALERT, HIDE_ALERT } from '../types'

export const AlertState = ({children}) =>
{ 
  const [state, dispatch] = useReducer(alertReducer, {visible: false})

const show = (text, background) => {
  dispatch({
    type: SHOW_ALERT,
    payload: {text, background}
  })
}

const hide = () => dispatch({
  type: HIDE_ALERT
})

  return (
     <AlertContext.Provider value={{
       show: show,
       hide: hide,
       alert: state
     }}>  
         {children}
     </AlertContext.Provider> 
  ) 
}
