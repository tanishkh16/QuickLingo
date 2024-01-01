import { useEffect, useState } from 'react'
import React  from 'react'
import Navbar from './Navbar'
import { RiArrowDownSLine} from 'react-icons/ri';
import { BsFillMicFill } from 'react-icons/bs';
import { RxSpeakerLoud } from 'react-icons/rx';
import Footer from './Footer';
import axios from 'axios';
import { set } from 'mongoose';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'



export default function Main() {
  const [language,setLanguage]=useState('Auto-Detect');
  const [option,setOption]=useState([]);
  const [to,setTo]=useState('en');
  const [from,setFrom]=useState('en');
  const [input,setInput]=useState('');
  const [output,setOutput]=useState('');
  const [words,setWords]=useState('');
  const [meanings,setMeanings]=useState('');
  const [example,setExample]=useState('');

 
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening(
      
      // { continuous: true }
      );
   
    
  }


  // if (!browserSupportsSpeechRecognition) {
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }

  const Click = async () => {
    console.log('clicked')
    const params = new URLSearchParams();
    params.append('to[0]',"hi");
    params.append('api-version','3.0');
    params.append('profanityAction','NoAction');
    params.append('textType','plain');

    axios.post('https://microsoft-translator-text.p.rapidapi.com/translate',params,{
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      }
    }).then(res=>{
      console.log(res.data);
    }).catch(err=>{console.log(err)})
const options = {
  method: 'POST',
  url: 'https://microsoft-translator-text.p.rapidapi.com/translate',
  params: {
    'to[0]': `${to}`,
    'api-version': '3.0',
    profanityAction: 'NoAction',
    textType: 'plain'
  },
  headers: {
    'content-type': 'application/json',
    'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
    'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
  },
  data: [
    {
      Text:  `${input}`
    }
  ]
};

try {
	const response = await axios.request(options);
	console.log("data",response.data[0].translations[0].text);
  setOutput(response.data[0].translations[0].text);
} catch (error) {
	console.error(error);
}
// const encodedParams = new URLSearchParams();
// encodedParams.set('q', 'hello');
// encodedParams.set('target', 'en');
// encodedParams.set('source', 'hi');

// const options = {
//   method: 'POST',
//   url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
//   headers: {
//     'content-type': 'application/x-www-form-urlencoded',
//     'Accept-Encoding': 'application/gzip',
//     'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
//     'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
//   },
//   data: encodedParams,
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

  }

  const translator=()=>{
    const params = new URLSearchParams();
    params.append('q',input);
    params.append('source',from);
    params.append('target',to);
    params.append('api_key','xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');
 axios.post('https://libretranslate.de/translate',params,{
  headers:{'accept':'application/json',
  'Content-Type': 'application/x-www-form-urlencoded'
}
 }
 ).then(res=>{
  console.log(res.data);
  setOutput(res.data.translatedText);
 }).catch(err=>{console.log(err)})  
  }

  useEffect(()=>{
    axios.get('https://libretranslate.de/languages',
    {headers:{'accept': 'application/json'}}).then(res=>{
      console.log(res.data)
      setOption(res.data) 
    }).catch(err=>{ console.log(err)})

  },[])

  const detectLanguages = async () => {
    const options = {
      method: 'POST',
      url: 'https://microsoft-translator-text.p.rapidapi.com/Detect',
      params: {
        'api-version': '3.0'
      },
      headers: {
        'content-type': 'application/json',
        'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      },
      data: [
        {
          Text: `${input}`
          
        }
      ]
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data)
      console.log(response.data[0].language);
      setFrom(response.data[0].language);
      if(response.data[0].language==='en'){
        setLanguage("English")
      }
      if(response.data[0].language==='hi'){
        setLanguage("Hindi")  
      }
     
    } catch (error) {
      console.error(error);
    }
  }

  const fetchLanguages = async () => {
    const options = {
      method: 'GET',
      url: 'https://microsoft-translator-text.p.rapidapi.com/languages',
      params: {
        'api-version': '3.0',
        "scope":'transliteration'
      },
      headers: {
        'Accept-Language': 'en',
        'X-RapidAPI-Key': '3ff2745e58msh122fc74545f53b2p179ce0jsnc6119df0ab72',
        'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
      }
    };
    
    try {
      const response = await axios.request(options);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
 useEffect(()=>{
  detectLanguages();
  
 
 },[input])
 

 useEffect(() => {
  setInput(transcript)
 }, [transcript])

const meaning= async()=>{
  axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`,
    {headers:{'accept': 'application/json'}}).then(res=>{
      console.log(res.data[0].meanings[0].definitions[0].definition)
      setMeanings(res.data[0].meanings[0].definitions[0].definition)
      console.log(words)
      console.log(res.data[0])
      setExample(res.data[0].meanings[0].definitions[0].example)
      if(res.data[0].meanings[0].definitions[0].definition===undefined){
        setMeanings("No word exist")
      }
      if(res.data[0].meanings[0].definitions[0].example===undefined){
        setExample("No example found")
      }
      // setOption(res.data) 
    }).catch(err=>{ console.log(err)})
    





}

useEffect(()=>{
  meaning();
},[])

const listen=()=>{
  console.log('hekoo')
  const text=`${input}`;

  const value=new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(value);

}
  return (
    <div>
      <Navbar/> 
     <div>
      <div className='mt-40 border mx-20 h-20 flex justify-around' >
        <div className='-ml-28 relative mt-4 px-2 '>
          
       
          <h1 className='font-bold'>From ({from}) :
          <select className="border border-slate-900 font-bold ml-2 rounded-md h-10" onChange={e=>setFrom(e.target.value)}>
          <option>{language}</option>
</select></h1>
      
        </div>



        <div className='px-4 justify-center'>
<div className="mt-4 font-bold">
          To ({to}) : 
           <select className="border border-slate-900 font-bold ml-2 rounded-md h-10" onChange={e=>setTo(e.target.value)}>
           {option.map(e=><option  key={e.code} value={e.code}>{e.name}</option>)}

</select>
          </div>
       
        </div>
        </div>
    

     </div>
     <div className='flex justify-between'>
     <div className='ml-20 border border-slate-100'>


      <textarea class=" p-2 resize-none focus:border-none outline-none" placeholder='Type your text here...' rows="10" cols="70"
      onChange={(e)=>{setInput(e.target.value)}} value={input}></textarea>


<div className='flex'>
<div className='mb-2 mr-6 ml-4'>
  <button onClick={startListening}>
      <i className='h-40 w-10'><BsFillMicFill/></i></button>
      </div>
     
      </div>
     </div>
     <div>
     </div>
     <div class="w-1 h-20 bg-gray-300 "></div>
     <div className='border  mr-40'>
      <textarea class="p-2 resize-none mr-20 focus:border-none outline-none" placeholder='...' rows="10" cols="59" value={output}/>
      <div className='flex ml-2'>
      <button onClick={listen}>
        <i className='h-40 w-10'><RxSpeakerLoud/></i></button>
      </div>
     </div>
     </div>
     <div className='flex justify-center mt-10'>
      <button className='border border-slate-900 bg-cyan-500 text-slate-50 rounded-md hover:bg-cyan-600 h-10 w-20' onClick={Click} >
        Translate</button>
       
        
     </div>
     <div className='border border-slate-900 mt-10 ml-8 p-2 mr-8'><h1 className='text-serif font-bold text-xl mb-2 mt-2'>Dictionary Features</h1></div>
     <div className="grid grid-cols-2 ">
      <div className="border ml-8 "> 
      <textarea placeholder='Enter your Word here...' value={words}  onChange={(e)=>{setWords(e.target.value)}} className='border border-white p-2 resize-none' rows="10" cols="75"></textarea></div>
      <div className="p-2 border mr-8"><h1 className='font-bold text-serif text-lg' >Meaning:</h1><h1>{meanings}</h1>
      <br></br><h1 className='font-bold text-serif text-lg'>Example:</h1><h1>{example}</h1></div>
<div className='flex justify-center'>
      <button onClick={meaning} className=' ml-96 -mr-56 mt-10 bg-cyan-500 hover:bg-cyan-600 border p-2 rounded-lg text-white'>Meaning</button>
      </div>
    </div>
     <div className='flex justify-center mt-8'>
  
      </div>
    </div>
  )
}
