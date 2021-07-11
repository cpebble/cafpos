<template>
  <md-list-item>
      <div class="md-list-item-text">
          <span>{{Name}}</span>
          <span>{{Price}} * {{Amount}} = {{total}}</span>
      </div>
  </md-list-item>
</template>

<script>
export default {
  name: "LineItem",
  props: {
    Name: String,
    Price: Number,
    Amount: Number,
  },
  computed: {
    total () {
      return this.$props.Price * this.$props.Amount;
    }
  }
};
</script>

<style>
</style>