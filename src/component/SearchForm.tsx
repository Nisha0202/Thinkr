import React from 'react'
import Form from 'next/form'
import { Search } from 'lucide-react'
import SearchReset from './SearchReset'

export default function SearchForm({ query }: { query?: string }) {
  return (
    <div className='w-full px-4'>
      <Form action="/" className='search-form input input-bordered flex items-center gap-2 bg-white py-2 px-4 max-w-md mx-auto rounded border-2'>

        <input
          name="query"
          defaultValue={query}
          className='search-input grow w-full focus:outline-none outline-none focus:ring-0 active:ring-0'
          placeholder='Seacrh Ideas'
        />

        {query ? <SearchReset /> : <button type="submit" className='flex items-center'><Search className='text-secondary size-6' /></button>}


      </Form>
    </div>

  )


}

