import React from 'react'

const App = () => {
  return (
    <>
<form action="" className='flex flex-col w-1/3 gap-5'>
  <input type="text" placeholder='Enter note heading' className='text-amber-50 border p-3 rounded-[10px]' />
  <textarea name="" id="" placeholder='Enter details' className='text-amber-50 border pl-3 pb-5 pt-1 rounded-[10px]'></textarea>
  <button className='button'>Add</button>
</form>
    </>
  )
}

export default App