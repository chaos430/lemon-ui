<template>
  
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
             <a href="">GitHub</a> 
             <a href="">开始</a>   
          </p>
      </div>
  
</template>
<script lang="ts">

export default {
    
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
</style>