import { useState } from 'react';
import ItemList from './ItemList';
const ResCategory = ({ data, showItems, setshowIndex, dummy }) => {
  // console.log(dummy);

  const handleClick = () =>{
  
    setshowIndex();

  }
  

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
        
        <div className='flex justify-between cursor-pointer' onClick={handleClick}>
        <span className="font-bold text-large">{data.title} ({data.itemCards.length})</span>
        <span >🔽</span>
        </div>
       { showItems &&  <ItemList items={data.itemCards} dummy={dummy}/>}
      </div>
      {/* accordian body */}
   
    </div>
  );
};

export default ResCategory;
