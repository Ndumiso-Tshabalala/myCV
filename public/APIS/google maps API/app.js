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