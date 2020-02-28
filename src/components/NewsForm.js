import React, {useContext} from 'react';
import {AlertContext} from '../context/alert/AlertContext'
import {FirebaseContext} from '../context/firebase/FirebaseContext'

export const NewsForm = () => 
{ 
    const data = {header: '',
                        text: ''}
    const alert = useContext(AlertContext)
    const firebase = useContext(FirebaseContext)
     

    const submitHandler = (e) => {
        e.preventDefault()
        if(data.header.length!=0 && data.text!=0)
        {
            firebase.addNews(data.header,data.text)
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
        
      <form onSubmit={submitHandler}>
          <h1 className="display-1 header" > Создать статью </h1>
          <div className="form-group">
          <label className="newsHeader">Заголовок статьи</label>
              <input
              id="newsHeader"
              type="text"
              className="form-control"
              onChange={e => {data.header = e.target.value}}
              />
          </div>
          <div className="form-group">
          <label className="newsText">Текст статьи</label>
              <textarea
              id="newsText"
              type="text"
              className="form-control"
              onChange={e => {data.text = e.target.value}}
              />
          </div>
          <div className="form-group" onClick={submitHandler}>
              <input
              type="button"
              className="form-control btn btn-primary"
              value="Подтвердить"
              />
          </div>
      </form>
      
    )
}