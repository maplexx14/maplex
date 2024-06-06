import React from 'react';
import Raiden from '../assets/Raiden.png'
import pylogo from '../assets/pythonlogo.png'
import ReactLogo from '../assets/logo512.png';
import JS from '../assets/JavaScript.png'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

import {fadeIn} from '../variants'

const About = () => {
  
  return (<section className='' id='about'>
    
    <div className='container mx-auto text-[40px]'>
   
      <div className='akz text'>
      <div className='lg:ml-[30px]'>
      <motion.h1
           variants={fadeIn('right', 0.2)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once: true, amount:0.3}}className='text-ab'>Меня зовут <a className='akzext hello text-[#2777c1]'>Максим.</a></motion.h1>
        <motion.h2
         variants={fadeIn('right', 0.5)}
         initial='hidden'
         whileInView={'show'}
         viewport={{once: true, amount:0.4}}
         className='text-ab'>Я - <a className='akzext hello text-[#2777c1]'>разработчик</a> среднего уровня <br></br>
        Владею языками</motion.h2> 
      </div>
     
        <div className='lg:flex  langs lg:ml-[30px] mt-[70px]'>
        <motion.div
        variants={fadeIn('right', 1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount:0.4}}
        className='lg:w-[700px] w-[350px] h-[400px] mt-[20px] lg:h-[450px] outline rounded-[30px] bg-[#2777c1]/80  '><img className=' lg:ml-[220px] lg:mt-[20px] object-center  ml-[120px] max-w-[100px] max-h-[100px]  ' src ={pylogo} title='Python' alt='Python'/>
        <p className='akz p-[10px] '>Python - владею языком на среднем уровне. Разрабатываю скрипты и ботов.</p>
        </motion.div>
        <motion.div
        variants={fadeIn('right', 0.8)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount:0.4}}
        className='lg:ml-[50px] w-[350px] h-[400px] lg:w-[700px] lg:h-[450px] outline rounded-[30px] mt-[20px] bg-[#2777c1]/80 ' ><img className='lg:ml-[220px] lg:mt-[20px] ml-[120px] max-w-[100px] max-h-[100px] rounded-[15px] mr-[10px]' src ={JS}/>
        <p className='akz p-[10px]'>JavaScript - владею языком на среднем уровне.Создаю сайты, использую библиотеку <a className=' akzext text-[#0a6bfc]'>React</a></p></motion.div>
        </div>
       
       
      </div>
   
    </div>
    
    </section>
)};
        
export default About;
