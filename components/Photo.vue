<template>
  <div class="test">
    wstaw img
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/variables';
// $red: red;

@mixin test {
  // background: $red;
}

.test {
  @include test;

  // color: $red;
}
</style>
