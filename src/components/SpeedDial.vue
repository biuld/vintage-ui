<template>
  <div>
    <login :active.sync="active"/>
    <md-speed-dial class="md-bottom-right" md-direction="top" md-effect="scale" md-event="click">
      <md-speed-dial-target class="md-accent">
        <md-icon class="md-morph-initial">add</md-icon>
        <md-icon class="md-morph-final">close</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button md-primary" @click="toggleLogin()">
          <md-icon>rowing</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
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
      active: false
    };
  },
  methods: {
    toggleLogin: function() {
      this.active = !this.active;
    }
  }
};
</script>