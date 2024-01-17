// components/Apple.js
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

const Tech = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        let isMounted = true;

        axios
            .get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6d08f0719f3f442386b7e0db67bbbbe5')
            .then(res => {
                if (isMounted) {
                    setNews(res.data.articles);
                }
            })
            .catch(error => {
                console.error('Error fetching news:', error);
            });

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>
            <div className="container my-3">
                <div className="row">
                    {news.map((element) => {
                        return (
                            <div className="col-md-4" key={element.url}>
                                <div className="card my-2">
                                    <img src={element.urlToImage} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{element.title}</h5>
                                        <p className="card-text">{element.publishedAt}</p>
                                        <p className="card-text">{element.description}</p>
                                        <p className="card-text">{element.content}</p>
                                        <a href={element.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">Know More</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Tech;