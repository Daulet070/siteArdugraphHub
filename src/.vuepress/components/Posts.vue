<template>
  <section class="post-container">
    <router-link 
      v-for="page in pages"
      :to="page.path" 
      v-bind:key="page.key"
      class="post-link"
    >
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
    <pagination :total="pages.length" :limit="limit" :current-page="currentPage" :url="baseUrl" />
    <div class="paginationz">pages length: {{pages.length}}</div>
  </section>
</template>
<script>
import Pagination from './Pagination';
import { limit } from '../helpers/vars';

export default {
  data() {
    return {
      pages: [],
      limit,
    }
  },
  components: {
    Pagination
  },
  computed: {
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      // console.log('comp',this.$route.path)
      return this.$route.path
    }
  },
  watch: {
    currentPage() {
      console.log('CP changed')
    }
  },
  mounted() {
    
    // console.log(this.$site.pages);
    this.$site.pages.forEach(page => {
      
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
    gap: 3rem;
  }
  .post-link {
    word-wrap: break-word;
  }
  .post-card {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    gap: 1.5rem;
    flex-wrap: wrap;
    // align-items: center;
    background-color: #EBECF0;
    box-shadow: -5px -5px 20px #fff,  5px 5px 20px #BABECC;
    transition: all 0.2s ease-in-out;

    &:hover {
      box-shadow: -2px -2px 5px #fff, 2px 2px 5px #BABECC;
    }

    @media (min-width: 576px) {
      flex-direction: row;
    }

  }
  .post-card-header {
    flex-basis: 100%;
    height: 200px;
    background-color: #BABECC;
    /*background-image: url('../public/img/missing_original.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;*/
    @media (min-width: 600px) {
      flex-basis: 200px;
    }
  }
  .article-image {
    width: 100%;
    height: 200px;
    display: block;
    object-fit: cover;
  }
  .post-card-body {
    padding: 1rem;
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