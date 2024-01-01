import React from 'react'
import Typed from 'typed.js';
import { Link } from 'react-router-dom';

export default function About() {
    const el = React.useRef(null);
    React.useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ['<i>Translation App.</i>'],
          typeSpeed: 50,
          loop:true
        });
    
        return () => {
          typed.destroy();
        };
      }, []);
  return (
    <div className='pt-24 flex justify-between mb-10 bg-gradient-to-l from-sky-400 to-cyan-300 pb-10'>
        <div>
<h1 className='ml-28 mt-24 font-bold text-6xl font-serif text-blue-500'><span className="" ref={el}/></h1>
<h1 className='ml-28 mt-10 font-serif text-xl'>Unlock a world of understanding with our seamless and accurate <br></br>
    translation app.</h1>
   
<button className='bg-sky-400  border rounded-3xl text-slate-50 w-20 h-10 ml-28 mt-10 font-serif'> <Link to='/main'>Use Now</Link></button>

        </div>
      
<div class="relative">
  <img src="https://media.istockphoto.com/id/1276702405/photo/concept-of-translation-from-different-languages-on-an-abstract-world-map.jpg?s=170667a&w=0&k=20&c=yEPXUtlfIPwcjO2VRsd3ekHb4G_Qf2Ud4N6pUmcVCh8=" alt="Your Image" className="relative mt-10 mr-10 border  border-cyan-300 rounded-2xl z-minus-one" />
</div>

    </div>
  )
}
