import React, {useReducer} from 'react'
import axios from 'axios'
import {FirebaseReducer} from './FirebaseReducer'
import {FirebaseContext} from './FirebaseContext'
import {SHOW_LOADER, SHOW_NULL_DATA, GET_NEWS} from '../types'

const db_url=process.env.REACT_APP_DB_DATA

export const FirebaseState = ({children}) =>
{ 
    const data = {
        news: [],
        loading: false
    }
    
    const [state, dispatch] = useReducer(FirebaseReducer, data)
    
    const showLoader = () => dispatch({type: SHOW_LOADER})

    const getAllNews = async () => {
        showLoader()
        const result = await axios.get(`${db_url}/news.json`)
        if(result.data != null)
        {
            const payload = Object.keys(result.data).map(key => {
                return {
                  ...result.data[key],
                  id: key
                }
              })
              
            dispatch({
                type: GET_NEWS,
                payload
            })
        } 
        else {

            dispatch({
                type: SHOW_NULL_DATA
            })
        }
        
    }

    const addNews = async (header, text) => {
        const news = {
            header: header,
            text: text
        }
        
        await axios.post(`${db_url}/news.json`,news)
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, getAllNews, addNews,
            loading: state.loading,
            news: state.news        
        }}>  
            {children}
        </FirebaseContext.Provider> 
     ) 
}