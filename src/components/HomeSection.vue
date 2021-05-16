<template>
  <section class="home-section" id="Home">
    <div class="max-width">
      <div class="home-content">
        <div class="first">Hello, my name is</div>
        <div class="second">{{name}}</div>
        <div class="third">And I'm an <span class="typing"></span></div>
        <poly-button class="poly-button" icon="github" color="crimson" @click="jumpToGithub"></poly-button>
      </div>
    </div>
  </section>
</template>

<script>
import PolyButton from './PolyButton.vue'
import Typed from 'typed.js'

export default {
  props: {
    name: {
      type: String,
      default: 'Aurthor'
    }
  },
  components: {
    PolyButton
  },
  methods: {
    // icon页面跳转
    jumpToGithub () {
      window.location.href = 'https://github.com/qwaszx43cs'
    }
  },
  mounted () {
    const typed = new Typed('.typing', {
      strings: ['Vehicle Engineer.', 'Front-end Engineer.', 'Project Manager.'],
      typeSpeed: 100,
      backSpeed: 80,
      loop: true
    })
  }
}
</script>

<style lang="scss">
  .home-section {
    display: flex;
    height: 100vh;
    background: url("../assets/image/banner.png") no-repeat center;
    background-size: cover;
    // background-attachment: fixed;
    color: #fff;
    min-height: 500px;
    font-family: 'Ubuntu', sans-serif;
    position: relative;
  }

  .home-section::after {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    background-color: #eee;
    opacity: 0.1;
    z-index: 1;
    width: 100%;
    height: 100%;
  }

  .home-section .max-width {
    display: flex;
    align-items: center;

  }

  .home-section .home-content .first{
    font-size: 27px;
    font-weight: 400;
  }

  .home-section .home-content .second {
    font-size: 70px;
    font-weight: 600;
  }

  .home-section .home-content .third {
    font-size: 40px;
    font-weight: 600;

    span {
      color: crimson;
      font-weight: 500;
    }
  }

  // responsive media query start
  @media (max-width: 600px) {
    .home-section {
      background: url("../assets/image/banner4.jpg") no-repeat center;
      background-size: cover;
    }

    .home-section .home-content .first{
      font-size: 23px;
    }

    .home-section .home-content .second {
      font-size: 56px;
    }

    .home-section .home-content .third {
      font-size: 27px;
    }
  }

    @media (max-width: 420px) {
    .home-section .home-content .first{
      font-size: 19px;
    }

    .home-section .home-content .second {
      font-size: 45px;
    }

    .home-section .home-content .third {
      font-size: 20px;
    }
  }

</style>
