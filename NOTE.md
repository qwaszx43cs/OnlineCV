### css background

### background-attachment

属性决定背景图像的位置是在视口内固定


###  jquery添加类

```javascript
import $ from 'jquery'

// 滚动添加类
$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.nav-bar').addClass('sticky')
    } else {
      $('.nav-bar').removeClass('sticky')
    }
  })
})

```

### jquery触发类

`toggleClass()` 对设置或移除被选元素的一个或多个类进行切换。

```javascript
  // 点击菜单键
  $('.menu-btn').click(function () {
    $('.nav-bar .menu').toggleClass('active')
  })
}
```


### fa fa-bars变为X

```html
<!-- html -->
<div class="menu-btn">
  <i class="fa fa-bars"></i>
</div>
```

```javascript
// js
$('.menu-btn').click(function () {
  $('.menu-btn i').toggleClass('active')
})
```

```css
.menu-btn i.active::before {
  content: '\f00d';
}
```

不在HTML中使用fontawesome提供的类，如果在CSS中使用的话，用(图标字符编码表) [https://blog.csdn.net/weixin_40648849/article/details/88873189]

```css
.icon:before {
    content: '\f006';
    font-family: FontAwesome;
}
```

### css object-fit

object-fit CSS 属性指定可替换元素的内容应该如何适应到其使用的高度和宽度确定的框。

`cover`: 被替换的内容在保持其宽高比的同时填充元素的整个内容框。如果对象的宽高比与内容框不相匹配，该对象将被剪裁以适应内容框。


### juqery导航栏初始化, 第一个a标签添加.active

```javascript
// 导航栏第一个初始化添加active
$('.nav__link').first().addClass('active')
```


### 史前巨坑！！！！！ 使用了vue-router就使得a标签的锚点定位出问题，切换history模式

RT

### scrollreveal 滚动插件


### scroll-top-btn 滚动到顶部按钮

1. 新建scrollButton组件

2. 当页面scrollY超过N时，show

3. 点击触发jquery animate动画效果

```javascript
// scroll to top
$('.scroll-btn').click(function () {
  $('html').animate({ scrollTop: 0 })
})
```


### 打字效果 Typed.js


### myprojects中的projectcard我使用了flex流式布局


### 本地化GOOGLE FONT 

(本地化GOOGLE FONT ) [https://www.lili.kim/2018/09/04/web/%E5%B0%86%20Google%20Fonts%20%E6%9B%BF%E6%8D%A2%E5%88%B0%E6%9C%AC%E5%9C%B0%E8%AF%BB%E5%8F%96/]