<template>
  <div id="app">
    <!-- <Loader /> -->
    <AppHeader />
   <Home />
    <About /> 
    <Skills />
    <Details />
    <GalleryInfo/>
    <Video />  
   

  </div>
</template>

<script>
// import Loader from './components/Loader.vue'
import AppHeader from './components/AppHeader.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'

import Details from './components/Details.vue'
import Skills from './components/Skills.vue'
// import GalleryInfo from './components/GalleryInfo.vue'
import Video from './components/Video.vue'




export default {
  name: 'App',
  components: {
    // Loader,
    AppHeader,
    Home,
    About,
   Skills,
    Details,
    // GalleryInfo
    Video
   

  }

}
</script>

<style>

</style>
