

import  { useState, useEffect } from 'react';
export default function RandomJoke(){

    const [joke, setJoke] = useState({});

    let URL='https://official-joke-api.appspot.com/jokes/random';

  async  function getJoke(){
       let res=await fetch(URL)
         let data=await res.json();

        
         setJoke({setup: data.setup, punchline: data.punchline});
        
    }

    useEffect(()=>{
        
        async  function getJoke(){
            let res=await fetch(URL)
              let data=await res.json();
     
             
              setJoke({setup: data.setup, punchline: data.punchline});
             
         }
        getJoke();
    } ,[])
    
let style={ TextAlign: 'center', margin: '30rem'};
    return (
        <div>
            <h1 style={{marginLeft:'20rem'}} >Random Jokes</h1> <br />
            <h3>{joke.setup}</h3> <br /> <br />
            <span style={style} > {joke.punchline} </span> <br /><br />
            <button onClick={getJoke} style={{marginLeft:'30rem'}} >  Get joke</button>
        </div>
    )
}