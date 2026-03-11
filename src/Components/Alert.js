import React from 'react'
import './CSS/style.css'
import './CSS/mediaq.css'

export default function Alert({ MainMessage, Message, num_of_words }) {
    return (
        (MainMessage) && <div className="warning" role="alert">
            <strong>{MainMessage}</strong> : {Message} & Number of Words : {num_of_words}.
        </div>
    )
}