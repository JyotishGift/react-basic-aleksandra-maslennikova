import React, { Component } from 'react';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';
import YTSearch from 'youtube-api-search';
import Video from './Video';
import ThumbnailList from './ThumbnailList';


class YouTube extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      term: 'matrix',
      active: null
    }
  }
  componentDidMount() {
    this.loadVideos();
  }

  loadVideos = () => {
    YTSearch({ key: 'AIzaSyC1ORL6Y3zxvLLev6QHUqP8eF1hFbYo1WI', term: this.state.term }, data => {
      this.setState({ videos: data });
    });
  }

  getVideosList = (id) => {
    const videoList = [...this.state.videos];
    const index = videoList.findIndex(elem => elem.id.videoId === id);
    videoList.splice(index, 1);
    return videoList;
  }

  getActiveVideo = (id) => {
    const { videos } = this.state;
    const index = videos.findIndex(elem => elem.id.videoId === id);
    return videos[index];
  }

  onThumbnailClick = (e, videoId) => {
    this.setState({ active: videoId });
  }

  onHandleSearch = (e) => {
    this.setState({ term: e.target.value, active: null });
    this.loadVideos();
  }

  render() {
    const { videos } = this.state;
    if (videos.length) {
      const videoId = this.state.active || videos[0].id.videoId;
      const activeVideo = this.getActiveVideo(videoId);
      const videosList = this.getVideosList(videoId);
      return (
        <main className="container">
          <div className="search-bar navbar">
            <input type="text" placeholder="Search" onChange={(e) => this.onHandleSearch(e)} />
          </div>
          <div className="row">
            <Video activeVideo={activeVideo} />
            <ThumbnailList arr={videosList} handleClick={this.onThumbnailClick} />
          </div>
        </main>
      );
    } else {
      return (<div> Loading....</div>);
    }
  };
}

export default YouTube;
