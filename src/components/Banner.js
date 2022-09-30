import React from 'react';
import '../components/banner.css'
const Banner = () => {
    return (
        <div className='banner p-16 flex mx-2 '>
                <div className="avatar">
                  <div className="w-24 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
                  <img src="https://scontent-ccu1-1.xx.fbcdn.net/v/t39.30808-6/275461891_2751319798504248_4430658055035595913_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=YVFkLTzOeh0AX9aN3L2&_nc_ht=scontent-ccu1-1.xx&oh=00_AT_OgvEAVjw6Awq6LiZAKicncdfLrz6ayM9pJe8nq8VoSg&oe=633BB464" />
                 </div>
               </div>
            <div className=''>
             <h1 className='text-4xl ml-6 '>Hello <span className='font-bold'>Amirul</span> ,</h1>
             <p className='  ml-6'>Monitor your room anytime, anywhere</p>
            </div>
            
        
        </div>
    );
};

export default Banner;