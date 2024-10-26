import React, { useState } from 'react';
import './Text.css';
import { Link } from 'react-router-dom';
import user from '../Images/icons8-user-80.png';

const Text = () => {
    const [prm,setprm] = useState('');
    const [history,setHistory] = useState([]);

    
    const fetchAI21Response = async (userPrompt) => {
      try {
        const response = await fetch("https://api.ai21.com/studio/v1/chat/completions", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_AI21_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "model": "jamba-1.5-large",
            "messages": [{ role: "user", content: userPrompt }],
            "documents": [],
            "tools": [],
            "n": 1,
            "max_tokens": 2048,
            "temperature": 0.4,
            "top_p": 1,
            "stop": [],
            "response_format": { "type": "text" },
          }),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log("AI21 API Response:", data); // Log the entire response for debugging
        
        if (data.choices && data.choices.length > 0) {
          return data.choices[0].message.content;
        } else {
          throw new Error("No completions found in the response.");
        }
      } catch (error) {
        console.error("AI21 API Error:", error);
        return "Sorry, I couldn't process your request.";
      }
    };
    
    const handleInputChange = (e) => {
      setprm(e.target.value);
  };
  const run = async () =>{
    let responseText;
    responseText = await fetchAI21Response(prm);
    const newEntry = { prompt: prm,response: responseText };
    const updatedHistory = [...history, newEntry];
    setHistory(updatedHistory);
    localStorage.setItem('history', JSON.stringify(updatedHistory));
    setprm("");
  }


  return (
    <div>
     <header className='navbar bg-dark navbar-dark navbar-expand-sm p-3'>
        <h2 className='navbar-brand justify-content-start'><a href="" className="nav-link text-white fs-5">GenZ-AI</a></h2>
       <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#box"><span className='navbar-toggler-icon'></span></button>
        <div className='navbar-collapse collapse justify-content-center' id="box">
          <div className='navbar-nav'>
            <div className='nav-item'><a href="#" className="nav-link fs-5" id=""><Link className='text-white text-decoration-none fs-5' to="/">Home</Link></a></div>
            <div className='nav-item'><a href="#" className="nav-link" id="l2"><Link className='text-white text-decoration-none fs-5' to="/text">Text</Link></a></div>
            <div className='nav-item'><a href="#" className="nav-link fs-5" id="l5"><Link className='text-white text-decoration-none fs-5' to="/images">Image</Link></a></div>
            <div className='nav-item'><a href="#" className="nav-link fs-5" id=""><Link to="/about" className="text-white text-decoration-none">About</Link></a></div>
            <div className='nav-item'><a href="#" className="nav-link fs-5" id=""><Link to="/weather" className="text-white text-decoration-none">Weather</Link></a></div>
          </div>
        </div>
        <div className=''>
          <img src={user} alt="Robo-hand" height="50px" />
        </div>
      </header>

      <div >
      <div className='container mt-4 d-flex justify-content-center'>
        <div className='row w-50 '>
          <div className='col'>
            <h1 className='text-center mt-5 border border-black p-3'>Text GPT</h1>
          </div>
        </div>
      </div>

      <div className='container d-flex justify-content-center mt-3'>
        <div className='row '>
          <div className='col-12 col-md-12 col-sm-12 w-100'>
            <input type='text' className='form-control' placeholder='Enter the prompt' onChange={handleInputChange} value={prm}></input>
          </div>
          <div className='col d-flex justify-content-center'>
            <button className='btn btn-dark w-75 mt-2' onClick={run}>Generate</button>
          </div>
        </div>
      </div>

      
      <div className="container-fluid d-flex justify-content-center">
  <div className="row d-flex justify-content-center mt-5 w-100">
    <div className="col-12 col-md-10 col-lg-8">
      <ul className="list-unstyled">
        {history.map((entry, index) => (
          <div key={index} className="border border-dark bg-dark p-3 mt-2">
            <strong className='text-white' >Prompt:</strong> <span className="d-block text-white" >{entry.prompt}</span>
            <strong className='text-white' >Response:</strong> <pre className="d-block text-white">{entry.response}</pre>
          </div>
        ))}
      </ul>
    </div>
  </div>
</div>

    </div>
      </div>

  );
}

export default Text;
