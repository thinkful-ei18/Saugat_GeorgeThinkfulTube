'use strict';
const StorageItems = function() {

  const store = {
    videos: []
  };

  const setVideos = function (videos) {
    videos = this.videos;
  }

  return {
    videos: store.videos,
    setVideos

  }

}();


