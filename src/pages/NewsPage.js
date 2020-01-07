import React, {Fragment} from 'react';



export const NewsPage = (props) => 
{ 
    return (
        <Fragment>
        <div className="alert alert-success" role="alert"> {props.match.params.newsId}</div>
        <hr />
        <div className="alert alert-success" role="alert"> {props.match.params.newsId}</div>
        <hr />
        <div className="alert alert-success" role="alert"> {props.match.params.newsId}</div>
        <hr />
        </Fragment>
    )

}