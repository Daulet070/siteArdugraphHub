<template>
  <div
    class="layout"
    @click="toggleSidebar"
  >
    <Sidebar />
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Sidebar from './Sidebar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default {
  name: 'SpecialLayout',
  components: {
    Sidebar,
    Header,
    Main,
    Footer
  },
  // computed: {
  //   layout () {
  //     if (this.$page.path) {
  //       if (this.$frontmatter.layout) {
  //         // You can also check whether layout exists first as the default global layout does.
  //         return this.$frontmatter.layout
  //       }
  //       return 'Layout'
  //     }
  //     return 'NotFound'
  //   }
  // },
  methods: {
    toggleSidebar(evt) {
      const target = evt.target;
      const mobileMenuBtn = document.querySelector('.menu');
      const mobileMenuOverlay = document.querySelector('#mobileMenu');
      // console.dir(evt.target);

      if(!target.matches('.menu')) {
        mobileMenuBtn.classList.remove('opened');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuOverlay.style.setProperty('--x', `250px`);
        return;
      }

      const isOpen = target.classList.toggle('opened');

      target.setAttribute('aria-expanded', isOpen);
      
      const offset = isOpen ? 0 : 250;
      
      mobileMenuOverlay.style.setProperty('--x', `${offset}px`);
    }
  }
}
</script>
<style lang="scss">
@import '../styles/scss/index.scss';
</style>
