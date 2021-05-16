<template>
  <div>
    <nav-bar :menuItems="menuItems"></nav-bar>
    <home-section name="Fish Shi"></home-section>
    <about imgSrc="../assets/image/touxiang.jpg"></about>
    <skills />
    <scroll-button />
    <projects />
    <page-footer />

  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
import HomeSection from '../components/HomeSection.vue'
import About from '../components/About.vue'
import Skills from '../components/Skills.vue'
import ScrollButton from '../components/ScrollButton.vue'
import Projects from '../components/Projects.vue'
import PageFooter from '../components/PageFooter.vue'

export default {
  components: {
    NavBar,
    HomeSection,
    About,
    Skills,
    ScrollButton,
    Projects,
    PageFooter
  },
  data () {
    return {
      menuItems: ['Home', 'About', 'Skills', 'Projects']
    }
  }
}
</script>

<style>
/* @import url('https://fonts.font.im/css?family=Poppins:400,500,600,700|Ubuntu:400,500,700'); */
@import url('../assets/googlefont.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
}

.max-width {
  padding: 0 7%;
  transition: all 0.3s ease;
}

/* responsive media query start*/
@media (max-width: 1100px){
  .max-width {
    padding: 0 6%;
  }
}

@media (max-width: 900px){
  .max-width {
    padding: 0 5%;
  }
}

@media (max-width: 600px){
  .max-width {
    padding: 0 4%;
  }
}
</style>
