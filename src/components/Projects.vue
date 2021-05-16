<template>
  <section class="projects" id="Projects">
    <div class="max-width">
      <h2 class="projects-title">My Projects</h2>
      <div class="projects-content">
        <div class="liquid-box"
          v-for="(project,index) in projects" 
          :key="project.id" 
        >
          <projectCard 
            :title="project.title"
            :stack="project.stack"
            :period="project.period"
            :projectUrl="project.projectUrl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from './ProjectCard.vue'
export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      projects: [
        {
          id: 1,
          title: 'Online CV Template',
          stack: 'Vue',
          period: '2021/05/15 - 2021/5/16',
        },
        {
          id: 2,
          title: 'Fish UI',
          stack: 'H5 + CSS3 + Vue',
          period: '2021/05 - Developing',
          projectUrl: 'https://qwaszx43cs.github.io/fish-ui/'
        },
        {
          id: 3,
          title: 'Fish Memory(H5)',
          stack: 'Uniapp + UniCloud',
          period: '2021/05 - Developing',
          projectUrl: 'https://www.bilibili.com/video/BV18f4y1a7nY'
        },
        {
          id: 4,
          title: 'Lab Management System',
          stack: 'Vue + ElementUI',
          period: '2021/01 - 2021/03',
          projectUrl: 'https://www.bilibili.com/video/BV1Xr4y1A7Bb'
        },
        {
          id: 5,
          title: 'VWPT Dashboard Project',
          period: '2020/10 - 2020/11',
        },
      ]
    }
  },
  mounted () {
    this.sr.reveal('.projects-title', { delay: 50 })
    this.sr.reveal('.liquid-box', { delay: 150, interval: 100 })
  }
}
</script>

<style>
  .projects {
    padding: 100px 0;
    font-family: 'Poppins', sans-serif;
    min-height: 100vh;
  }

  .projects-title {
    position: relative;
    color: #111;
    font-size: 40px;
    font-weight: 600;
    text-align: center;
    margin-bottom: 80px;
    padding-bottom: 20px;
    font-family: 'Ubuntu', sans-serif;
  }

  .projects-title::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 220px;
    height: 3px;
    background-color: #111;
    transform: translateX(-50%);
  }

  .projects-title::after {
    content: "what I had done";
    position: absolute;
    bottom: -8px;
    left: 50%;
    font-size: 18px;
    background: #fff;
    color: crimson;
    padding: 0 10px;
    transform: translateX(-50%);
  }

  .projects-content {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  }

  .liquid-box {
    flex: 0 0 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;
  }

  /* media query */
  @media (max-width: 1600px) {
    .liquid-box {
      flex: 0 0 33.33%;
    }
  }

  @media (max-width: 1200px) {
    .liquid-box {
      flex: 0 0 50%;
    }
  }

  @media (max-width: 800px) {
    .liquid-box {
      flex: 0 0 100%;
    }
  }
</style>