import { LoaderCircleIcon } from 'lucide-react'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex dark:bg-zinc-950 justify-center items-center h-full'>
      <LoaderCircleIcon className='dark:text-white animate-spin h-8 w-8' />
    </div>      
  )
}

export default Loader

