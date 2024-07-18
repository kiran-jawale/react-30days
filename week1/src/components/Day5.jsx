
//fetching random data, custom hook, rendering response

import React, {  useState } from 'react';
import useFetchedData from '../hooks/useFetchedData';

const Day5 = () => {

  const [ data, loading, error] = useFetchedData('https://api.freeapi.app/api/v1/public/randomjokes');
  
  if(loading) return (<div><h1>Loading...</h1></div>);

  if(error) return (<div><h1>ERR..</h1></div>)

  return (
    <div className='bg-zinc-800 p-2 text-white font-sans font-semibold h-screen overflow-scroll w-full'>
        <ul className='list-none p-2 flex w-96 flex-col items-center justify-center gap-2'>
          {data.map( (joke) => (
            <li className='m-1' key={joke.id}>
              <h3>{joke.content}</h3>
            </li>
          ) )}
        </ul>
    </div>
  )
}

export default Day5;