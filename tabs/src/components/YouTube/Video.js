import React  from 'react';

const Video = (props) => {
  const { activeVideo } = props;
  const { videoId } = activeVideo.id;
  const { title, description } = activeVideo.snippet;
  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe title="random" src={`https://www.youtube.com/embed/${videoId}`}></iframe>
      </div>
      <div className="details">
        <div>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
export default Video;
