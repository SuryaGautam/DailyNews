import React from "react";

const NewsItem = (props) => {
  let { title, description, imageurl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <div>
          <span
            className="badge rounded-pill bg-danger"
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            {source}
          </span>
        </div>
        <img
          src={
            !imageurl
              ? "https:imgs.search.brave.com/MTrlyxOZcV85Hrk0UvoAzjkfOI9Sp8bsSmV-gRiwQPw/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMud29uZGVyc2hh/cmUuY29tL3JlcGFp/cml0L2F0aWNsZS8y/MDIxLzA3L3Jlc29s/dmUtaW1hZ2VzLW5v/dC1zaG93aW5nLXBy/b2JsZW0tMS5qcGc"
              : imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
