import React, { Children } from 'react'

export const Button = ({onClick=null ,  Children=null}) => (
    <button onClick={onClick}>Sign in Wtih Google</button>
)
