'use client'
import React from 'react'
import {X} from 'lucide-react'


export default function() { 
    const reset =()=>{
        const form = document.querySelector('.search-form') as HTMLFormElement; 
        console.log(form);
        if(form){
            const input = form.querySelector('input[name="query"]') as HTMLInputElement;
            console.log(input); // this works
            if (input){
                input.value = ''; // this doesnt
            } 
            form.reset(); //this doesnt
          
        }

    }

  return (
        <button type="reset" className='flex items-center' onClick={reset}><X className='text-black-200 size-4'/></button> 
   
  )
}
