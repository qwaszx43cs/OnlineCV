<template>
  <div class="project-card">
    <div class="project-card__img">
      <div class="project-card__title">{{title}}</div>
      <h3 v-if="stack"><i class="fa fa-cog"></i>Technology stack:</h3>
      <div class="project-card__stack">{{stack}}</div>
      <h3 v-if="period"><i class="fa fa-calendar-o"></i>Period:</h3>
      <div class="project-card__period">{{period}}</div>
    </div>
    <div class="project-card__link">
      <a v-if="projectUrl" :href="projectUrl" class="project-card__link__name">
        View Details<i class="fa fa-arrow-right"></i>
      </a>
      <a v-else>No Online Link</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // 项目名
    title: {
      type: String,
      default: 'Project Name'
    },
    // 技术栈
    stack: {
      type: String
    },
    // 项目周期
    period: {

    },
    // 项目链接
    projectUrl: {
    }
  }
}
</script>

<style lang="scss">
.project-card {
  width: 300px;
  height: 200px;
  background-color: #1e1e1e;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
}

.project-card__img {
  width: 100%;
  height: 100%;
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  color: #fff;

  .project-card__title {
    font-size: 1.3rem;
  }

  h3 {
    margin-top: 10px;
    color: crimson;
    font-weight: 500;

    i {
      font-size: 1rem;
      margin-right: 10px;
    }
  }
}

.project-card__link {
  position: absolute;
  bottom: -100%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.9);
  cursor: pointer;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  transition: all .3s ease;
}

.project-card:hover .project-card__link {
  bottom: 0;
}

.project-card__link a {
  color: #191919;
  font-size: 1.3rem;
  font-weight: 500;

  i {
    margin-left: 10px;
  }
}
</style>
