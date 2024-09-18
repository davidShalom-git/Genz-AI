import React from 'react'
import {Link} from 'react-router-dom';
import user from '../Images/icons8-user-80.png';
import Robot2 from '../Images/Robot-2.png';
import Deepak from '../Images/deepak.png';
import David from '../Images/david.png';
import adhi from '../Images/adh.png';
import vetri from '../Images/vet.png';
import './About.css';

const About = () => {
  return (
    <>
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

      
      <div className="container mt-5 bg-dark w-75" id="border">
        <div className='row '>
          <div className="col p-5 ">
              <h1 className="text-white text-center ">Genz-AI</h1>
              <p className='text-white text-center fs-5'>New Era Begins And New Life Begins Here...</p>
          </div>
        </div>
      </div>


      <div className='container bg-dark mt-5 'id="border">
        <div className='row'>
          <div className='col-12 col-md-12 col-lg-6 mt-3 '>
            <h1 className='text-white text-center mt-4'>Intro</h1>
            <p className='text-white p-3 text-justify mb-4'>Welcome to GenZAI! GenZAI is a cutting-edge open-source software designed to revolutionize the way you create text and images. By leveraging advanced generative AI models, GenZAI empowers developers, artists, and enthusiasts to generate high-quality content effortlessly. Whether you're crafting compelling narratives or producing stunning visuals, GenZAI provides an intuitive and flexible platform to bring your cr eative ideas to life. Join our community-driven project and explore the limitless possibilities of generative AI with GenZAI.</p>
          </div>
          <div className='col ms-3 d-flex justify-content-center' id="border2">
            <img src={Robot2} height="280px" className='rounded'  />
          </div>
        </div>
      </div>

      <div className="container mt-5 bg-dark w-75" >
        <div className='row '>
          <div className="col p-5 ">
              <h1 className="text-white text-center">Our Works......</h1>
              <p className='text-white text-center fs-5'>New Era Begins And New Life Begins Here...</p>
          </div>
        </div>
      </div>
      
      <div className='container mt-5'>
        <div className='row d-flex justify-content-center' >
          <div className='col-12 col-md-12 col-lg-6  bg-dark'>
          <h4 className='text-white text-center mt-5'>Text Generator</h4>
          <p className='text-white p-3 text-justify mt-5'>Text generator AI refers to artificial intelligence systems that can produce human-like text based on input prompts. These models, like OpenAI's GPT series, use machine learning techniques to analyze vast amounts of text data and can generate coherent narratives, answer questions, assist in writing, and engage in conversation. They are widely used in content creation, customer support, and education but require careful oversight to ensure accuracy and appropriateness.It's essential to verify the information and capabilities of specific image generator AI tools.</p>
          <button className='btn btn-white text-dark mb-4 ms-3 bg-white'><Link to="/text" className='text-dark text-decoration-none fs-6'>Go</Link></button>
          </div>


          <div className='col-12 col-md-12 col-lg-6 col-lg-6 border border-black'>
            <h4 className='text-dark text-center mt-5'>Image Generator</h4>
          <p className='text-dark p-3 text-justify mb-4 mt-5'>Image generator AI refers to artificial intelligence systems that create images based on textual descriptions or other input data. These models, such as DALL-E and Midjourney, utilize deep learning techniques to generate visually coherent and contextually relevant images. They can produce artwork, photorealistic images, and even conceptual designs, offering significant implications for creative industries, design, and content creation. It's essential to verify the information and capabilities of specific image generator AI tools, as they may vary in quality and features.</p>
          <button className='btn btn-white text-white ms-3 mb-4 bg-dark'><Link to="/images" className='text-white text-decoration-none fs-6'>Go</Link></button>
          </div>
        </div>
        
      </div>

      <h1 className='text-center mb-5 mt-5'>GenZ-AI Developers</h1>

      <div className='container mb-5'>
        <div className='row'>
         <div className='col-12 col-md-6 border border-black'>
          <div className='d-flex justify-content-center mt-3'>
            <img src={David} height="450px"></img>
          </div>
          <div className='d-flex justify-content-center'>
            <h5 className='text-center bg-dark text-white w-25 mt-4 justify-content-center p-2'>David</h5>
          </div>
         </div>
         <div className='col-12 col-md-6 border border-black p-3 bg-dark'>
          <div className='d-flex justify-content-center'>
            <img src={Deepak} height="450px"></img>
          </div>
          <div className='d-flex justify-content-center'>
            <h5 className='text-center bg-dark text-white w-25 mt-4 justify-content-center p-2'>Deepak</h5>
          </div>
         </div>
         <div className='col-12 col-md-6 border border-black mt-3 p-3 bg-dark'>
          <div className='d-flex justify-content-center'>
            <img src={adhi} height="450px"></img>
          </div>
          <div className='d-flex justify-content-center'>
            <h5 className='text-center bg-dark text-white w-25 mt-4 justify-content-center p-2'>Adhithiya</h5>
          </div>
         </div>
         <div className='col-12 col-md-6 border border-black mt-3 p-3 '>
          <div className='d-flex justify-content-center'>
            <img src={vetri} height="450px"></img>
          </div>
          <div className='d-flex justify-content-center'>
            <h5 className='text-center bg-dark text-white w-25 mt-4 justify-content-center p-2'>Vetrivel</h5>
          </div>
         </div>
        </div>
      </div>

       
      <div className="container mt-5 bg-dark mb-3 w-75" id="border">
        <div className='row '>
          <div className="col p-5 ">
              <h1 className="text-white text-center">Thank You!!!!!</h1>
          </div>
        </div>
      </div>

    </>
  )
}

export default About