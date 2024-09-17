import React from 'react';
// import bgImage from './assets/bg10.jpg'; 
import bg1 from './assets/PLBG1.jpeg';
import ToDo from './components/ToDo';
// import PendingList from './components/PendingList';

const App = () => {
  return (
    <div 
    className="bg-cover bg-center h-screen flex items-center justify-center"
    style={{ backgroundImage: `url(${bg1})` }} 
    >
      <ToDo/>
      {/* <PendingList/> */}
    </div>
  )
}

export default App
