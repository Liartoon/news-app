import React, {useReducer} from 'react'
import axios from 'axios'
import {UserReducer} from './UserReducer'
import {UserContext} from './UserContext'
import {LOG_IN, LOG_OUT, GET_ALL_USERS, GET_ONE_USER} from '../types'

const db_url=process.env.REACT_APP_DB_DATA

export const UserState = ({children}) =>
{ 
    const data = {
        isAuth: false,
        users: [],
        user: {},
        curUserId: 0
    }
    
    const [state, dispatch] = useReducer(UserReducer, data)
    
    const getUserById = async (id) => {
      const result = await axios.get(`${db_url}/users/${id}.json`)

      if(result.data != null)
        {
            const payload = result.data
              
            dispatch({
                type: GET_ONE_USER,
                payload
            })
        } 
    }

    const getAllUsers = async () => {
      const result = await axios.get(`${db_url}/users.json`)
        if(result.data != null)
        {
          const payload = Object.keys(result.data).map(key => {
            return {
              ...result.data[key],
              id: key
            }
          })
            dispatch({
                type: GET_ALL_USERS,
                payload
            })
        } 
    }

    const addUser = async (data) => {

      let idVal = Date.now().toString() + (Math.floor(Math.random() * 1000 % 899 + 100)).toString()

      await axios.put(`${db_url}/users/${idVal}.json`, data)
    }

    const login = () => {
        dispatch({
          type: LOG_IN
        })
      }
      
      const logout = () => dispatch({
        type: LOG_OUT
      })

    return (
        <UserContext.Provider value={{
            login, logout, addUser, getAllUsers, getUserById,
            isAuth: state.isAuth,
            users: state.users,
            user: state.user
        }}>  
            {children}
        </UserContext.Provider> 
     ) 
}