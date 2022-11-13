import  React, { HTMLAttributes, ReactNode } from 'react'

export interface Props extends HTMLAttributes<HTMLInputElement>{
    //children: ReactNode;
    variant : 'Primary' | 'Secondary';
}

export const Input = ( {variant='Primary', ...props} : Props) => {
     return( 
        <input {...props} style = {{backgroundColor: variant === 'Primary'? 'blue' : 'gray',
        color: 'white',
        width: '300px',
        height: '20px',
        padding : 10,
        border: "none",
        borderRadius:"40px",
        
        }}>
         
        </input>
     )
}