<template>
  <md-card>
    <md-card-header>
      <div class="md-title">- {{Name}} -</div>
    </md-card-header>
    <md-card-content>{{Value}}</md-card-content>
    <md-card-actions>
      <md-button v-on:click="addLineItem">Tilføj</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
      Name: String,
      Value: Number
  },
  methods: {
    addLineItem (){
      this.$store.commit(
        "addLineItem", {
          name: this.$props.Name, 
          price: this.$props.Value, 
          amount: 1
        });
    }
  }
}
</script>


<style>
.md-card {
  margin: 4px;
  vertical-align: top;
}
</style>