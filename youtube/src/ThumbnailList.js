import React  from 'react';
import Thumbnail from './Thumbnail';

const ThumbnailList = (props) => {
  const { arr } = props;
  return (<ul className="col-md-4 list-group">
    {arr.map(elem => {
      const { url } = elem.snippet.thumbnails.default;
      const { title } = elem.snippet;
      const { videoId } = elem.id;
      return (<Thumbnail url={url} title={title} key={url} videoId={videoId} handleClick={props.handleClick} />)
    })}
  </ul>);
};

export default ThumbnailList;
