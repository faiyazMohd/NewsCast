import React, { Component } from "react";
export default class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, date, author, name } =
      this.props;
    return (
      <div className="card">
        <img
          src={imageUrl}
          width="286px"
          height="215px"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">
            <small className="text-muted">
              {" "}
              Author - {author ? author : "unknown"}{" "}
              <span className="badge bg-secondary">{name}</span>
            </small>
          </p>
          <p className="card-text">
            <small className="text-muted">
              Published at -{" "}
              {`${date.getHours()}:${date.getMinutes()} | ${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`}
            </small>
          </p>
          <p className="card-text">{description}...</p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
