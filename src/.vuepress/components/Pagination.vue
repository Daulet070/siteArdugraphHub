<template>
    <ul class="pagination">
        <li v-for="page in pages" :key="page" class="pagination-item" :class="{active: currentPage === page}">
            <router-link :to="{path: url, query: {page: page}}" class="pagination-page-link">
                {{page}}
            </router-link>
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
.pagination {
    display: flex;
    flex-wrap: wrap;
    gap: .5rem;
    list-style: none;

    &-item {
        display: inline-flex;
        width: fit-content;
        height: auto;
        border: 1px solid #000;
        color: inherit;

        &:hover:not(.active) {
            background-color: #3eaf7c;
            color: #fff;
        }
    }
    
    &-page-link {
        background-color: transparent;
        padding: .2em .8em;
        text-decoration: none !important;
        transition: all .2s ease;
        color: inherit;

    }
}
.active {
    background-color: #3eaf7c;
    color: #fff;
}
</style>