<template>
<div class="itemlist">
  <item-card name="GuldDame 40Cl" :value="18"/>
  <item-card name="Grøn Tuborg" :value="12"/>
  <item-card name="Fine Festival" :value="15"/>
  <item-card name="GuldDame" :value="18"/>
  <item-card name="GuldDame 40Cl" :value="18"/>
  <item-card name="Grøn Tuborg" :value="12"/>
  <item-card name="Fine Festival" :value="15"/>
  <item-card name="GuldDame" :value="18"/>
  <item-card name="GuldDame 40Cl" :value="18"/>
  <item-card name="Grøn Tuborg" :value="12"/>
  <item-card name="Fine Festival" :value="15"/>
  <item-card name="GuldDame" :value="18"/>

</div>

</template>

<script>
import ItemCard from '@/components/ItemCard.vue'

export default {
  name: 'BeerView',
  components: {
    ItemCard
  }

//   props: {
//     msg: String
//   }
}
</script>


<style>
.itemlist {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
</style>