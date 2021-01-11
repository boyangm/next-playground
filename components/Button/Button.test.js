import React from 'react'
import {UIButton} from './Button';
import {render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

it("loads correctly" , async () =>{
    const handleClick = jest.fn()
   const {queryByRole} = render(<UIButton onClick={handleClick} label="button"/>)
   const btn = queryByRole('button');
   expect(btn).toBeTruthy()
   fireEvent.click(btn)
   expect(handleClick).toHaveBeenCalledTimes(1)
   
})
