import React, { useState } from 'react'

let getnames = {
    name: "",
    number: "",
    age: "",
    text: "",
}
function Contact() {
    const [value, setValue] = useState(getnames)
    return (
        <div>
            <form>
                <input type="text" placeholder="name" />
                <input type="number" placeholder="number" />
                <input type="number" placeholder="age" />
                <input type="text" placeholder="text" />
                <button>Click me</button>
            </form>
        </div>
    )
}

export default Contact
