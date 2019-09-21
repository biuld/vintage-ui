<template>
  <md-app md-mode="fixed" id="app">
    <md-app-toolbar class="md-primary">
      <tool-bar @toggleMenu="toggleMenu" />
    </md-app-toolbar>

    <md-app-drawer :md-active.sync="menuVisible" md-swipeable>
      <navigation />
    </md-app-drawer>

    <md-app-content>
      <transition name="bounce" :duration="300">
        <router-view></router-view>
      </transition>
    </md-app-content>
  </md-app>
</template>

<script>
import Navigation from "./components/Navigation";
import ToolBar from "./components/ToolBar";
import bgImg from "./assets/bg.png";

export default {
  name: "app",
  data: function() {
    return {
      menuVisible: false,
      bg: bgImg
    };
  },
  components: {
    navigation: Navigation,
    "tool-bar": ToolBar
  },
  methods: {
    toggleMenu: function() {
      this.menuVisible = !this.menuVisible;
    },
    background: function() {
      return {backgroundImage: 'url(' + this.bg + ')'};
    }
  }
};
</script>

<style>
#app {
  min-height: 100vh;
  min-width: 100vw;
}
</style>
