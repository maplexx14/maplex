import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';

const App = () => {
  const handlerScrollUp = () => {
		if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
			window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
		}
	}
 
  return (
    <div className='bg-fixed bg-site bg-cover '>
     
      <div className='lg:h-full w-full lg:backdrop-blur-2xl '>

        <Header />
        <Banner />
        <About />

        <div >
          <Contact />
          <div className='sticky bottom-0 btn-scroll-up flex w-[50px] h-[50px] justify-center items-center rounded-full cursor-pointer 'onClick={handlerScrollUp}>&#9650;</div>
        </div>
        
        
      </div>
    
     </div>

  );
};

export default App;
