<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" width="100px" height="100px">
        <h5><u>API GET Request <i>With</i> Authenticaion</u></h5>
        <h1>Jira Issues</h1>
        <jira-issues-table :issues="issues" :errors="errors" />
        <hr />
        <h5><u>API GET Request <i>WithOut</i> Authenticaion</u></h5>
        <h1>Users</h1>
        <user-table :users="users" />
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
      issues: []
    }
  },

  mounted() {
    this.getUsers()
    //this.getJiraIssues()
  },

  methods: {

    async getJiraIssues() {
      try {
        // https://umerfarooq.atlassian.net/rest/api/2/project
        // https://umerfarooq.atlassian.net/rest/api/2/issue/SUP-1
        const { data: response } = await http.get('https://umerfarooq.atlassian.net//rest/api/2/search?jql=project=SUP&maxResults=10', {
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
