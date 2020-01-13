import {SHOW_LOADER, SHOW_NULL_DATA, ADD_NEWS, GET_NEWS} from '../types'

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [SHOW_NULL_DATA]: state => ({...state, loading: false}),
    [ADD_NEWS]: (state, {payload}) => ({
    ...state,
    news: [...state.news, payload]
}),
    [GET_NEWS]: (state, {payload}) => (
        {...state, 
        news: payload,
        loading: false
        }),
    DEFAULT: state => state
}

export const FirebaseReducer = (state, action) =>
{
    const handle = handlers[action.type] || action.DEFAULT
    return handle(state, action)
}