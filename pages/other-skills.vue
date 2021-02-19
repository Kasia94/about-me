<template>
  <b-container>
    <b-row class="bg-puzzle">
      <!-- <b-col
        v-for="i in 12"
        :key="i"
        cols="2"
      >
        <div
          class="d-flex align-items-center justify-content-center flex-fill"
        >
          center
          <b-icon
            icon="puzzle-fill"
            scale="18"
            :variant="['success', 'warning', 'danger', 'info'][i%4]"
            :rotate="i%2 ? 90 : 0"
          />
      </div>
      </b-col> -->
    </b-row>
    <b-row no-gutters class="mt-5">
      <b-col
        v-for="(skill, i) in skills"
        :key="i"
        cols="6"
        sm="6"
        md="4"
        lg="3"
      >
        <div
          class="puzel"
          :class1="['bg-success', 'bg-primary', 'bg-warning', 'bg-danger', 'bg-info'][i%5]"
          :class="['bg-puzzle-'+[i%5+1]]"
        >
          <div class="t" />
          <div class="r" />
          <div class="b" />
          <div class="l" />
          <div class="text">
            {{ skill.name }}
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  data: () => ({
    skills: [
      {
        name: 'zdolność szybkiej i efektywnej nauki'
      },
      {

        name: 'umiejętności interpersonalne'

      },
      {

        name: ' Umiejętność adaptacji '
      },
      {

        name: 'prawo jazdy B1'
      },
      {

        name: 'kreatywność'

      },
      {

        name: 'samodzielność'

      },
      {

        name: 'j.angielski B1/B2'
      },
      {

        name: 'cierpliwość'
      },
      {
        name: 'korzystanie z dokumentacji'
      },
      {
        name: 'logiczne myślenie'
      },
      {
        name: 'rozwiązywanie problemów'
      },
      {
        name: 'umiejętność planowania'
      }
    ]
  }),
  head () {
    return {
      title: 'Umiejętności'
    }
  }

}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

$widths:
  xs 30px,
  sm 35px,
  md 40px,
  lg 45px,
  xl 50px;

@each $bp, $px in $widths {
  .x { color: red; }
}

.puzel {
  width: 100%;
  padding-top: 100%;
  position: relative;

  .text {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20%;
    overflow: hidden;
    margin-left: 1rem;
  }

  .t,
  .r,
  .b,
  .l {
    position: absolute;
    width: 20%;
    padding-top: 20%;
    border-radius: 50%;
    z-index: 1;
    transform: translate(-50%);
  }

  .t {
    background: white;
    top: -4%;
    left: 50%;
  }

  .r {
    background: inherit;
    right: -24.5%;
    top: 50%;
    z-index: 2;
    width: 20.5%;
    border-radius: 0 50% 50% 0;
  }

  .b {
    background: inherit;
    bottom: -16%;
    left: 50%;
    z-index: 2;
    padding-top: 20.5%;
    border-radius: 0 0 50% 50%;
  }

  .l {
    background: white;
    left: 4%;
    top: 50%;
  }
}

//----------------stare

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
