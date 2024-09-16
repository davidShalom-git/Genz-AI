import React from 'react'
import { Link } from 'react-router-dom'
import {useState, useRef } from 'react';
import user from '../Images/icons8-user-80.png'

const Image = () => {
  const [image, setImage] = useState('/');
  const inputRef = useRef(null);

  const createImage = async () => {
    if (!inputRef.current.value) {
      return;
    }
    try {
      const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer sk-QzYhWOMAKoWp9IxdI5U21eXwOpaokzn9uu6hBaI8yAah2qlW',
        },
        body: JSON.stringify({
          text_prompts: [
            {
              text: `${inputRef.current.value}`,
            },
          ],
          cgf_scale: 7,
          height: 1024,
          width: 1024,
          steps: 30,
          samples: 1,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message);
      }

      const data = await response.json();
      if (data.artifacts && data.artifacts.length > 0 && data.artifacts[0].base64) {
        const imageURL = `data:image/png;base64,${data.artifacts[0].base64}`;
        setImage(imageURL);
      } else {
        throw new Error('No Image Generated');
      }
    } catch (e) {
      console.error('Error Generating: ', e);
    }
  };


  return(
    <>
        <header className='navbar bg-dark navbar-dark navbar-expand-sm p-3 rounded'>
      <h2 className='navbar-brand justify-content-start'>
        <a href="/" className="nav-link text-white fs-5">GenZ-AI</a>
      </h2>
      <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#box">
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='navbar-collapse collapse justify-content-center' id="box">
        <div className='navbar-nav'>
          <div className='nav-item'>
            <Link className='text-white text-decoration-none fs-5 nav-link' to="/">Home</Link>
          </div>
          <div className='nav-item'>
            <Link className='text-white text-decoration-none fs-5 nav-link' to="/text">Text</Link>
          </div>
          <div className='nav-item'>
            <Link className='text-white text-decoration-none fs-5 nav-link' to="/images">Image</Link>
          </div>
          <div className='nav-item'>
            <Link className='text-white text-decoration-none fs-5 nav-link' to="/about">About</Link>
          </div>
        </div>
      </div>
      <div>
        <img src={user} alt="Robo-hand" height="50px" />
      </div>
    </header>

      <h1 className="text-center mt-5">Generate the Image you like......</h1>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center">
              <input
                className="form-control mt-5 w-50"
                placeholder="Enter the Text"
                ref={inputRef}
              />
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-dark mt-3" onClick={createImage}>
                Generate
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-center w-75">
      <div className="row">
        <div className="col-12 col-md-12 border border-black rounded p-2 mt-5">
          <div>
            <img src={image} alt="Generated" height="450px" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Image