<template>
    <ul class="pagination">
        <li v-for="page in pages" :key="page">
            {{page}}
        </li>
    </ul>
</template>
<script>
import { range } from '../helpers/utils';

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
        currentPage: {
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
            return range(1, pagesCount);
        }
    }
    
}
</script>
<style lang="scss" scoped>

</style>