'use strict';

const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

const VideoRetriever = function () {
  const fetchVideos = function (searchTerm, callback) {

    const query = {
      key: 'AIzaSyDatNhLrI7xcUoYX9pPXHJKvzeAfYBO5cA',
      q: searchTerm,
      part: 'snippet'
    };

    $.getJSON(BASE_URL, query, callback);
  };

  return {
    fetchVideos
  }
}();