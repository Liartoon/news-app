import {LOG_IN, LOG_OUT, GET_ALL_USERS, GET_ONE_USER} from '../types'

const handlers = {
    [LOG_IN]: (state, {payload}) => ({...state, isAuth: true, userId: payload }),
    [LOG_OUT]: state => ({...state, isAuth: false, userId: 0}),
    [GET_ALL_USERS]: (state, {payload}) => ({...state, users: payload}),
    [GET_ONE_USER]: (state, {payload}) => ({...state, user: payload}),
    
    DEFAULT: state => state
}

export const UserReducer = (state, action) =>
{
    const handle = handlers[action.type] || action.DEFAULT
    return handle(state, action)
}