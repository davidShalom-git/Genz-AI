import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import user from '../Images/icons8-user-80.png';

const News = () => {
    const [topic, setTopic] = useState('');
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem('newsHistory')) || []);

    const handleTopicChange = (e) => {
        setTopic(e.target.value);
    };

    const fetchNewsData = async (topic) => {
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/everything?q=${topic}&apiKey=5e97105f83bf4c019ca38751f659cb89`
            );
            const articles = response.data.articles.slice(0, 3);
            return articles.map(article => `- ${article.title}`).join('\n');
        } catch (error) {
            console.error("News API Error:", error);
            return "Could not retrieve news data.";
        }
    };

    const fetchAndSaveNews = async () => {
        const newsData = await fetchNewsData(topic);
        const newEntry = { prompt: topic, response: newsData };
        const updatedHistory = [...history, newEntry];
        setHistory(updatedHistory);
        localStorage.setItem('newsHistory', JSON.stringify(updatedHistory));
        setTopic(''); // Clear the topic input after submission
    };

    return (
        <>
            <header className='navbar bg-dark navbar-dark navbar-expand-sm p-3'>
                <h2 className='navbar-brand justify-content-start'>
                    <a href="" className="nav-link text-white fs-5">GenZ-AI</a>
                </h2>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#box">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse justify-content-center' id="box">
                    <div className='navbar-nav'>
                        <div className='nav-item'>
                            <a href="#" className="nav-link fs-5" id="">
                                <Link className='text-white text-decoration-none fs-5' to="/">Home</Link>
                            </a>
                        </div>
                        <div className='nav-item'>
                            <a href="#" className="nav-link" id="l2">
                                <Link className='text-white text-decoration-none fs-5' to="/text">Text</Link>
                            </a>
                        </div>
                        <div className='nav-item'>
                            <a href="#" className="nav-link fs-5" id="l5">
                                <Link className='text-white text-decoration-none fs-5' to="/images">Image</Link>
                            </a>
                        </div>
                        <div className='nav-item'>
                            <a href="#" className="nav-link fs-5" id="">
                                <Link to="/about" className="text-white text-decoration-none">About</Link>
                            </a>
                        </div>
                        <div className='nav-item'>
                            <a href="#" className="nav-link fs-5" id="">
                                <Link to="/weather" className="text-white text-decoration-none">Weather</Link>
                            </a>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <img src={user} alt="Robo-hand" height="50px" />
                </div>
            </header>
            <div>
                <div className='container mt-4 d-flex justify-content-center'>
                    <div className='row w-50 '>
                        <div className='col'>
                            <h1 className='text-center mt-5 border border-black p-3'>News GPT</h1>
                        </div>
                    </div>
                </div>
                <div className='container d-flex justify-content-center mt-3'>
                    <div className='row '>
                        <div className='col-12 col-md-12 col-sm-12 w-100'>
                            <input type='text' className='form-control' placeholder='Enter the prompt' onChange={handleTopicChange} value={topic}></input>
                        </div>
                        <div className='col d-flex justify-content-center'>
                            <button className='btn btn-dark w-75 mt-2' onClick={fetchAndSaveNews}>Generate</button>
                        </div>
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row d-flex justify-content-center mt-5 w-100">
                        <div className="col-12 col-md-10 col-lg-8">
                            <ul className="list-unstyled">
                                {history.map((entry, index) => (
                                    <div key={index} className="border border-dark bg-dark p-3 mt-2">
                                        <strong className='text-white'>Prompt:</strong> <span className="d-block text-white">{entry.prompt}</span>
                                        <strong className='text-white'>Response:</strong> <pre className="d-block text-white">{entry.response}</pre>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

};

export default News;
