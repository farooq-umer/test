<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    {{ info }}
      <button v-on:click="fetchData">Click me!</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  data () {
    return {
      info: null
    }
},
methods: {
    fetchData: function () {
    alert('Hello')
    axios
      .get('http://localhost:12345', {
      auth: {
              username: 'videoelephant',
              password: '12345'
            }
      })
      .then(response => (this.info = response))
      .catch(error => console.log(error))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  width: 640px;
  margin: 0 auto;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
