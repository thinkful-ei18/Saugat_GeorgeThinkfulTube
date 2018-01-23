/* global VideoList VideoRetriever */

'use strict';

const VideoList = function () {


  const generateVideoItemHtml = function (video) {
    console.log(video);
    return (`<li> 
            <p>${video.title}</p>
            <a href="https://www.youtube.com/watch?v=${video.id}">
              <img src="${video.thumbnail}">
            </a> 
          </li>`);

  };

  const render = function () {
    const newVid = StorageItems.videos.map(generateVideoItemHtml);

    $('.results').html(newVid);
  };

  const decorateResponse = function (response) {

    return response.items.map((item) => {
      return {
        id: item.id.videoId,
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.default.url
      };
    }
    );
  
  };

  const addVideosToStore = function (videos) {
    StorageItems.videos = videos;

};

  const handleFormSubmit = function () {
    $('form').on('submit', function () {
      event.preventDefault();
      const searchTerm = $('#search-term').val();
      $('#search-term').val('');
      VideoRetriever.fetchVideos(searchTerm, function (response) {
        const arr = decorateResponse(response);
        addVideosToStore(arr);
        render();
      });

    })
  };

  function bindEventListener(){
    handleFormSubmit();
  }

  return  {
    render,
    bindEventListener
  }

}();