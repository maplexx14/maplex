import React from 'react';
import { BiHomeAlt, BiUser} from 'react-icons/bi'
import { BsClipboardData, BsBriefcase} from 'react-icons/bs'

import {Link} from 'react-scroll'
const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-100'>
    <div className='container mx-auto'>
      <div className='bg-black/15 h-[96px] backdrop-blur-2x1 rounded-full
      max-w-[460px] mx-auto px-5 flex justify-between items-center text-2x1'>
        <Link to='home' offset={-200} smooth={true} spy={true} activeClass='active' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt/>
        </Link>
        
        <Link to='about' offset={-100 } smooth={true} spy={true} activeClass='active' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser/>
        </Link>
        <Link to='services' offset={-20} smooth={true} spy={true} activeClass='active' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData/>
        </Link>
        <Link to='work' offset={5} smooth={true} spy={true} activeClass='active' className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsBriefcase/>
        </Link>
      </div>
        
    </div>
  </nav>
};

export default Nav;
