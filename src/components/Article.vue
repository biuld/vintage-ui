<template>
  <md-content class="content md-elevation-5">
    <div class="head">
      <div class="md-headline">{{title}}</div>
      <div class="md-caption">written by {{author}}, {{pageView}} views</div>
    </div>

    <div class="md-body body" v-html="content"></div>

    <div class="md-caption">本条目发布于{{gmtCreate}}，修改于{{gmtModify}}。被贴了 {{tags}} 标签。</div>
  </md-content>
</template>

<script>
export default {
  props: {
    articleId: Number
  },
  data: function() {
    return {
      title: "文章标题",
      author: "biuld",
      gmtCreate: "2019-9-19",
      gmtModify: "2019-9-19",
      pageView: "1984",
      tags: ["标签1", "标签2", "标签3"],
      content: `<div class="md-body-1">内容示例</div>`
    };
  },
  methods: {
    get: function(id) {
      console.log(id);
    }
  },
  mounted: function() {
    this.get(this.articleId);
  }
};
</script>

<style scoped>
.content {
  display: flex;
  flex-flow: column nowrap;
  min-height: 80vh;
  margin: auto;
  width: 65%;
  padding: 3vw;
  justify-content: space-between;
}

.head {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.body {
  flex-grow: 1;
  padding: 2vw;
  margin-top: 1rem;
}

@media (max-width: 959px) {
  .content {
    width: 100%;
  }
}
</style>