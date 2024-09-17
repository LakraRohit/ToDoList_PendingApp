import React, { useRef, useState } from 'react';
// import bg1 from '../assets/PLBG1.jpeg'

const PendingList = () => {

  const [list, setList] = useState([]);
  const inputRef = useRef();

  const Add = () => {
    const inputText = inputRef.current.value.trim();
    // console.log(inputText);

    if (inputText === "") {
      alert("Type in the Input bar to add task");
      return;
    }

    const listObjects = {
      id: Date.now(),
      text: inputText,
      done: false,
    };

    setList((prev) => [...prev, listObjects]);
    inputRef.current.value = "";
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      Add();
    }
  };

  const toggleDone = (id) => {
    setList((prev) =>
      prev.map((task) => 
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setList((prev) => 
      prev.filter((task) => task.id !== id)
    );
  };

  const pendingCount = list.filter((task) => !task.done).length;

  return (
    <div className='moving-gradient w-screen h-screen text-white flex flex-col items-center justify-center'>
      <div>
        <h1 className='font-mono text-2xl'>Pending List</h1>
      </div>
      <div className='h-96 w-96 bg-black/10 rounded-full mt-3 shadow-2xl flex flex-col'>
        <div className='ml-3 mt-3 font-extralight opacity-70'>
          Pending Items: <span>{pendingCount}</span>
        </div>

        {/* Outer Container */}
        <div className='mt-3 pl-3 flex flex-col h-72 overflow-hidden'>

          {/* List Items */}
          {list.map((task) => (
            <div key={task.id} className='mt-3 flex flex-row items-center justify-between'>
              <span className={`text-white ${task.done ? 'line-through' : ''}`}>{task.text}</span>
              <div className='flex space-x-2 pr-3'>
                <button 
                  className='text-sm bg-white/25 w-10 rounded-lg shadow-md text-white opacity-70'
                  onClick={() => toggleDone(task.id)}
                >
                  Done
                </button>
                <button 
                  className='text-sm bg-white/25 w-10 rounded-lg shadow-md text-white opacity-70'
                  onClick={() => deleteTask(task.id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
      {/* Ounter Container Ends  */}

      {/* Input Area  */}
      <div className='w-96 h-11 bg-white/20 mt-4 rounded-3xl shadow-2xl flex flex-row justify-center items-center'>
        <input ref={inputRef} onKeyDown={handleKeyPress}
          className='rounded-3xl w-80 pl-3 bg-white font-mono text-black outline-none bg-opacity-40'
          placeholder='Add Task...'
          type='text'
        />
      </div>
    </div>
  );
};

export default PendingList;
