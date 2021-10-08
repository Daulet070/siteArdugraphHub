<template>
  <section class="post-container">
    <router-link v-for="page in pages" :to="page.path" v-bind:key="page.key">
      <article class="post-card">
        <div class="post-card-header">
          <img class="article-image" v-bind:src="page.frontmatter.image">
        </div>
        <div class="post-card-body">
          <div class="page-detail">
            <h3 class="page-title">{{ page.title }}</h3>
            <p class="page-description">{{ page.frontmatter.description }}</p>
            <span class="page-author">Author: {{ page.frontmatter.author }}</span>
          </div>
        </div>
        <div class="post-card-footer">
          <span class="post-tag">tag</span>
        </div>
      </article>
    </router-link>
    <pagination :total="pages.length" :limit="3" :current-page="2" :url="url" />
    <div class="paginationz">pages length: {{pages.length}}</div>
  </section>
</template>
<script>
import Pagination from './Pagination';

export default {
  data() {
    return {
      url: '',
      pages: []
    }
  },
  components: {
    Pagination
  },
  mounted() {
    
    console.log(this.$site.pages);
    this.$site.pages.forEach(page => {
      
      if(page.title === 'Blog') {
        console.log(page.path);
        this.url = page.path;
      }
      
      if (page.frontmatter.type === 'article') {
        this.pages.push(page)
      }
    })
  }
}
</script>
<style lang="scss" scoped>

  .post-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .post-card {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 1.5rem;
    flex-wrap: wrap;
    align-items: center;
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

    @media (min-width: 576px) {
      flex-direction: row;
    }

  }
  .article-image {
    /* flex-basis: 200px; */
    width: 200px;
  }
  // .page-detail {

  // }
  // .page-title {

  // }
  // .page-description {

  // }
  // .page-author {

  // }
  .post-card-footer {
    display: none;
    flex-basis: 100%;
  }
</style>