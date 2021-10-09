<template>
    <div class="blog-content">
        <header class="blog-header">
            <div class="container">
                <h1 class="blog-heading">Ardugraph {{pages.title}}</h1>
            </div>
        </header>
        <section class="blog-main-content">
            <div class="container">
                <div class="main-content">
                    <div class="blog-posts">
                        <posts />
                    </div>
                    <div class="blog-info">
                        <aside class="blog-info-content">
                            <div class="user-card">
                                <img src="../public/img/img4.png" alt="User">
                                <span>Name</span>
                                <span>Descripion</span>
                            </div>

                        </aside>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
import Posts from './Posts';
export default {
    name: 'BlogPage',
    components: {
        Posts
    },
    data() {
        return {
            pages: []
        }
    },
    computed: {
    },
    mounted() {

        console.log("bp",this.$site.pages);
        this.$site.pages.forEach(page => {
            console.log('bpage', page);
        
            if (page.title === 'Blog') {
                console.log('bpage if blog', page);
                this.pages = page
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.container {
    width: calc(100% - 2rem);
    max-width: 1270px;
    margin: 0 auto;
    padding: 0 1rem;
}
.blog-header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    background: url('../public/files/arduinobg.jpg') no-repeat center / cover;
    text-align: center;
    color: #fff;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(100% - 2rem);
        max-width: 600px;
        height: 250px;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border-radius: 10px;
    }

}
.blog-heading {
    text-transform: uppercase;
    font-size: 50px;
    font-weight: 300;
    isolation: isolate;
}
.main-content {
    display: flex;
    flex-wrap: wrap-reverse;
    gap: 2rem;
    justify-content: center;

    @media (min-width: 1050px) {
        justify-content: space-between;
    }
}
// .blog-posts {
//     // flex: 1 0 auto;
// }
.blog-main-content {
    padding: 2rem 0;
    background-color: #EBECF0;
    /*background-image: url('../public/img/bg.jpg');
    background-attachment: fixed;*/
}
.user-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 300px;
    
    img {
        width: 100%;
        object-fit: cover;
    }
}
</style>