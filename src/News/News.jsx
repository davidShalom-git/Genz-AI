import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import user from '../Images/icons8-user-80.png';

const News = () => {
    const [topic, setTopic] = useState('');
    const [articles, setArticles] = useState([]);
    const [history, setHistory] = useState(JSON.parse(localStorage.getItem('newsHistory')) || []);
    const [error, setError] = useState(null);

    const handleTopicChange = (e) => {
        setTopic(e.target.value);
    };

    const fetchNewsData = async () => {
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything`, {
                params: {
                    q: topic,
                    apiKey: '5e97105f83bf4c019ca38751f659cb89' // replace with your actual API key
                }
            });
            const articles = response.data.articles.slice(0, 3); // Get the top 3 articles
            setArticles(articles);
            // Save to history
            const newEntry = { prompt: topic, response: articles };
            const updatedHistory = [...history, newEntry];
            setHistory(updatedHistory);
            localStorage.setItem('newsHistory', JSON.stringify(updatedHistory));
            setError(null); // Reset error
        } catch (error) {
            console.error("News API Error:", error);
            setError("Failed to fetch news data. Please try again.");
        }
    };

    return (
        <>
            <header className='navbar bg-dark navbar-dark navbar-expand-sm p-3'>
                <h2 className='navbar-brand justify-content-start'>
                    <Link to="/" className="nav-link text-white fs-5">GenZ-AI</Link>
                </h2>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#box">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='navbar-collapse collapse justify-content-center' id="box">
                    <div className='navbar-nav'>
                        <Link className='nav-item nav-link text-white text-decoration-none fs-5' to="/">Home</Link>
                        <Link className='nav-item nav-link text-white text-decoration-none fs-5' to="/text">Text</Link>
                        <Link className='nav-item nav-link text-white text-decoration-none fs-5' to="/images">Image</Link>
                        <Link className="nav-item nav-link text-white text-decoration-none fs-5" to="/about">About</Link>
                        <Link className="nav-item nav-link text-white text-decoration-none fs-5" to="/weather">Weather</Link>
                    </div>
                </div>
                <img src={user} alt="User Icon" height="50px" />
            </header>
            <div className='container mt-4 d-flex justify-content-center'>
                <div className='row w-50'>
                    <div className='col'>
                        <h1 className='text-center mt-5 border border-black p-3'>News GPT</h1>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-center mt-3'>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter a topic'
                    onChange={handleTopicChange}
                    value={topic}
                />
                <button className='btn btn-dark w-75 mt-2' onClick={fetchNewsData}>Generate</button>
            </div>
            {error && <p className="text-danger text-center mt-3">{error}</p>}
            <div className="container-fluid d-flex justify-content-center">
                <div className="row d-flex justify-content-center mt-5 w-100">
                    <div className="col-12 col-md-10 col-lg-8">
                        <ul className="list-unstyled">
                            {history.map((entry, index) => (
                                <div key={index} className="border border-dark bg-dark p-3 mt-2">
                                    <strong className='text-white'>Prompt:</strong>
                                    <span className="d-block text-white">{entry.prompt}</span>
                                    <strong className='text-white'>Response:</strong>
                                    <ul>
                                        {entry.response.map((article, idx) => (
                                            <li key={idx} className="text-white">
                                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-white">
                                                    {article.title}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default News;
