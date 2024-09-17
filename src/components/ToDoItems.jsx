import React from 'react';
import check from '../assets/check.png';
import dustbin from '../assets/dustbin.png';
import edit from '../assets/edit.png';
import uncheck from '../assets/uncheck.png';


const ToDoItems = ({text, id, isComplete, deleteToDo, toggle}) => {

  return (

    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ? check:uncheck} alt='' className='w-7 opacity-70'/>
            <p className={`font-normal ml-2 text-[17px] decoration-slate-500 ${isComplete?"line-through font-extralight italic":""}`}>{text}</p>
        </div>
        <img  className="w-7 cursor-pointer opacity-70 " src={edit} alt=''/>
        <img onClick={()=>{deleteToDo(id)}} src={dustbin} alt='' className="w-7 cursor-pointer opacity-70" />
      
    </div>
  )
}

export default ToDoItems
