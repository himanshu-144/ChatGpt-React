
import './App.css';

import OptionSelection from './components/OptionSelection';
import dataAi from "./AiOptions/DataAi"
import Translation from './components/Translation';
import { useState } from 'react';
import { Configuration, OpenAIApi } from "openai";
function App() {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
    
 });
  const openai = new OpenAIApi(configuration);
  const[option, setOption] = useState({});
  const[input, setInput] = useState("");
  const[result, setResult] = useState("");

  const selectOption=(optionData)=>{
    setOption(optionData);
  };
  const doStuff =async()=>{
    
    let object ={...option, prompt :input}
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };

 
  console.log(Object.values(option).length);
  console.log(dataAi);
  return (
    <div className="App">
      {
        Object.values(option).length === 0 ? (
          <OptionSelection dataAi={dataAi} selectOption={selectOption} />
        ) : (
          <Translation doStuff={doStuff} setInput={setInput} result={result}/>
        )
      }
      
     
    </div>
  );
}

export default App;
