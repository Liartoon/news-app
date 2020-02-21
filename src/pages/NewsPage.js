import React, { useContext } from 'react';
import {NavLink} from 'react-router-dom';

import {FirebaseContext} from '../context/firebase/FirebaseContext'

export const NewsPage = (props) => 
{ 
    const {one_news, getNewsById} = useContext(FirebaseContext)
    let data = {
        header: "",
        text:""
    }

    getNewsById(props.match.params.newsId)

    data = {...one_news}


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