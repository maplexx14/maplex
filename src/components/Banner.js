import React from 'react';


import { TypeAnimation } from 'react-type-animation';

import { motion } from 'framer-motion';

import {fadeIn} from '../variants'

const Banner = () => {
 
  return (
  <section className='section ' id='home'>
    <div className='container mx-auto'>
       
        <div className='xs:text-[120px]  lg:ml-[70px] akzext text-[35px] lg:text-[70px]
        font-semibold uppercase leading-[1] '>
          <motion.h1
           variants={fadeIn('up', 0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount:0.3}}
           className='main-text '>Разработка на 
          </motion.h1>
          <motion.div 
           variants={fadeIn('up', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount:0.3}}
           className='typing'>
          <TypeAnimation sequence={[
            'Python',
            2000,
            'JavaScript',
            2000,
            'React',
            2000,
            'Aiogram',
            2000,
            'Pyrogram',
            2000,
            'Disnake',
            2000,
            'telebot',
            2000,
          ]}
          speed={50}
          className=''
          wrapper='span'
          repeat={Infinity}/>
          </motion.div>
          <motion.div
           variants={fadeIn('up', 0.4)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: false, amount:0.4}}
           className='flex '>
            <button className='xs:text-[100px] lg:w-[500px] w-[400px] akzext btn-ram btn btn-lg  mt-[1em]'><a href='https://t.me/backtrackkkk' target='_blank'>Написать</a></button>
          </motion.div>
          </div>
 
        <div>   
        

        </div>
        <div className=' xs:mt-[-600px] ramka-1 hidden  lg:flex'>
          <p className='xs:w-[800px] xs:h-[800px]  w-[500px] h-[500px] rounded-full'></p>
        </div>
      </div>
    
  </section>);
};

export default Banner;
