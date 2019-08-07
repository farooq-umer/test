<template>
  <div id="issues-table">
    <table>
      <thead>
        <tr>
          <th>Issue Key</th>
          <th>Issue Type</th>
          <th>Issue Priority</th>
          <th>Issue Status</th>
          <th>Issue Summary</th>
          <th>Issue Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="issue in issues" :key="issue.id">
          <td>{{ issue.key }}</td>
          <td>{{ issue.fields.issuetype.name }}</td>
          <td>{{ issue.fields.priority.name }}</td>
          <td>{{ issue.fields.status.name }}</td>
          <td>{{ issue.fields.summary }}</td>
          <td>{{ issue.fields.description }}</td>
        </tr>
      </tbody>
    </table>

    <ul v-if="errors && errors.length">
    <li v-for="error in errors">
      {{error.message}}
    </li> 
    
  </ul>

  </div>
</template>

<script>
  export default {
    name: 'jira-issues-table',
    props: {
        issues: {},
        errors: Array,
    },
  }
</script>

<style scoped></style>