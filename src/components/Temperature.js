import React from 'react';

const Temperature = () => {
    return (
        <div className='temperature p-4'> 
            <div className='flex justify-evenly items-center'>
                
                <h1 className='text-xl ml-2 font-bold'>Sep 30 , 2022</h1>
                <h1  className='text-3xl ml-2 text-orange-400'>Sunny</h1>
                
                <img className='ml-8 h-20' src="https://i.ibb.co/Lrx8kyg/4102326-cloud-sun-sunny-weather-icon.png" alt="" srcset="" />
              

            </div>
             <div className=' mx-auto flex justify-between p-4'>
              <div>
                 <h1 className='text-3xl font-bold'>24° C</h1>
                 <h2 className='text-2xl text-orange-500'>Indoor</h2>
               </div>
              <div>
                 <h1 className='text-3xl font-bold'>29° C</h1>
                 <h2 className='text-2xl text-orange-500'>Outdoor</h2>
              </div>
              <div>
                 <h1 className='text-3xl font-bold'>22° C</h1>
                 <h2 className='text-2xl text-orange-500'>Optimal</h2>
             </div>
       </div>
        </div>
       
    );
};

export default Temperature;