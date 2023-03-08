import React from 'react'
import { useForm } from '../form/UseForm'

const objectInformation = {
    name: "",
    LastName: "",
    email: "",
    password: "",
}

function Concat ()
{
    const [ value, restoreInfo ] = useForm( objectInformation )
    const infotmationHeandel = ( e ) =>
    {
        e.preventDefault();
        console.log( value );
    }

    return (
        <form onSubmit={ infotmationHeandel }>
            <input type="text" placeholder='text' onChange={ restoreInfo } name="name" value={ value.name } />
            <input type="number" placeholder='number' onChange={ restoreInfo } name="LastName" value={ value.LastName } />
            <input type="email" placeholder='email' onChange={ restoreInfo } name="email" value={ value.email } />
            <input type="password" placeholder='password' onChange={ restoreInfo } name="password" value={ value.password } />
            <button>click it</button>
        </form>
    )
}

export default Concat