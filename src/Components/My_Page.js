import React, { useState } from 'react'
import './CSS/style.css'

export default function My_Page({ alert }) {
    const [isDark, setIsDark] = useState(false)
    const [clickAble, setclickAble] = useState(true)
    const [inpt, setinpt] = useState(null);

    const input1 = document.getElementsByTagName('input')[0]

    const Bg_Color = () => {
        const nav = document.getElementsByTagName('nav')[0]
        const inputs = document.querySelector('.inputs');
        const button = Array.from(document.querySelectorAll('.submit'));
        let input1 = document.getElementsByTagName('input')[0]

        if (!isDark) {
            nav.classList.add('darkmode')
            document.body.classList.add('dark_mode_body')
            inputs.classList.add('dark_mode_all')
            if (input1) {
                input1.classList.add('input_dark');
            }
            button.forEach((btn) => {
                btn.classList.add('input_dark');
            })
        } else {
            nav.classList.remove('darkmode')
            document.body.classList.remove('dark_mode_body')
            inputs.classList.remove('dark_mode_all')
            if (input1) {
                input1.classList.remove('input_dark');
            }
            button.forEach((btn) => {
                btn.classList.remove('input_dark');
            })
        }
        setIsDark(!isDark)
    }
    const set_alert = (e) => {
        if (e.target.value.trim() === '') {
            setinpt(null);
            return;
        }
        setinpt(e.target.value);
        if (inpt) {
            let num_of_words = inpt.trim().split(' ').length;
            console.log(num_of_words);
        }
    }
    const show_alert = () => {
        if (!inpt || !clickAble) return;
        alert("Success", inpt)
        input1.value = '';
        setclickAble(false)
        setTimeout(function () {
            setclickAble(true)
            alert(null, null);
            setinpt(null);
        }, 2000)
    }

    return (
        <div>
            <nav>
                <div className="linker">
                    <h2>Home</h2>
                    <h4>Contact</h4>
                    <h4>Links</h4>
                </div>

                <div className='inputs'>
                    <input type="text" placeholder="Enter Name Here" onChange={set_alert} />
                    <button className='submit' onClick={show_alert}>Submit</button>
                    <label htmlFor="modes">Dark Mode</label>
                    <input
                        type="checkbox"
                        id="modes"
                        onChange={Bg_Color}
                    />
                </div>
            </nav>
        </div>
    )
}