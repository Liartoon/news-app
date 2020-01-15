import React from 'react';
import {NavLink} from 'react-router-dom';



export const NewsPage = (props) => 
{ 
    const data = props.location.state[0]
    

    return (
        
        <div className="container-fluid">
            <div className="row">
                <div className="col-3" />
                <div className="col-6">
                <h3>
                {data.header} 
                <hr />
                    <small className="text-muted">{data.text}</small>
                </h3>
                <hr />
                <NavLink className="btn btn-primary d-block" to={{pathname:`/`}}>Back</NavLink>
                </div>
                <div className="col-3" />
            </div>
        </div>
        


    )

}