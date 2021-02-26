<template>
  <section :class="{ 'navbar-wrapper': $route.path !== '/'}">
    <b-navbar
      :class="{
        'navbar-main': $route.path === '/',
        'show-bg': showBg
      }"
      toggleable="lg"
      :type="$route.path === '/' ? 'dark' : 'light'"
    >
      <b-navbar-toggle target="nav-collapse" />
      <b-navbar-brand class="name" :class="{'name-light': $route.path === '/'}" href="/">
        WEB DEVELOPER
      </b-navbar-brand>
      <b-collapse id="nav-collapse" class="coolapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="profile-section d-lg-none" />
          <b-nav-item
            v-for="(item, index) in menu"
            :key="index"
            class="nav-item"
            :class="{'mt-0': $route.path === '/'}"
            :to="item.to"
            exact
          >
            <b-icon :icon="item.icon" class="icon" />
            <span>{{ item.text }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </section>
</template>
<script>
export default {
  data: () => ({
    menu: [
      {
        icon: 'person-fill',
        text: 'O mnie',
        to: '/'
      },
      {
        icon: 'code-square',
        text: 'Umiejętności programistyczne',
        to: '/developer-skills'
      },
      {
        icon: 'plus',
        text: 'Inne umiejętności',
        to: '/other-skills'
      },
      {
        icon: 'images',
        text: 'Galeria',
        to: '/gallery'
      },
      {
        icon: 'sun',
        text: 'Pogoda',
        to: '/weather'
      },
      {
        icon: 'envelope-fill',
        text: 'Kontakt',
        to: '/contact'
      }
    ],

    showBg: false
  }),
  mounted () {
    document.addEventListener('scroll', () => {
      this.showBg = window.scrollY > 100
    })
  },
  methods: {
    scrolling () {
      const navigation = document.querySelectorbyClass('main-navbar')
      navigation.classList.add('scrolled')
    }
  }
}
</script>
<style lang="scss" scoped>

@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
@import "~bootstrap/scss/mixins";

.navbar {
  justify-content: flex-start;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;

  &-wrapper:not(.navbar-main) {
    margin-top: 60px;
  }

  &-main {
    background: black;
  }

  @include media-breakpoint-up(lg) {
    background: transparent;
  }

  &.navbar-main.show-bg {
    background-color: black;
  }

  &-brand {
    margin-left: 20px;
    justify-self: flex-start;
  }

  &-collapse {
    width: 100%;
    justify-content: flex-end;
    z-index: 1000;
  }

  &:not(.navbar-main) {
    background: white;
  }
}

// .navbar {
//   width: 100%;
// }

// .main-navbar-main {
//   position: fixed;
//   background-color: $myColorBase;
//   // box-shadow: inset 200px 0 200px $shineColor;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;
//   justify-content: space-between;
//   color: rgb(0, 0, 0) !important;
//   // transition: background-color 0.2s ease;
//   z-index: 5;

//   &.show-bg {
//     background-color: $myColorBase !important;
//   }

//   @include color-large-menu ;
//   @include small;

//   &.scrolled {
//     background-color: $myColorBase !important;
//   }

//   a.nav-link {
//     padding-top: 2rem;
//     color: white !important;

//     &:hover {
//       color: lightblue !important;
//     }
//   }
// }

// .name {
//   font-size: 1.5rem;
//   font-weight: bold;
//   margin: auto;
// }

// .name-light {
//   color: white;
// }

// // .navbar-toggle {
// //   display: inline-block;
// //   align-items: flex-start;
// //   border-radius: 2px;
// //   position: absolute;
// //   top: 10px;
// //   margin-bottom: 1rem;

// .navbar-toggler {
//   background-color: white;
// }

// .collapse {
//   flex-direction: column !important;
//   // flex: 1 0 100%;
//   align-items: center;
// }

// .about-text {
//   font-size: 0.975rem;
// }

// .nav-item {
//   font-weight: bold;
//   height: 3rem;
//   width: auto;
//   text-align: left;
//   padding: 0;
//   margin-top: 1.5rem;
//   margin-left: 2rem;

//   @include large;
// }

// .icon {
//   overflow: visible;
//   width: 1.25em;
//   // margin-right: 0.5rem !important;
//   text-align: center;
//   display: inline-block;
//   font-size: inherit;
//   height: 1em;
//   vertical-align: -0.125em;
// }

// .header {
//   padding-top: 7rem;
//   padding-bottom: calc(10rem - 4.5rem);
//   background: linear-gradient(to bottom, rgba(84, 207, 255, 0) 0%, rgba(136, 207, 255, 0) 100%), url(../assets/img/img5.jpg);
//   width: 100%;
//   height: 450px;
//   background-position: center;
//   background-repeat: no-repeat;
//   background-attachment: scroll;
//   background-size: cover;
//   z-index: 0;
// }

// .container {
//   height: 100% !important;
//   display: block;
//   columns: auto;
//   text-align: center;
//   word-wrap: break-word;
//   font-size: 1.5rem;
//   font-weight: bolder;
// }

</style>
