'use client'
import {X} from 'lucide-react'
import React from 'react'

export default function() {

    const reset =()=>{
        const form = document.querySelector('.search-form') as HTMLFormElement

        if(form){
            form.reset();
        }

    }


  return (
    <div>
        <button type="reset" className='flex items-center' onClick={reset}><X className='text-black-200 size-4'/></button> 
    </div>
  )
}
