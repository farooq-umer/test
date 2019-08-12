<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" width="100px" height="100px">
        <h1>Posts</h1>
         <div class="text-center">
          <v-pagination
            v-model="pagination.page"
            :length="pageCount"
            :total-visible="pagination.visible"
            @input="onPageChange"
          >
          </v-pagination>
        </div>
        
        <posts-table :posts="paginatedPosts" />

  </div>
</template>

<script>
import http from '../services/httpService.js'
import PostsTable from '../views/PostsTable.vue'

export default {

  name: 'app',
  components: {

      PostsTable
  },

  data() {
    return {
      allPosts: [],
      paginatedPosts: [],
      pagination: {
        page: 1,
        perPage: 11,
        visible: 7
      }
    }
  },

  mounted() {
    
    this.getPosts()
  },
  
  methods: {

    async getPosts() { 
      try {
        const { data: response } = await http.get('https://jsonplaceholder.typicode.com/posts')
        this.allPosts = response
      } catch (error) {
        console.error(error)
      }
    }

  },
  
  computed: {
    
    pageCount(page) {
      //console.log(page);
      let total = this.allPosts.length;
      return Math.ceil( total / this.pagination.perPage);
    },

    onPageChange(page) {
      //console.log(page);
      let pageNumber = this.pagination.page;
      let perPage = this.pagination.perPage;
      let from = (pageNumber * perPage) - perPage;
      let to = (pageNumber * perPage);
      this.paginatedPosts = this.allPosts.slice(from, to);
    }

  },

  watch: {

    "pagination.page": (pageNumber) => {
        //console.log(pageNumber); @input="onPageChange"
        //this.onPageChange(pageNumber);
    }

  }

}
</script>

<style></style>
