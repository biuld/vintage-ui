<template>
  <div class="md-layout main">
    <article-card class="md-layout-item md-size-100 item" />
    <article-card class="md-layout-item md-size-100 item" />
    <article-card class="md-layout-item md-size-100 item" />
    <article-card class="md-layout-item md-size-100 item" />
  </div>
</template>

<script>
import ArticleCard from "./ArticleCard";

export default {
  components: {
    "article-card": ArticleCard
  }
};
</script>

<style scoped>
.main {
  margin: auto;
  width: 65%;
}

.item {
  margin-bottom: 3vh;
}

@media (max-width: 959px) {
  .main {
    width: 100%;
  }
}
</style>