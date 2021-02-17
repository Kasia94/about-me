<template>
  <b-container>
    <b-row class="bg-puzzle">
      <b-col
        v-for="i in 12"
        :key="i"
        cols="2"
      >
        <div
          class="d-flex align-items-center justify-content-center flex-fill"
        >
          center
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head () {
    return {
      title: 'Inne Umiejętności'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.bg-puzzle {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-image: url('~@/assets/img/puzzels.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
    margin-left: -5%;
    margin-right: -5%;
    // opacity: 0.5;
    // filter: blur(3px);
  }

  $col-custom:
    sm 40px 120px,
    md 45px 160px,
    lg 50px 215px,
    xl 70px 260px;

  .col-2 {
    display: flex;

    @each $bp, $padding, $height in $col-custom {
      &:nth-child(-n+6) {
        @include media-breakpoint-only($bp) {
          padding-top: $padding;
        }
      }

      &:nth-child(n+7) {
        @include media-breakpoint-only($bp) {
          padding-bottom: $padding;
        }
      }

      @include media-breakpoint-only($bp) {
        height: $height;
      }
    }
  }
}
</style>
