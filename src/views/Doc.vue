<template>
  <div>
    <topnav/>
  
      <div class="content">
        <aside>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch"></router-link>
            </li>
            <li>
              <router-link to="/doc/button"></router-link>
            </li>
            <li>
              <router-link to="/doc/dialog"></router-link>
            </li>
            <li>
              <router-link to="/doc/tabs"></router-link>
            </li>
          </ol>



        </aside>
        <main>主内容</main>
      </div>
  </div>
</template>
<script lang="ts">
import topnav from '../components/Topnav.vue'
export default {
    components: {topnav}
}
</script>
