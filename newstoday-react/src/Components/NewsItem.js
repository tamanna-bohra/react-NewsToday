import React from 'react'

const NewsItem = (props) => {
    return (
        <div className='my-3'>
            <div className="card">
                <span className="d-flex justify-content-center position-absolute badge rounded-pill bg-primary">{props.source}</span>
                <img src={props.imageUrl ? props.imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQsq1NacYKHKS-RudSBgbLZa_ndkD-lmmQfA&usqp=CAU"} alt="news img" style={{ height: '13pc' }} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <b><p className="card-text">Author: {props.author && props.author.length < 50 ? props.author : "Unknown"}</p></b>
                    <p className="card-text"><small className="text-muted">Published at {new Date(props.publishDate).toUTCString()}</small></p>
                    <a href={props.newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem