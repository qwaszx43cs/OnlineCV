<template>
  <div class="nav-bar">
    <div class="max-width">
      <div class="logo"><a href="#">{{firstName}}<span>{{givenName}}</span></a></div>
      <ul class="menu" id="nav-menu">
        <li v-for="(item, index) in menuItems" :key="index" class="nav__item">
          <a class="nav__link" :href="`#${menuItems[index]}`">{{item}}</a>
        </li>
      </ul>
      <div class="nav-menu-btn">
        <i class="fa fa-bars"></i>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  props: {
    firstName: {
      type: String,
      default: 'Protfo'
    },
    givenName: {
      type: String,
      default: 'lio.'
    },
    menuItems: {
      type: Array
    }
  },
  mounted () {
    // 滚动添加sticky类
    $(document).ready(function () {
      // 导航栏第一个初始化添加active
      $('.nav__item').first().addClass('active')
      $(window).scroll(function () {
        if (this.scrollY > 20) {
          $('.nav-bar').addClass('sticky')
        } else {
          $('.nav-bar').removeClass('sticky')
        }
      })
    })

    // 点击唤醒menu
    $('.nav-menu-btn').click(function () {
      $('.nav-bar .menu').toggleClass('show')
      $('.nav-menu-btn i').toggleClass('show')
    })

    // 点击menu链接隐藏menu
    $('.nav__link').click(function () {
      $('.nav-bar .menu').toggleClass('show')
      $('.nav-menu-btn i').toggleClass('show')
    })

    // 滑动激活导航链接
    const sections = document.querySelectorAll('section[id]')

    window.addEventListener('scroll', scrollActive)

    function scrollActive () {
      // 文档从顶部开始Y轴上滚动过的像素值
      const scrollY = window.scrollY

      sections.forEach(current => {
        // 元素像素高度
        const sectionHeight = current.offsetHeight
        // 元素到顶部的距离
        const sectionTop = current.offsetTop - 50
        const sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          $(`.nav__item [href='#${sectionId}']`).addClass('active')
        } else {
          $(`.nav__item [href='#${sectionId}']`).removeClass('active')
        }
      })
    }
  }
}
</script>

<style lang="scss">
  .nav-bar {
    position: fixed;
    width:100%;
    min-height: 5vh;
    padding: 20px 0;
    font-family: 'Ubuntu', sans-serif;
    transition: all 0.3s ease;
    z-index: 100;
  }

  .nav-bar.sticky {
    padding: 10px 0;
    background: crimson;

    .logo a span{
      color: #fff;
    }

    .menu li a.active {
      color: #fff;
      border-bottom: 2px solid #fff;
    }
  }

  .nav-bar .max-width {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-bar .menu {
    display: flex;
    align-items: center;
    list-style: none;
  }

  .nav-bar .menu li {
    list-style: none;
    padding: 10px 10px;
  }

  .nav-bar .menu li a {
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    margin-right: 10px;
    padding-bottom: 5px;
    transition: color 0.3s ease;
  }

  .nav-bar .menu li a.active{
    color: red
  }

  .nav-bar .logo a {
    color: #fff;
    font-size: 35px;
    font-weight: 600;
    transition: all 0.3s ease;

    span {
      color: crimson;
    }
  }

  // menu btn styling
  .nav-menu-btn {
    color: #fff;
    display: none;
    cursor: pointer;
    font-size: 23px;
  }

  // responsive media query start
  @media (max-width: 900px) {
    .nav-bar .menu {
      position: fixed;
      height: 100vh;
      width: 100%;
      top: 0;
      left: -100%;
      background: #111;
      display: flex;
      flex-direction: column;
      padding-top: 20vh;
      text-align: center;
      transition: all 0.3s ease;

      li {
        margin: 25px 0;
      }

      li a {
        font-size: 25px;
      }
    }

    .nav-bar .menu.show {
      left: 0;
    }

    .nav-menu-btn {
      display: block;
      z-index: 99;
    }

    .nav-menu-btn i.show::before {
      content: '\f00d'
    }
  }
</style>
