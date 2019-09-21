<template>
  <md-card>
    <md-card-header>
      <div class="md-title md-primary" @click="jump()">{{ title }}</div>
    </md-card-header>

    <md-card-content>
      <div class="article-info">
        <div class="article-item">
          <md-icon>account_box</md-icon>
          <span class="md-caption">{{author}}</span>
        </div>
        <div class="article-item">
          <md-icon>today</md-icon>
          <span class="md-caption">{{gmtCreate}}</span>
        </div>
        <div class="article-item">
          <md-icon>pageview</md-icon>
          <span class="md-caption">{{pageView}}</span>
        </div>
      </div>

      <p>{{abstract}}</p>
    </md-card-content>

    <md-card-actions class="foot">
      <div class="tags">
        <div v-for="(tag, index) in tags" :key="index">
          <md-icon>label</md-icon>
          <span class="md-caption">{{tag}}</span>
        </div>
      </div>
      <md-button class="md-primary" @click="jump()">继续阅读</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  props: {
    articleSummary: Object
  },
  data: function() {
    return {
      abstract:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed accusantium quasi non.",
      title: "文章标题",
      author: "作者",
      gmtCreate: "发表于",
      pageView: "浏览量",
      tags: ["标签1", "标签2", "标签3"],
      id: null
    };
  },
  methods: {
    dyeing: function() {
      const random = max => Math.floor(Math.random() * Math.floor(max));

      const color_palette = [
        "#f06292",
        "#7986cb",
        "#4db6ac",
        "#dce775",
        "#ff8a65"
      ];

      return {
        color: color_palette[random(color_palette.length)]
      };
    },
    jump: function() {
      var a = 123123;
      this.$router.push({ name: "article", params: { articleId: a } });
    }
  }
};
</script>

<style scoped>
.article-info {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: baseline;
}

.article-item {
  padding: 0;
  margin-right: 1rem;
}

.md-title:hover {
  color: #448aff;
}

.foot {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.tags {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: baseline;
}

.tags span:hover {
  color: #448aff;
}
</style>