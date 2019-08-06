<template>
    <div id="app">
    div(
      v-for="user in users"
      :key="users.id"
    )
      h1 {{ user.name }}
      p {{ user.email }}
    button(@click="fetchUsers") Click me!
    </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      users: []
    }
  },
  methods: {
    fetchUsers: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com/users'
      this.$http.get(baseURI)
      .then((result) => {
        this.users = result.data
      })
    }
  }
}
<script>
