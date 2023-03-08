import React, { useEffect } from 'react'
import { useForm } from '../form/UseForm'

const objectApp={
    name: "",
    Number: "",
    email: "",
    password: "",
    phone: "",
    Location: "",
    LastName:"",

}
function Drawer ()

{
    const [ value, pocketInfo ] = useForm( objectApp )
    const HandelArea = ( e ) =>
    {
        e.preventDefault();
        console.log( value );
    }
    useEffect(()=>{
        console.log("salom");
    },[value.name])
    return (
        <form onSubmit={HandelArea}>
            <input type="text" placeholder='text' onChange={pocketInfo} name="name" value={value.name} />
            <input type="number" placeholder='number' onChange={pocketInfo} name="Number" value={value.Number} />
            <input type="email" placeholder='email' onChange={pocketInfo} name="email" value={value.email} />
            <input type="password" placeholder='email' onChange={pocketInfo} name="password" value={value.password} />
            <input type="phone" placeholder='phone' onChange={pocketInfo} name="phone" value={value.phone} />
            <input type="text" placeholder='addres' onChange={pocketInfo} name="Location" value={value.Location} />
            <input type="text" placeholder='LastName' onChange={pocketInfo} name="LastName" value={value.LastName} />
            <button>click it</button>
        </form>
    )
}

export default Drawer