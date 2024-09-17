import React, { useRef, useState } from 'react';
import calClr from '../assets/calClr.png';
import ToDoItems from './ToDoItems';


const ToDo = () => {

  const [toDoList, setToDoList] = useState([]);

  const inputRef = useRef();



  const add = ()=>{

    const inputText = inputRef.current.value.trim();
    // console.log(inputText); //Testing

    if(inputText === ""){ // if  Input is empty and add button is clicked
      return null;
    }

    //New ToDo Object
    const newToDo = {
      id:Date.now(),
      text:inputText,
      isComplete: false,
    }


    setToDoList((prev)=> [...prev, newToDo]); 
    inputRef.current.value = ""; // clearing the input field

  }



  const deleteToDo = (id) =>{
    setToDoList((prev)=>{
      return prev.filter((todo)=>todo.id !==id)
    })
  }


  const toggle = (id) => {
    setToDoList((prvToDo) => {
      return prvToDo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };
  


  // useEffect(()=>{
  //   console.log(toDoList);
  // },[toDoList])

  

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      add();
    }
  };





  return (



    // to do list container.......................

    <div className="bg-slate-200/30 shadow-slate-700 shadow-2xl 
    place-self-center w-11/12 max-w-3xl flex flex-col p-7 min-h-[550px] rounded-3xl ">



        {/* To Do List heading ............................*/}

        <div className='flex items-center mt-2 gap-2'>
            <img className='w-10' src={calClr} alt=''/>
            <h1 className=' text-3xl font-thin'>To Do List :</h1>
        </div>



        {/* Adding Button for adding Task.................................. */}

        <div className='flex items-center my-7 bg-gray-300/50 rounded-md'>
            <input  ref={inputRef} onKeyDown={handleKeyPress} className='bg-transparent border-0 outline-none font-normal flex-1 h-10 pl-2 placeholder:pl-2 shadow-lg  shadow-slate-300' type='text' placeholder='Add your task'/>
            <button onClick={add}  className='font-normal border-none  rounded-xl bg-blue-500/80 text-white h-10 w-20 cursor-pointer shadow-xl'>Add Task</button>
        </div>



        {/* To Do List ....................................................*/}

        <div>
          {toDoList.map((item, index)=>{
            return <ToDoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteToDo={deleteToDo} toggle={toggle}/>
          })}
        </div>


        {/* <div> // Testing
            <ToDoItems text="Learn React"/>
            <ToDoItems text="Learn Tailwind Css"/>
        </div> */}

        
    </div>
  )
}

export default ToDo
