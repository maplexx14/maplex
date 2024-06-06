import React from 'react';

import { FaGithub, FaTelegram } from 'react-icons/fa';

import {Link} from 'react-scroll'

const Header = () => {
  
  return <header className=''>
    <div className='xs:h-[110px] w-full  bg-[#2777c1] navick p-[5px]'>
    
        <div className=' xs:text-[50px] lg:text-[28px]  akzext flex justify-between items-center  justify-center xs:p-[20px] p-[5px] '>
          <a className='hidden  lg:flex  lg:ml-[60px]' href='#'>
            <a>maplex</a>
          </a>

      
        <div className=' xs:text-[35px] text-[10px] lg:text-[20px] pr-[12px] flex justify-between items-center text-2x1 h-[10px]'>
        <Link to='home' offset={-200} smooth={true} spy={true} activeClass='active' className='buts1 cursor-pointer mr-[8px] lg:mr-[40px] flex items-center justify-center'>
          <span>главная</span>
        </Link>
        
        <Link to='about' offset={-100 } smooth={true} spy={true} activeClass='active' className='buts2 cursor-pointer mr-[8px] lg:mr-[40px] flex items-center justify-center'>
          <span>о себе</span>
        </Link>
        <Link to='contact' offset={-20} smooth={true} spy={true} activeClass='active' className='buts3 cursor-pointer mr-[8px] lg:mr-[40px]  flex items-center justify-center'>
          <span>контакты</span>
        </Link>


        </div>
        <div className='flex  px-50px'>
          <a href=' https://github.com/maplexx14' target="_blank">
              <FaGithub id ='logo1' className='xs:w-[70px] xs:h-[70px] w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] mr-[8px] lg:mr-[25px]'/>
          </a>
          <a href='https://t.me/backtrackkkk' target="_blank">
              <FaTelegram id='logo2' className='xs:w-[70px] xs:h-[70px] w-[20px] h-[20px] lg:w-[40px] lg:h-[40px] mr-[8px] lg:mr-[25px]'/>
          </a>
        </div>
        
        </div>
     
     
    </div>
  </header>;
  
};

export default Header;
