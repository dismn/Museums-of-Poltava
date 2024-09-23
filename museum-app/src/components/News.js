import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./News.scss";
import { Link } from 'react-router-dom';

import btnNews from "./img/btnNews.png";

function News() {
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
        <div className="news">
            <div className="news-title">
                <h2>Останні новини</h2>
                <div className='btn-news-block'>
                    <h3>ПЕРЕГЛЯНУТИ ВСЕ</h3>
                    <Link to='/news'><img className="btn-news" src={btnNews} alt="Переглянути все" /></Link>
                </div>
            </div>
            
            <div className='news-list'>
                {news.slice(0, 3).map((newsItem, index) => (
                    <div className={`news-post ${index > 0 ? 'hide-on-small-screen' : ''}`} key={index}>
                        <h3 className='news-post-title'>{newsItem.title}</h3>
                        <p className='news-post-desc'>{newsItem.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;

