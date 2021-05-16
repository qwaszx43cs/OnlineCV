<template>
  <footer class="page-footer">
    <div class="max-width">
      <div class="right">
        <h3>Follow</h3>
        <a href="https://github.com/qwaszx43cs"><i class="fa fa-github"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.page-footer {
  height: 6vh;
  width: 100%;
  background-color: #1e1e1e;
  color: #fff;
  font-family: 'Poppins', sans-serif;
}

.page-footer .max-width {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.page-footer .right {
  display: flex;
  align-items: center;

  i {
    margin-left: 20px;
    font-size: 1.2rem;
    color: #fff;
    transition: 0.3s ;

    &:hover {
      color: crimson;
      transform: scale(1.5)
    }
  }
}
</style>