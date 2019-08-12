<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" width="100px" height="100px">
        <h5><u>API GET Request <i>With</i> Authenticaion</u></h5>
        <h1>Jira Issues</h1>
        <jira-issues-table :issues="issues" :errors="errors" />
        
        <hr />
        
        <h5><u>API GET Request <i>WithOut</i> Authenticaion</u></h5>
        <h1>Users</h1>
         
         <div class="text-center">
          <v-pagination
            v-model="pagination.page"
            :length="pageCount"
            @input="onPageChange"
          >
          </v-pagination>
        </div>
        
        <user-table :users="paginatedUsers" />

  </div>
</template>

<script>
import http from '../services/httpService.js'
import UserTable from '../views/UserTable.vue'
import JiraIssuesTable from '../views/JiraIssuesTable.vue'

export default {

  name: 'app',
  components: {
      UserTable,
      JiraIssuesTable,
  },

  data() {
    return {    
      errors: [],
      users: [],
      paginatedUsers: [],
      issues: [],
      pagination: {
        page: 1,
        perPage: 4
      }
    }
  },

  mounted() {
    this.getJiraIssues()
    this.getUsers()
  },
  
  methods: {
    
    async getJiraIssues() {
      try {
        // https://umerfarooq.atlassian.net/rest/api/2/project
        // https://umerfarooq.atlassian.net/rest/api/2/issue/SUP-1
        const { data: response } = await http.get('https://umerfarooq.atlassian.net//rest/api/2/search?jql=project=SUP&maxResults=100', {
          auth: {
              username: 'umer.irl@gmail.com',
              password: 'Yd05bj8sBz6STw6HkbAd843C'
            }
        })
        this.issues = response.issues
      } catch (err) {
        console.error(err)
        this.errors.push(err)
      }
    },

    async getUsers() { 
      try {
        const { data: response } = await http.get('https://jsonplaceholder.typicode.com/users')
        this.users = response
      } catch (error) {
        console.error(error)
      }
    }

  },
  
  computed: {
    
    pageCount(page) {
      //console.log(page);
      let total = this.users.length;
      return Math.ceil( total / this.pagination.perPage);
    },

    onPageChange(page) {
      //console.log(page);
      let pageNumber = this.pagination.page;
      let perPage = this.pagination.perPage;
      let from = (pageNumber * perPage) - perPage;
      let to = (pageNumber * perPage);
      this.paginatedUsers = this.users.slice(from, to);
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

<style>

  hr {
    height: 3px;
    color: green;
    background-color: green;
    border: none;
    margin-top: 3%;
    margin-bottom: 3%;
  }

</style>
