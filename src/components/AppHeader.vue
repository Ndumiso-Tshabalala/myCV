<template>
 <div id="app">
<!-- Loader -->
<div class = "loader_bg">
    <div class = "loader"></div>
</div>



  <!-- Navigation bar -->   
    <div class="scroll-up-btn">
        <i class="fas fa-angle-up"></i>
    </div>
     <nav class="navbar">
        <div class="max-width">
            <div class="logo"><a href="#">C<span>v.</span></a></div>
            <ul class="menu">
                <li><a href="#home" class="menu-btn">Home</a></li>
                <li><a href="#about" class="menu-btn">About</a></li>
                <li><a href="#skills" class="menu-btn">Skills</a></li>
                <li><a href="#edu" class="menu-btn">Education</a></li>    
                <li><a href="#slider" class="menu-btn">Gallery</a></li>
                <li><a href="#contact" class="menu-btn">Contact</a></li>
            </ul>
            <div class="menu-btn">
                <i class="fas fa-bars"></i>
            </div>
        </div>
    </nav>



 </div>
</template>



<script>
export default {
    name: "AppHeader"

}
</script>



<style scooped>

</style>