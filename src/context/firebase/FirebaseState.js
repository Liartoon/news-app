import React, {useReducer} from 'react'
import axios from 'axios'
import {FirebaseReducer} from './FirebaseReducer'
import {FirebaseContext} from './FirebaseContext'
import {SHOW_LOADER, SHOW_NULL_DATA, GET_NEWS, GET_ONE_NEWS} from '../types'

const db_url=process.env.REACT_APP_DB_DATA

export const FirebaseState = ({children}) =>
{ 
    const data = {
        one_news: {},
        news: [],
        loading: false
    }
    
    const [state, dispatch] = useReducer(FirebaseReducer, data)
    
    const showLoader = () => dispatch({type: SHOW_LOADER})

    const getAllNews = async () => {
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

    const getNewsById = async (id) => {
        const result = await axios.get(`${db_url}/news/${id}.json`)
        if(result.data != null)
        {
            const payload = result.data
              
            dispatch({
                type: GET_ONE_NEWS,
                payload
            })
        } 
    }

    const addNews = async (header, text) => {
        const news = {
            header: header,
            text: text
        }
        let idVal = Date.now().toString() + (Math.floor(Math.random() * 1000 % 899 + 100)).toString()

        await axios.put(`${db_url}/news/${idVal}.json`,news)
    }

    return (
        <FirebaseContext.Provider value={{
            showLoader, getAllNews, addNews, getNewsById,
            loading: state.loading,
            news: state.news,
            one_news: state.one_news     
        }}>  
            {children}
        </FirebaseContext.Provider> 
     ) 
}