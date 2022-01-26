import {useState, useEffect } from "react";

type StorageProps = {
  key: string;
  task: string[],
}

function usePersistedStorage(StorageProps: {key, task}){
  const [state, setState] = useState(()=>{

    const storageValue = localStorage.getItem(key);

    if(storageValue) {
      return JSON.parse(storageValue);
    } else {
      return task;
    }
  });
  
  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(state));
  },[key, state]);
  
  return [state, setState];
}

export default  usePersistedStorage;