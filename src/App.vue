<template>
  <div id="app">
    <AppHeader />
    <Home />
    <About />
    <Skills />
    <Details />
    <GalleryInfo/>

  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Details from './components/Details.vue'
import Skills from './components/Skills.vue'
import GalleryInfo from './components/GalleryInfo.vue'




export default {
  name: 'App',
  components: {
    AppHeader,
    Home,
    About,
   Skills,
    Details,
    GalleryInfo
   

  }

}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
