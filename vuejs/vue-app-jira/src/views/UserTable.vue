<template>
  <div id="user-table">
    <table>
      <thead>
        <tr>
          <th>User name</th>
          <th>User email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'user-table',
    props: {
        users: Array,
    },
  }
</script>

<style scoped></style>