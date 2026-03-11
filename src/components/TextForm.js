import React, { useState } from 'react'

export default function Navbars({ heading = 'Enter the text to analyze' }) {
    const [Text, SetText] = useState("Enter Text Here");

    const onclick_event = () => {
        let up_text = Text.toUpperCase();
        SetText(up_text);
    }
    const inverse_event = () => {
        let reverse_string = Text.trim().split('').reverse().join('').toUpperCase();
        return reverse_string;
    }
    const on_change = (e) => {
        SetText(e.target.value);
    }
    return (
        <>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Text} onChange={on_change} />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                <button className="btn btn-primary my-3" onClick={onclick_event}>
                    Convert to UpperCase
                </button>
            </div>
            <div>
                <h2>Reverse</h2>
                <p>{inverse_event()}</p>
            </div>
        </>
    )
}