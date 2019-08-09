<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.svg" width="100px" height="100px">
        <h5><u>API GET Request <i>With</i> Authenticaion</u></h5>
        <h1>Jira Issues</h1>
        <jira-issues-table :issues="issues" :errors="errors" />
  </div>
</template>

<script>
import http from '../services/httpService.js'
import JiraIssuesTable from '../views/JiraIssuesTable.vue'

export default {

  name: 'app',
  components: {
      JiraIssuesTable
  },

  data() {
    return {    
      errors: [],
      users: [],
      issues: []
    }
  },

  mounted() {

    this.getJiraIssues()
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
    }
  }

}
</script>

<style></style>
