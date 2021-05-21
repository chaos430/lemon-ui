<template>
  <div class="layout">
    <topnav toggleMenuButtonVisible
            class="nav" />

    <div class="content">
      <aside class="aside_menu"
             :class="{visible:asideVisible}">
        <div>
          <h2>文档</h2>
          <ol>
            <li>
              <router-link to="/doc/intro">介绍</router-link>
            </li>
            <li>
              <router-link to="/doc/install">安装</router-link>

            </li>
            <li>
              <router-link to="/doc/get-started">开始使用</router-link>

            </li>
          </ol>
          <h2>组件列表</h2>
          <ol>
            <li>
              <router-link to="/doc/switch">Switch组件</router-link>
            </li>
            <li>
              <router-link to="/doc/button">Button组件</router-link>
            </li>
            <li>
              <router-link to="/doc/dialog">Dialog组件</router-link>
            </li>
            <li>
              <router-link to="/doc/tabs">Tabs组件</router-link>
            </li>
          </ol>

        </div>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from 'vue'
import topnav from '../components/Topnav.vue'
export default {
  components: { topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')

    return { asideVisible }
  },
}
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 80px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }

    > aside {
      width: 150px;
      padding: 16px 0;
      position: fixed;
      top: 0;
      left: 0;
      height: auto;
      margin-top: 80px;
      height: 100%;
      z-index: 10;
      border-right: 1px solid #e8e8e8;
      box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      padding-bottom: 32px;

      @media (max-width: 500px) {
        width: 180px;
        background-color: white;
        transition: all 0.25s ease;
        transform: translateX(-200px);
        &.visible {
          transform: translateX(0px);
        }
      }

      > div {
        display: flex;
        flex-direction: column;
        width: 100%;
        > h2 {
          margin-bottom: 4px;
          padding: 0 16px;
        }
        > ol {
          > li {
            a {
              display: block;
              padding: 4px 16px;
              text-decoration: none;
              &:hover {
                background: #e5f2fa;
                border-bottom: none;
              }
            }

            .router-link-active {
              position: relative;
              background-color: #e5f2fa;
              border-right: none;
              &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                height: 100%;
                border-right: 3px solid #6b9ab8;
              }
            }
          }
        }
      }
    }

    > main {
      flex-grow: 1;
      padding: 16px;
      background: white;
      border-radius: 6px;
      overflow: auto;
    }
  }
}
</style> 