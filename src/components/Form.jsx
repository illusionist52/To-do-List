import React from 'react'

function Form() {
  
  return (
    <form className='bg-purple-100 flex items-center px-4 rounded-lg py-2'>
      <label htmlFor="" className='text-2xl font-semibold'>Add a task:</label>
      <input className='rounded-xl border-0 bg-white' type="text" />
      <button className='px-3 py-2 text-xl font-bold bg-purple-400 text-white rounded-xl' type='submit'>Add</button>
    </form>
  )
}

export default Form