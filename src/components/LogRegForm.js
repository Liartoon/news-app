import React, {useContext, Fragment, useEffect} from 'react';
import {Alert} from './Alert'

import {UserContext} from '../context/user/UserContext'
import {AlertContext} from '../context/alert/AlertContext'

export const LogRegForm = () => 
{ 
    const data = {
        username: '',
        password:''
        }
    const user = useContext(UserContext)
    const alert = useContext(AlertContext)

    useEffect(() =>
    {
        user.getAllUsers()
    }, [])

    const signInHandler = (e) => {
        
        e.preventDefault()
        user.getAllUsers()
        let statement=false
        console.log(user)
        if(data.username.length!=0 && data.password.length!=0)
        {
            if(user.users.length !=0)
            {(user.users).forEach(el => {
                statement=(data.username == el.username && data.password == el.password) ? true : false
                
                if(statement)
                {
                    console.log("1")
                    user.login()
                }
            })}
            //alert.show("Congrats! Your news has been created", "success")
            
            
        }
        else
        {
            alert.show("Wrong input. Try again", "danger")
            setTimeout(() => {
                alert.hide()
                window.location.reload()
            }, 2000)
        }
        
    }

    const signUpHandler = (e) => {
        e.preventDefault()
        if(data.username.length!=0 && data.password.length!=0)
        {
            user.addUser(data)
            alert.show("Congrats! Your news has been created", "success")
            setTimeout(() => {
                alert.hide()
                window.location.reload()
            }, 2000)
            
        }
        else
        {
            alert.show("Wrong input. Try again", "danger")
            setTimeout(() => {
                alert.hide()
                window.location.reload()
            }, 2000)
        }
        
    }

    return (
        <Fragment>
        <Alert />
        <div className="container-fluid">
            <div className="row">
                <div className="col">
                    <form >
                        <h1 className="display-4 header" > Войти </h1>
                        <div className="form-group">
                        <label className="newsHeader">Логин</label>
                            <input
                            id="newsHeader"
                            type="text"
                            className="form-control"
                            onChange={e => {data.username = e.target.value}}
                            />
                        </div>
                        <div className="form-group">
                        <label className="newsText">Пароль</label>
                            <textarea
                            id="newsText"
                            type="text"
                            className="form-control"
                            onChange={e => {data.password = e.target.value}}
                            />
                        </div>
                        <div className="form-group" onClick={signInHandler}>
                            <input
                            type="button"
                            className="form-control btn btn-primary"
                            value="Подтвердить"
                            />
                        </div>
                    </form>
                </div>
                <div className="col">
                <form >
                        <h1 className="display-4 header" >Зарегистрироваться</h1>
                        <div className="form-group">
                        <label className="newsHeader">Логин</label>
                            <input
                            id="newsHeader"
                            type="text"
                            className="form-control"
                            onChange={e => {data.username = e.target.value}}
                            />
                        </div>
                        <div className="form-group">
                        <label className="newsText"т>Пароль</label>
                            <textarea
                            id="newsText"
                            type="text"
                            className="form-control"
                            onChange={e => {data.password = e.target.value}}
                            />
                        </div>
                        <div className="form-group" onClick={signUpHandler}>
                            <input
                            type="button"
                            className="form-control btn btn-primary"
                            value="Подтвердить"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
      
        </Fragment>
    )
}