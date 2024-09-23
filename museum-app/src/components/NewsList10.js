import "./NewsList10.scss"
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function NewsList10 () {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:4444/news');
                setNews(response.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);
    return (
        <div className='news-list-10'>
            {news.map((newsItem, index) => (
                <div className="news10-post" key={index}>
                    <div className="news10-post-left">
                    <h3 className='news-post-title'>{newsItem.title}</h3>
                    <p className='news-post-desc'>{newsItem.description}</p>
                    </div>
                    <img className='news10-photo' src={newsItem.photoUrl}></img>
                </div>
            ))}
        </div>
    )
}

export default NewsList10;