<template>
    <div id="app">
      <v-container>
        <MenuBar />
        <router-view/>
      </v-container>
  </div>
</template>

<script>
import MenuBar from '@/components/MenuBar.vue'

export default {

  name: 'app',
  components: {
      MenuBar,
  }
}
</script>

<style>

  button {
    background: #009435;
    border: 1px solid #009435;
  }

</style>
