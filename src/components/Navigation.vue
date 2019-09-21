<template>
  <div>
    <md-toolbar class="md-transparent" md-elevation="0">
      <span>导航</span>
    </md-toolbar>

    <md-list>
      <md-list-item to="/">
        <md-icon>home</md-icon>
        <span class="md-list-item-text">主页</span>
      </md-list-item>

      <md-list-item to="/category">
        <md-icon>bookmark</md-icon>
        <span class="md-list-item-text">文章分类</span>
      </md-list-item>

      <md-list-item to="/about">
        <md-icon>face</md-icon>
        <span class="md-list-item-text">关于我</span>
      </md-list-item>

      <md-list-item to="/tags">
        <md-icon>label</md-icon>
        <span class="md-list-item-text">标签云</span>
      </md-list-item>
    </md-list>
  </div>
</template>