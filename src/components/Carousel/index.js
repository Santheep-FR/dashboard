// NewsCarousel.js
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'; // Custom CSS for styling

const NewsCarousel = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json");
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  const renderNewsCards = () => {
    return news.map((article, index) => (
      <div key={index} className="card">
        <img src={article.urlToImage} alt={article.title} />
        <div className="card-content">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      </div>
    ));
  };

  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {renderNewsCards()}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
