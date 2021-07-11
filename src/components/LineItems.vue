<template>
  <md-list md-dense class="md-double-line">
    <md-list-item>
      <div class="md-list-item-text">Sum Total: {{total}}</div>
    </md-list-item>
    <line-item 
      v-for="line in receipt" 
      v-bind:name="line.name"
      v-bind:price="line.price"
      v-bind:amount="line.amount"/>
  </md-list>
</template>

<script>
import LineItem from "@/components/LineItem.vue"

export default {
  components: { LineItem },
  name: "LineItems",
  computed: {
    receipt () {
      return this.$store.state.receipt
    },
    total () {
      let r = this.receipt;
      let t = 0;
      for(let i = 0; i < r.length; i++)
        t += r[i].price * r[i].amount;
      return t;
    }
  }
}
</script>

<style>

</style>