import { useState, useEffect } from 'react'


export default function SignUpForm () {

    

    useEffect(() => {
        console.log('test')
    }, [])

    let [email, setEmail] = useState(null)
    let [firstName, setFirstName] = useState(null)
    let [lastName, setLastName] = useState(null)
    let [password, setPassword] = useState(null)

    const signUpFunction = () => {
        console.log('what')
    }
return (
    <form onSubmit={signUpFunction}>
        <input onChange={(e)=>{setEmail(e.target.value)}} type='email' placeholder='Please Provide Your Email'/>
        <input onChange={(e)=>{setFirstName(e.target.value)}} placeholder='Please Provide Your First Name'/>
        <input onChange={(e)=>{setLastName(e.target.value)}} placeholder='Please Provide Your Last Name'/>
        <input onChange={(e)=>{setPassword(e.target.value)}} type='password' placeholder='Please Provide Your Password'/>
        <button type='submit'>Submit</button>
    </form>
)
}