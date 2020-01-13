import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom';

export const News = ({news}) => {
    
function getReqNews(id)
{
    const data = news.filter(obj => obj.id == id)
    return data
}


    return (
        
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
            </div>
    <div className="col-6">
        {
        news.map(n => 
        <div className="card-field">
            <div className="card">
                <div className="card-body">
                    <Fragment>
                    <NavLink className="card-link" to={{pathname:`/News/${n.id}`, state: getReqNews(`${n.id}`)}}>{n.header}</NavLink>
                    <hr />
                    <p className="card-text">{n.text}</p>
                    </Fragment>
                </div>
            </div>
            <hr />
        </div>
                )
                }
                
    </div>
    <div className="col-3">
    </div>
    </div>
    </div>
        
    )
    
}