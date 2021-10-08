<template>
    <div>pagination</div>
</template>
<script>
export default {
    name: 'Pagination',
    props: {
        total: {
            type: Number,
            required: true
        },
        limit: {
            type: Number,
            required: true
        },
        currenPage: {
            type: Number,
            required: true
        },
        url: {
            type: String,
            required: true
        },
    },
    computed: {
        pages() {
            const pagesCount = this.total / this.limit;
            
        }
    }
    
}
</script>
<style lang="scss" scoped>

</style>