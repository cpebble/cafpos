<template>
  <div id="app">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">Cafeen POS</span>
        <md-tabs class="md-primary" md-sync-route>
          <md-tab id="tab-beer" md-label="Drikkelse" :to="'/beers'"></md-tab>
          <md-tab id="tab-about" md-label="Omkring" to="/about"></md-tab>
        </md-tabs>
      </md-app-toolbar>
      <md-app-content>
        <router-view/>
      </md-app-content>
      <md-app-drawer md-permanent="full" md-right>
        <md-toolbar>
          <span class="md-title">Line Items</span>
        </md-toolbar>
        <line-items/>
      </md-app-drawer>
    </md-app>
  </div>
</template>

<script>
import LineItems from '@/components/LineItems.vue'
export default {
  components: {
    LineItems
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}
</style>
