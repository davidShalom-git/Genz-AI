import React,{useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import user from '../Images/icons8-user-80.png'

const News = () =>{

    const [topic,setTopic] = useState('');
    const [articles,setArticles] = useState([]);
    const [history,setHistory] = useState(JSON.parse(localStorage.getItem('newsHistory')) || []);
    const [error,setError] = useState(null);

    const handleTopicChange = (e) =>{
        setTopic(e.target.value);
    }

    const fetchNewsData = async() => {
        try{
            const response =  await axios.get(`https://newsapi.org/v2/everything`,{
                params:
                {
                    q: topic,
                    apikey: '5e97105f83bf4c019ca38751f659cb89'
                }
            })

            const articles = response.data.articles.slice(0,3);
            setArticles(articles);
            const newEntry = {prompt: topic, response: articles};
            const updatedHistory = [...history,newEntry];
            setHistory(updatedHistory);
            localStorage.setItem('newsHistory',JSON.stringify(updatedHistory));
            setError(null)
        }
        catch(error)
        {
            console.error("News API Error: ",error);
            setError('Failed to fetch the news data. Please Try again')
        }
        
    }
    
    return (
        <>
        
      <h1>Jiren</h1>
        
        
        </>
    )

}

export default News;