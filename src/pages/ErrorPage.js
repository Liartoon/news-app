import React from 'react';

export const ErrorPage = (props) => 
{ 
    
    return (
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-3" />
                <div className="col-6">
                <h3 className="errMsg">
                {props.errMsg}
                </h3>
                </div>
                <div className="col-3" />
            </div>
        </div>
    )
}