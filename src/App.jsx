import React, { useState } from 'react'

const App = () => {
  const [input, setinput] = useState("")
  const [textarea, settextarea] = useState("")
  const [content, setcontent] = useState([])
  return (
    <>
<form action="" className='flex flex-col w-1/3 gap-5' onSubmit={(e)=>{
  e.preventDefault()
  const newContent=[...content]
 newContent.push({input,textarea})
 setinput("")
 settextarea("")
 setcontent(newContent)
 console.log(content)

}}>
  <input type="text" placeholder='Enter note heading' className='input' value={input} onChange={(e)=>{
    setinput(e.target.value)
  }}/>
  <textarea name="" id="" placeholder='Enter details' className='textarea' value={textarea} onChange={(e)=>{
    settextarea(e.target.value)
  }}></textarea>
  <button className='button'>Add</button>
</form>
<div>
  
</div>
{
  content.map((item,idx)=>{
return(<div key={idx} className='bg-amber-400 flex'>
  <div>
  <h1 className='text-white' >{item.input}</h1>
  <p className='text-white'>{item.textarea}</p>
  </div>

</div>
)
  })
}
    </>
  )
}

export default App