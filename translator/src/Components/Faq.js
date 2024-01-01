import React,{useState} from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";

export default function Faq() {
    const [open,setOpen]=useState(0);
    const [alwaysOpen,setAlwaysOpen]=useState(true);

    const handleAlwaysOpen=()=> setAlwaysOpen((cur)=>!cur)
    const handleOpen = (value) => setOpen(open === value ? 0 : value);
   
  return (
    <div className='ml-10 mt-20 mb-32 mr-10 ' >
 <>
 <h1 className='font-bold text-3xl mb-10 text-blue-500'>FAQs</h1>
 <hr className='font-bold'></hr>
 <hr className='font-bold text-2xl  border border-slate-900'></hr>

      <Accordion open={alwaysOpen}>
        <AccordionHeader className='font-bold text-md' onClick={handleAlwaysOpen}>Q. What is a real-time translation app?

</AccordionHeader>

        <div className=''>
        <AccordionBody className="font-bold">
        A real-time translation app is a mobile or computer application that allows users to translate spoken or written language from one language to another instantly.
        </AccordionBody></div>
        <hr className='font-bold text-2xl  border border-slate-900'></hr>
      </Accordion>
      <Accordion className="font-bold text-sm font-sans" open={open === 1}>
        <AccordionHeader className='font-bold text-md' onClick={() => handleOpen(1)}>
         Q. How many Language are feature in it?
        </AccordionHeader>
        <AccordionBody className="font-bold text-sm font-sans">
        We have varity of language but our main focus is to translate english to hindi and vice-versa.
        </AccordionBody>
        <hr className='font-bold text-2xl  border border-slate-900'></hr>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader className='font-bold text-md' onClick={() => handleOpen(2)}>
        Q. Can I translate spoken language in real-time with this app?
        </AccordionHeader>
        <AccordionBody className="font-bold text-sm font-sans">
        Yes, in this real-time translation apps support speech-to-speech translation, allowing you to have conversations with people who speak a different language.
        </AccordionBody>
        <hr className='font-bold text-2xl  border border-slate-900'></hr>

      </Accordion>
    </>
    </div>
 
  )
}
