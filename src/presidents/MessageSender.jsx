import { Avatar, IconButton } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import './MessageSender.css'
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import db, { storage } from '../firebase';
import { useStateValue } from '../Auth';
import moment from 'moment'

function MessageSender() {
    const [message, setMessage] = useState('')
    const [image, setImage] = useState('')
    const [{ user}, dispatch] = useStateValue()

    const handleSubmit = (e) => {
        e.preventDefault()
        db.collection("Clubs").doc(user.uid).collection("posts").add({
            message: message,
            image: image,
            timestamp: moment().toDate().toUTCString(),
            logo: user.photoURL,
            clubname: user.displayName,
        })
        db.collection("Posts").add({
            message: message,
            image: image,
            timestamp: moment().toDate().toUTCString(),
            logo: user.photoURL,
            clubname: user.displayName,
        })
        setMessage('')
        setImage('')
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={message}
                        onChange={(e) => { setMessage(e.target.value) }}
                        className="messageSender__input"
                        placeholder={`Any Events....${user.displayName}`} />
                    <input value={image}
                        onChange={(e) => { setImage(e.target.value) }}
                        className="messageSender__input"
                        placeholder={image} />
                    <button onClick={handleSubmit} type="submit">hidden button</button>
                </form>
            </div>
        </div>
    )
}

export default MessageSender
