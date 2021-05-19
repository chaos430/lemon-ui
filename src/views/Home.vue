<template>
<div>
  <div class="topnavAndBanner">
      <Topnav/>
     
      
      <div class="banner">
          <h1>柠檬UI</h1>
          <h2>一个厉害的 UI 框架</h2>
          <p class="actions">
             <a href="https://github.com">GitHub</a> 
             <router-link to="/doc">开始</router-link>   
          </p>
      </div>
   </div>
   <div class="features">
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-vue"></use>
</svg>
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-typescript"></use>
</svg>
<svg class="icon" aria-hidden="true">
    <use xlink:href="#icon-light"></use>
</svg>
   </div>
   
   </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
    components: {Topnav}
}
</script>
<style lang="scss" scoped>
$border-radius: 4px;
$color:#231e11 ;
.topnavAndBanner{
  background: linear-gradient(90deg, rgba(245,188,72,1) 0%, rgba(249,212,76,1) 50%, rgba(245,188,72,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}
.features{
  >svg{
    width: 64px;
    height: 64px;
  }
}
.topnav {
 
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
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
 
  > .actions{
    padding: 8px 0;
    a {
      margin:0 8px;
      background: transparent;
      display: inline-block;
      border-radius: $border-radius;
     text-decoration: none;
      
      padding: 8px 24px;
      border: 1px solid $color;
    }
  }
}
</style>
