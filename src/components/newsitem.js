import React from 'react';

const NewsItem = ({title,description,imageUrl,newsUrl,author, date,source}) => {
 
    const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
  };

  const formattedDate = new Date(date).toLocaleString(undefined, options);

  return (
    <div className="my-3 d-flex justify-content-center">
      <div className="card" style={{ width: '22rem' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: 0 }}>
          <span className="badge rounded-pill bg-danger">{source}</span>
        </div>
        <img
          className="card-img-top"
          src={!imageUrl ? 'https://images.hindustantimes.com/tech/img/2023/06/30/1600x900/World_Asteroid_Day_2023_1688098248538_1688098248723.jpg' : imageUrl}
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description ? description : 'No description available'}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {author ? author : 'unknown'} on {formattedDate}
            </small>
          </p>
          <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
