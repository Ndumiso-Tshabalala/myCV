<template>
 <div id="app">
  <!-- Gallery section / Youtube search-->   
    
     <section class="galleryInfo" id="galleryInfo">
        
             <h2 class="title"  > My interests & activities </h2>
               <nav class="navbar navbar-dark bg-danger">
        <a class="navbar-brand" href="#">Youtube Data API V3</a>
    </nav>
    <div class="container">
        <form id="searchForm">
            <div class="input-group py-4">
                <input type="text" class="form-control" id="searchField">
                <div class="input-group-prepend">
                    <button type="submit" class="btn btn-danger">Search</button>
                </div>
            </div>
        </form>
    </div>
    <div class="container-fluid mb-4">
        <div class="row">
            
            <!-- Let's make it responsive -->
            <div class="col-12 col-lg-6 mb-4">
                <!-- iframe -->
                <div class="card w-100">
                    <div class="embed-responsive embed-responsive-16by9">
                        <iframe id="player" class="embed-responsive-item" src="" frameborder="0"></iframe>
                    </div>
                    <div class="card-body">
                        <h5 id="video-title" class="card-title">Video title</h5>
                        <h6 id="video-channelTitle" class="text-info">Channel name</h6>
                        <p id="video-description" class="card-text">Video description</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <ul class="list-unstyled" id="videoList"></ul>
            </div>
        </div>
    </div>













             
             

             
     </section>
                         
   

    
 </div>
</template>



<script>
export default {
    name: "GalleryInfo"

}
</script>



<style scooped>

html,
body {
    width: 100%;
    height: 100%;
    min-width: 300px;
}

.navbar-brand {
    font-size: 18px;
    font-weight: bold;
}

p {
    font-size: 14px;
}

h5, 
h6 {
    font-size: 14px;
    font-weight: bold;
}

.media img {
    width: 168px;
    height: 94px;
}


/* select */

#videoList li:hover {
    border-right: 6px solid crimson;
    cursor: pointer;
}

</style>