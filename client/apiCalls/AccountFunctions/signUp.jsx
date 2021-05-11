import React from 'react'
import useSignup from '@bigcommerce/storefront-data-hooks/use-login'

export function SignUpFunction (e, email, firstName, lastName, password){
    useEffect(() => {
        console.log('test')
    }, [input])
    e.preventDefault()
    console.log(`${email} ${firstName} ${lastName} ${password}`)
    const signup = useSignup()
    let data = signup({
        email,
        firstName,
        lastName,
        password,
    })
    return console.log(data) 
}