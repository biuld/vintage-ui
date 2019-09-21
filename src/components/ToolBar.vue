<template>
  <div>
    <div class="row">
      <div class="start">
        <md-button class="md-icon-button" @click="toggleMenu()">
          <md-icon>menu</md-icon>
        </md-button>

        <span class="md-title md-xsmall-hide" @click="home()">vintage</span>
      </div>

      <md-autocomplete class="search" v-model="keyword" :md-options="candidate" md-layout="box">
        <label>
          <md-icon>search</md-icon>
          <span>Search...</span>
        </label>
      </md-autocomplete>

      <div class="end">
        <md-menu md-direction="bottom-end" md-align-trigger md-size="auto" class="menu">
          <md-button class="md-icon-button" md-menu-trigger>
            <md-icon>more_vert</md-icon>
          </md-button>

          <md-menu-content>
            <md-menu-item @click="toggleLogin()">
              <md-icon>rowing</md-icon>
              <span>登陆</span>
            </md-menu-item>
          </md-menu-content>
        </md-menu>
      </div>
    </div>

    <login :active.sync="active" />
  </div>
</template>

<script>
import Login from "./Login";

export default {
  components: {
    login: Login
  },
  data: function() {
    return {
      active: false,
      keyword: null,
      candidate: [
        "Jim Halpert",
        "Dwight Schrute",
        "Michael Scott",
        "Pam Beesly",
        "Angela Martin",
        "Kelly Kapoor",
        "Ryan Howard",
        "Kevin Malone",
        "Creed Bratton",
        "Oscar Nunez",
        "Toby Flenderson",
        "Stanley Hudson",
        "Meredith Palmer",
        "Phyllis Lapin-Vance"
      ]
    };
  },
  methods: {
    toggleLogin: function() {
      this.active = !this.active;
    },
    toggleMenu: function() {
      this.$emit("toggleMenu");
    },
    home: function() {
      if (this.$route.path != "/") this.$router.push({ path: "/" });
    }
  }
};
</script>

<style scoped>
.row {
  min-width: 100vw;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
}

.start {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
}

.search {
  max-width: 500px;
}

.end {
  margin-right: 3vw;
}
</style>