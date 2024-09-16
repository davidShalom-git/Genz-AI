import React from 'react'
import { Link } from 'react-router-dom'
import Robot from '../Images/Robot-Hand-PNG-HD.png';
import user from '../Images/icons8-user-80.png';
import './Home.css';


const Home = () => {
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

      <div className="container mt-5 bg-dark w-75" id="border1">
        <div className='row '>
          <div className="col-12 col-md-12 col-lg-12 p-5 ">
              <h1 className="text-white text-center d-flex justify-content-center">Artificial Intelligence</h1>
              <p className='text-white text-center fs-5'>New Era Begins Here...</p>
          </div>
        </div>
      </div>
      <div className='container mt-5 border border-black' id="border2">
        <div className='row d-flex justify-content-center'>
          <div className='col-12 col-md-12 col-lg-6 col-sm-12 '>
            <h1 className='text-dark text-center'>Intro</h1>
            <p className='text-dark p-3 text-justify mb-4'>Artificial Intelligence (AI) is a branch of computer science that aims to create machines capable of intelligent behavior, emulating cognitive functions such as learning, reasoning, problem-solving, perception, and language understanding. AI can be categorized into two main types: narrow AI, which is designed for specific tasks (like voice assistants and recommendation systems), and general AI, which is a theoretical concept where machines possess generalized human cognitive abilities.</p>
          </div>
          <div className='col-12 col-md-12 col-lg-6 bg-dark d-flex justify-content-center'>
            <img src={Robot} height="200px" className='rounded'  />
          </div>
        </div>
      </div>
      
      
      <div className='container mt-5 mb-5'>
        <div className='row d-flex justify-content-center' >
          <div className='col-12 col-md-12 col-lg-6  bg-dark'>
          <h4 className='text-white text-center mt-5'>Text Generator</h4>
          <p className='text-white p-3 text-justify mt-5'>Text generator AI refers to artificial intelligence systems that can produce human-like text based on input prompts. These models, like OpenAI's GPT series, use machine learning techniques to analyze vast amounts of text data and can generate coherent narratives, answer questions, assist in writing, and engage in conversation. They are widely used in content creation, customer support, and education but require careful oversight to ensure accuracy and appropriateness.It's essential to verify the information and capabilities of specific image generator AI tools.</p>
            <button className='btn btn-white text-dark mb-4 ms-3 bg-white'><Link to="/image"></Link>Go</button>
          </div>


          <div className='col-12 col-md-12 col-lg-6 col-lg-6 border border-black '>
            <h4 className='text-dark text-center mt-5'>Image Generator</h4>
          <p className='text-dark p-3 text-justify mb-4 mt-5'>Image generator AI refers to artificial intelligence systems that create images based on textual descriptions or other input data. These models, such as DALL-E and Midjourney, utilize deep learning techniques to generate visually coherent and contextually relevant images. They can produce artwork, photorealistic images, and even conceptual designs, offering significant implications for creative industries, design, and content creation. It's essential to verify the information and capabilities of specific image generator AI tools, as they may vary in quality and features.</p>
            <button className='btn btn-white text-white ms-3 mb-4 bg-dark'><Link to="/image" ></Link>Go</button>
          </div>
        </div>
      </div>

      <div className="container mt-5 bg-dark w-75" >
        <div className='row '>
          <div className="col p-5 ">
              <p className='text-white text-center ms-2  fs-5'><i>"The future is not about man versus machine, but man with machine." - Genz-AI</i></p>
          </div>
        </div>
      </div>

        <div className='container mt-5 bg-dark p-5' id="border1">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-12">
              <h4 className="text-white text-center p-3">About us</h4>
              <p className='text-white text-center'>
              Welcome to GenZAI! GenZAI is a cutting-edge open-source software designed to revolutionize the way you create text and images. By leveraging advanced generative AI models, GenZAI empowers developers, artists, and enthusiasts to generate high-quality content effortlessly. Whether you’re crafting compelling narratives or producing stunning visuals, GenZAI provides an intuitive and flexible platform to bring your cr
              eative ideas to life. Join our community-driven project and explore the limitless possibilities of generative AI with GenZAI.
              </p>
              <div className="d-flex justify-content-center mt-5">
              <button className='btn btn-white text-dark  ms-3 mb-4 bg-white'><Link to="/image" ></Link>More</button>
              </div>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Home