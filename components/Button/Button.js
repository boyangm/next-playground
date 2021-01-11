import React from 'react'
import Button from 'react-bootstrap/Button'

export const UIButton = ({label, ...props}) => {

    const handleClick =() =>{
        return true
    }
    return (
        <Button onClick={handleClick} {...props} data-testid="button">
        {label}
        </Button>
    )
}


