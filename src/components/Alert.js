import React, {useContext} from 'react';
import {AlertContext} from '../context/alert/AlertContext';

export const Alert = () => 
{ 
    const {alert} = useContext(AlertContext)

    
    if(!alert.visible)
    {
        return null
    }
    
    return (
        <div className={`alert alert-${alert.background}`} role="alert">
            <h4 className="alert-heading">{alert.text}
            </h4>
        </div>
    )
}