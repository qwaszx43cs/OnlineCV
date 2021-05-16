<template>
  <section class="about" id="About">
    <div class="max-width">
      <h2 class="about-title">About Me</h2>
      <div class="about-content">
        <div class="left">
          <img class="left__img" src="../assets/image/touxiang.jpg" alt="touxiang">
        </div>
        <div class="right">
          <div class="desc__main">I'm Sky, the engineer and Digital Team member of VOLKSWAGEN (2018.7 - Now)</div>
          <div class="desc__jd">
            <i class="fa fa-hand-o-right"></i>Be responsible for webApplication development.
          </div>
          <div class="desc__jd">
            <i class="fa fa-hand-o-right"></i>Be responsible for digital project management, including project definition, design, implementation,
            testing and acceptance, etc.
          </div>
          <div class="desc__jd">
            <i class="fa fa-hand-o-right"></i>Sorted out the internal process of the company, participated in the digital demand mining and
            attempts of each department.
          </div>
          <i class="desc__reward">Reward: TOP 10 EMPLOYEE IN 2019</i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted () {
    this.sr.reveal('.about-title', { delay: 50 })
    this.sr.reveal('.about-content', { delay: 150, interval: 100 })
  }
}
</script>

<style lang="scss">
.about {
  padding: 100px 0;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
}

.about .about-title {
  position: relative;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 80px;
  padding-bottom: 20px;
  font-family: 'Ubuntu', sans-serif;
}

.about .about-title::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 185px;
  height: 3px;
  background: #111;
  transform: translateX(-50%);
}

.about .about-title::after {
  content: "who i am";
  position: absolute;
  bottom: -9px;
  left: 50%;
  padding: 0 10px;
  color: crimson;
  font-size: 20px;
  background: #fff;
  transform: translateX(-50%);
}

.about-content {
  display: flex;
  justify-content: space-between;

  .right {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    i {
      margin-right: 10px;
    }

    .desc__main {
      font-size: 23px;
      font-weight: 500;
      margin-bottom: 30px;
    }

    .desc__jd {
      font-size: 20px;
      font-weight: 400;
      margin-bottom: 15px;
    }

    .desc__reward {
      margin-top: 30px;
      font-size: 23px;
      font-weight: 500;
    }
  }

  .left {
    width: 40%;
  }
}

.about .about-content .left__img {
  height: 400px;
  width: 400px;
  margin-bottom: 50px;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
}

// responsive media query start

@media (max-width: 1400px) {
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  .left {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .about-content .right {
    width: 90%;
  }

  .about .about-content .left__img {
    height: 300px;
    width: 300px;
    object-fit: cover;
  }

  .about-content .right .desc__main {
    font-size: 20px;
  }

  .about-content .right .desc__jd {
    font-size: 17px;
  }

  .about-content .right .desc__reward {
    font-size: 19px;
  }
}

@media (max-width: 1000px) {
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }

  .about .about-content .left__img {
    height: 250px;
    width: 250px;
    object-fit: cover;
  }

  .left {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
  }

  .about-content .right {
    width: 90%;
  }
}

@media (max-width: 600px) {
  .about .about-content .left__img {
    height: 160px;
    width: 160px;
  }
}
</style>
