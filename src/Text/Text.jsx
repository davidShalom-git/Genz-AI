import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import './Text.css';
import { Link } from 'react-router-dom';
import user from '../Images/icons8-user-80.png';

const Text = () => {
    const [prm,setprm] = useState('');
    const [history,setHistory] = useState([]);
    let apiKey = "AIzaSyApSWw6KU2qGthpjN3BRgdRqJ8BqBC5KNk"
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-flash',
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 8192,
      responseMimeType: 'text/plain',
    };

    const prompt = (e) => {
      const values = e.target.value;
      setprm(values)
    };

    const run = async() =>{
      const chatSession = model.startChat({
        generationConfig,
        history: [],
      })

      const result = await chatSession.sendMessage(prm);
      let responseText = await result.response.text();
      responseText = responseText.split('.').join('./n');

      const newEntry = {prompt: prm, response: responseText};
      let updatedHistory = [...history,newEntry];
      setHistory(updatedHistory);
      localStorage.setItem('history',JSON.stringify(updatedHistory));
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
            <input type='text' className='form-control' placeholder='Enter the prompt' onChange={prompt} value={prm}></input>
          </div>
          <div className='col d-flex justify-content-center'>
            <button className='btn btn-dark w-75 mt-2' onClick={run}>Generate</button>
          </div>
        </div>
      </div>

      <div className='container-fluid d-flex justify-content-center'>
        <div className='row d-flex justify-content-center mt-5 w-100'>
          <div className='col-12 col-md-10 col-lg-8'>
          <ul>
            {history.map((entry, index) => (
              <div key={index} className='border border-black p-4 bg-dark mt-4'>
                <strong className='text-white'>Prompt</strong> <span className="d-block text-white">{entry.prompt}</span>
                <strong className='text-white'>Response</strong> <pre className="d-block text-white" dangerouslySetInnerHTML={{ __html: entry.response }}></pre>
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
