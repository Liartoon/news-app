import React, {Fragment, useContext, useEffect} from 'react';
import {News} from '../components/News'
import {ErrorPage} from '../pages/ErrorPage'
import {FirebaseContext} from '../context/firebase/FirebaseContext'
import { Loader } from '../components/Loader';


export const Main = () => 
{ 
  const {loading, news, getAllNews, showLoader} = useContext(FirebaseContext)  
  
  useEffect(() =>
  {
    showLoader()
    getAllNews()
  }, [])
    return (
      
    <Fragment>
      {
      loading 
        ? <Loader />
        : (news.length == 0 
          ?  <ErrorPage errMsg="There is no news"/>
          : <News news={news}/>)
      }
    
    </Fragment>
)

}