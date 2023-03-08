import React, { useState } from 'react'
import "./Form.css"
import { useForm } from './UseForm';
let initState = {
    name: "",
    age: "",
}
function Form() {
    const [value, card] = useForm(initState)
    console.log(value);
    const inputHeadel = (e) => {
        e.preventDefault();
        console.log(value);
    }

    return (
        <div>
            <div className="forms">
                <form onSubmit={inputHeadel}>
                    <input type="text"
                        placeholder="ism"
                        onChange={card}
                        value={value.ism}
                        name="ism" />
                    <br />
                    <input type="number"
                        onChange={card}
                        value={value.age}
                        name="age" />
                    <br />
                    <button>
                        click me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Form