import React from 'react'
import './CSS/style.css'

export default function Alert({ MainMessage, Message }) {
    return (
        (MainMessage) && <div className="warning" role="alert">
            <strong>{MainMessage}</strong> {Message}.
        </div>
    )
}