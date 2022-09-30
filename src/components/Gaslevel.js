import React from 'react';

const Gaslevel = () => {
    return (
        <div>
            <div className='flex mx-auto justify-center items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-orange-600 font-bold">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
</svg>

                <h1 className='font-bold ml-6 text-xl' >Gas Level</h1>
            </div>
            <div className=''>
                <div className='flex justify-center'>
                <div className='methane m-4'>
                    <div className='flex items-center justify-around mb-8'>
                    <img className='w-16' src="https://i.ibb.co/xHZ3Yg2/methane-removebg-preview.png" alt="" srcset="" />
                    <h1 className='text-5xl text-orange-500 font-bold'>35</h1>
                  
                    </div>
                     <h1 className='font-bold text-2xl ml-24 mt-20'>METHANE</h1>
                </div>
                <div className='lpg m-4'>
                <div className='flex items-center justify-around mb-8'>
                    <img className='w-16' src="https://i.ibb.co/2n8jTHn/lpg-removebg-preview.png" alt="" srcset="" />
                    <h1 className='text-5xl text-orange-500 font-bold'>02</h1>
                  
                    </div>
                     <h1 className='font-bold text-2xl ml-40 mt-20'>LPG</h1>
                </div>
                <div className='ammonia m-4'>
                <div className='flex items-center justify-around mb-8'>
                    <img className='w-24' src="https://i.ibb.co/9bP3Hk3/ammonia-removebg-preview.png" alt="" srcset="" />
                    <h1 className='text-5xl text-orange-500 font-bold'>17</h1>
                  
                    </div>
                     <h1 className='font-bold text-2xl ml-24 py-6 mt-6 '>AMMONIA</h1>
                </div>
               
                </div>
                 <div className='flex justify-center'>
                 <div className='carbon m-4'>
                    <div className='flex items-center justify-around mb-8'>
                    <img className='w-20' src="https://i.ibb.co/Bw8VzFS/images-removebg-preview.png" alt="" srcset="" />
                    <h1 className='text-5xl text-orange-500 font-bold'>22</h1>
                  
                    </div>
                     <h1 className='font-bold text-2xl ml-24 mt-16'>CARBON</h1>
                </div>
               
                <div className='ammonia m-4'>
                <div className='flex items-center justify-around mb-8'>
                    <img className='w-24' src="https://i.ibb.co/9bP3Hk3/ammonia-removebg-preview.png" alt="" srcset="" />
                    <h1 className='text-5xl text-orange-500 font-bold'>07</h1>
                  
                    </div>
                     <h1 className='font-bold text-2xl ml-24 py-6 '>NITROGEN</h1>
                </div>
                <div className='sulfur m-4'>
                    <div className='flex items-center justify-around mb-8'>
                    <img className='w-20' src="https://i.ibb.co/KmGhRbX/sulfer-removebg-preview.png" alt="" srcset="" />
                    <h1 className='text-5xl text-orange-500 font-bold'>21</h1>
                  
                    </div>
                     <h1 className='font-bold text-2xl ml-24 mt-16'>SULFUR</h1>
                </div>

                 </div>
               
            </div>
        </div>
    );
};

export default Gaslevel;