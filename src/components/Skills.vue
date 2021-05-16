<template>
  <section class="skills" id="Skills">
    <div class="max-width">
      <h2 class="skills-title">My Skills</h2>
      <div class="skills-content">
        <div class="skills-frontEnd">
          <h3 class="skills-frontEnd__subtitle">Frontend Skills</h3>
          <span class="skills__item" v-for="(skill, index) in frontEndSkills" :key="index">
            {{ skill }}
          </span>
        </div>
        <div class="skills-backEnd">
          <h3 class="skills-backEnd__subtitle">BackEnd Skills</h3>
          <span class="skills__item"  v-for="(skill, index) in backEndSkills" :key="index">
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      frontEndSkills: ['HTML', 'CSS', 'Javascript', 'Vue'],
      backEndSkills: ['Mysql', 'PHP']
    }
  },
  mounted () {
    this.sr.reveal('.skills-title', { delay: 50 })
    this.sr.reveal('.skills-frontEnd', { delay: 100 })
    this.sr.reveal('.skills-backEnd', { delay: 150 })
  }
}
</script>

<style lang="scss">
.skills {
  min-height: 100vh;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  background-color: #191919;
  padding: 100px 0;
  position: relative;
}

.skills-img img{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
}

.skills .skills-title {
  position: relative;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 80px;
  padding-bottom: 20px;
  font-family: 'Ubuntu', sans-serif;
  color: #fff;
  z-index: 2;
}

.skills .skills-title::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 170px;
  height: 3px;
  background-color: #fff;
  transform: translateX(-50%);
}

.skills .skills-title::after {
  content: "what I know";
  position: absolute;
  bottom: -9px;
  left: 50%;
  padding: 0 10px;
  transform: translateX(-50%);
  font-size: 20px;
  color: crimson;
  background: #191919;
}

.skills-content {
  color: #fff;
}

.skills-frontEnd, .skills-backEnd {
  flex: 1;
  margin-bottom: 50px;
  min-height: 100px;
  h3 {
    font-size: 1.6rem;
    color: crimson;
    margin: 20px 0;
    cursor: pointer;
  }

  span {
    display: inline-block;
    padding: 5px 10px;
    margin: 15px 10px;
    font-size: 1.2rem;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      background: crimson;
      border-radius: 5px;
    }
  }
}

@media (max-width: 1000px) {
  .skills-content {
    display: flex;
    flex-direction: column;
  }

  .skills-frontEnd,
  .skills-backEnd {
    text-align: center;
  }
}
</style>
