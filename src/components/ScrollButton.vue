<template>
  <div class="scroll-btn">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  mounted () {
    // show btn
    $(document).ready(function () {
      $(window).scroll(function () {
        if (this.scrollY > 400) {
          $('.scroll-btn').addClass('show')
        } else {
          $('.scroll-btn').removeClass('show')
        }
      })
    })

    // scroll to top
    $('.scroll-btn').click(function () {
      $('html').animate({ scrollTop: 0 })
    })
  }
}
</script>

<style>
.scroll-btn {
  height: 40px;
  width: 40px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 10vh;
  right: 5vw;
  background-color: crimson;
  border-radius: 5px;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: all 0.3s ease;
  z-index: 200;
}

.scroll-btn.show {
  opacity: 1;
  pointer-events: auto;
}
</style>
