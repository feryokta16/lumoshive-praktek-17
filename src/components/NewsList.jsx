/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types, no-unused-vars
function NewsList({ news, onSelect }) {
  return (
    <div className="news-list">
      {news.map((article) => {
        return (
          <div
            onClick={() => onSelect(article.key)}
            className="news-card"
            key={article.key}
          >
            <img src={article.thumb} alt={article.title} />
            <div className="news-detail">
              <h2>{article.title}</h2>
              <p>{article.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewsList;
