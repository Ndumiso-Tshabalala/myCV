<template>
 <div id="app">
  
  
 
   <section class = "sliding">
         <h2 class="title"  > My interests & activities </h2> 
     <div class = "slider" id="slider">

         
           <input type = "radio" name = "slider" id = "s1" >
           <input type = "radio" name = "slider" id = "s2" checked >
           <input type = "radio" name = "slider" id = "s3" >
           <!-- <input type = "radio" name = "slider" id = "s4" >
           <input type = "radio" name = "slider" id = "s5" > -->

            <label for = "s1" id =  "slide1"><iframe width src="https://www.youtube.com/embed/_DX2L4Pp8S0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></label>
            <label for = "s2" id =  "slide2"><iframe width src="https://www.youtube.com/embed/eAagtcAup0o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></label>
            <label for = "s3" id =  "slide3">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Ftechinsider&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=807015896726069" width="800" height="410" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FUNILADTech&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=807015896726069" width="790" height="410" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe> 
                <!-- <div id = "instafeed" class = "instafeed"></div> --> 
                
            </label>
            <!-- <label for = "s4" id =  "slide4">4</label>
                <label for = "s5" id =  "slide5">5</label> -->
            
          
</div>


         
   


     </section>



 </div>
</template>



<script>
export default {
    name: "Video"

}
</script>



<style scooped>


</style>