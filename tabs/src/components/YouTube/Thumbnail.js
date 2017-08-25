import React from 'react';

const Thumbnail = (props) => {
  const { url, title, videoId, handleClick } = props;
  return (<li className="list-group-item" onClick={(e) => handleClick(e, videoId)}>
    <div className="video-list media">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={url} alt={title} />
        </div>
      </div>
      <div className="media-body">
        <div className="media-heading">{title}</div>
      </div>
    </div>
  </li>);
};

export default Thumbnail;
