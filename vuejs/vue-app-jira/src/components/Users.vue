<template>
    <div>
        <img alt="Vue logo" src="../assets/logo.png" width="100px" height="100px">
        <h5><u>API GET Request <i>WithOut</i> Authenticaion</u></h5>

        <h1>Users</h1>
        <user-table :users="users" />
  </div>
</template>

<script>
import http from '../services/httpService.js'
import UserTable from '../views/UserTable.vue'

export default {

  name: 'app',
  components: {
      UserTable
  },

  data() {
    return {    
      users: []
    }
  },

  mounted() {

    this.getUsers()
  },

  methods: {

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

<style></style>
