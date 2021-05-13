<template>
  <div>
      <Topnav/>
      <div class="topnav">
        <div class="logo">LOGO</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
      </div>
      <div class="banner">
          <h1>柠檬UI</h1>
          <h2>一个厉害的 UI 框架</h2>
          <p class="actions">
             <a href="https://github.com">GitHub</a> 
             <router-link to="/doc">开始</router-link>   
          </p>
      </div>
  </div>
</template>
<script lang="ts">
import topnav from '../components/Topnav.vue'
export default {
    components: {topnav}
}
</script>
<style lang="scss" scoped>
.topnav {
  background: yellow;
  display: flex;
  padding: 16px;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: $h/2;
      padding: 0 8px;
    }
  }
}
</style>
