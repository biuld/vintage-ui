<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title class="md-display-1">登陆</md-dialog-title>

      <div class="input">
        <md-field md-clearable>
          <label>用户名</label>
          <md-input v-model="credence.username"></md-input>
        </md-field>

        <md-field>
          <label>密码</label>
          <md-input v-model="credence.password" type="password"></md-input>
        </md-field>
      </div>

      <md-dialog-actions>
        <md-button class="md-accent" @click="showDialog = false">取消</md-button>
        <md-button class="md-primary" @click="confirm()">登陆</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-snackbar
      md-position="center"
      :md-duration="4000"
      :md-active.sync="popup"
      :md-persistent="true"
    >
      <span>登陆成功! {{ credence }}</span>
      <md-button class="md-primary">Retry</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: "Login",
  props: {
    active: Boolean
  },
  data: function() {
    return {
      popup: false,
      showDialog: false, //a copy of active 
      credence: {
        username: null,
        password: null
      }
    };
  },
  watch: {
    active: function(val) {
      this.showDialog = val;
    }
  },
  methods: {
    confirm: function() {
      this.popup = true;
      this.$emit("confirm", this.credence);
    },
  }
};
</script>

<style scoped>
.input {
  padding: 1rem;
  display: flex;
  flex-flow: row wrap;
}
</style>