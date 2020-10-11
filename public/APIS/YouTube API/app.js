$(function() {

    let searchTerm = "gamerunss";
    let videoList = $("#videoList");
    let apiKey = "AIzaSyCi7u_Px2g8KVGGnhbga9J0NzzjT2j8Hkg";
    let player = $("#player");
    clearVideoList();
    search(searchTerm);

    $("#searchForm").on("submit", (e) => {
        e.preventDefault();
        searchTerm = $("#searchField").val();
        search(searchTerm);
    });

    function search(q) {

        $.ajax({
            method: "GET",
            url: "https://www.googleapis.com/youtube/v3/search",
            data: {
                key: apiKey,
                q: q,
                part: "snippet",
                maxResults: 5,
                type: "video",
                videoEmbeddable: true,

            }
        }).done((data) => {
            let videos = data.items;
            clearVideoList();
            videos.forEach((el) => {
                //add channelTitle
                // add video id to li element
                videoList.append(`<li class="media mb-2" id="${el.id.videoId}">
                <img src="${el.snippet.thumbnails.medium.url}" class="mr-3">
                <div class="media-body">
                  <h5 class="mt-0 mb-1">${el.snippet.title}</h5>
                  <h6 class="my-1 text-info">${el.snippet.channelTitle}</h6>
                  <p class="mb-0">${el.snippet.description}</p>
                </div>
              </li>`);
            });
