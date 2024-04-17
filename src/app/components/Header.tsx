'use client'

import React from 'react';
import { useSession } from 'next-auth/react';

function Header() {

  const {data: session} = useSession();

  return (
    <div className='py-4 px-12 text-white w-full h-full flex flex-row justify-between items-baseline'>
      <ul className='w-3/4 h-full flex flex-row justify-between mr-2 font-black'>
        <li className='nav-item'>
          <div>
            <p>Rhythm <span className='-ml-1 text-primary'>Radar</span></p>
          </div>
        </li>
        <li className='nav-item'>Music</li>
        <li className='nav-item'>Podcast</li>
        <li className='nav-item'>Radio</li>
      </ul>
      <>
        {session?.user !== undefined ? <div className='logged-in-button'> <p className='text-lg font-black'>{session?.user?.name ?? 'User'}</p> </div> : <a href='/api/auth/signin'><button className='nav-button'>Sign In</button></a>}
      </>
    </div>
  );
}

export default Header;
