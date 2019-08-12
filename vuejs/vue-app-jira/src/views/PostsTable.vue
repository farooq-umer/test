<template>
  <div id="posts-table">
    <table>
      <thead>
        <tr>
          <th>Post Id</th>
          <th>Post Title</th>
          <th>Post Body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="post in posts" :key="post.id">
          <td>{{ post.id }}</td>
          <td>{{ post.title }}</td>
          <td>{{ post.body }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'posts-table',
    props: {
        posts: Array,
    },
  }
</script>

<style scoped></style>