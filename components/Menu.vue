<template>
  <section>
    <b-navbar v-scroll="scrolling" class="main-navbar" toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse" />
      <b-navbar-brand class="name" href="#">
        WEB DEVELOPER
      </b-navbar-brand>
      <b-collapse id="nav-collapse" class="coolapse" is-nav>
        <b-navbar-nav>
          <b-nav-item class="profile-section d-lg-none">
            <!-- <b-img
              class="profile-section face"
              src="profile-face.png"
              rounded="circle"
              alt="Circle image"
            />
            <div class="profile-section about-text">
              <p>
                Cześć ! Nazywam się Kasia. Witaj na mojej stronie, gdzie możesz
                poznać mnie i moje umiejętności.
              </p>
            </div> -->
          </b-nav-item>
          <b-nav-item
            v-for="(item, index) in menu"
            :key="index"
            class="nav-item"
            :to="item.to"
            exact
          >
            <b-icon :icon="item.icon" class="icon" />
            <span>{{ item.text }}</span>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <!-- <header class="header">
      <div class="container text-light">
        <h2>
          Katarzyna Skibińska
        </h2>
        <p class="mt-5 ">
          Cześć ! Nazywam się Kasia. Witaj na mojej stronie, gdzie możesz
          poznać mnie i moje umiejętności.
        </p>
      </div>
    </header> -->
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
        icon: 'envelope-fill',
        text: 'Kontakt',
        to: '/contact'
      }
    ]
  }),
  methods: {
    scrolling () {
      const navigation = document.querySelectorbyClass('main-navbar')
      navigation.classList.add('scrolled')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.main-navbar {
  position: fixed;
  background-color: $myColorBase;
  box-shadow: inset 200px 0 200px $shineColor;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: rgb(0, 0, 0) !important;
  transition: background-color 0.2s ease;
  z-index: 5;

  @include color-large-menu ;

  &.scrolled {
    background-color: $myColorBase !important;
  }
}

.scrolled {
  background-color: $myColorBase !important;
}

.name {
  font-size: 1.5rem;
  font-weight: bold;
  margin: auto;
}

.navbar-toggle {
  display: inline-block;
  align-items: flex-start;
  border-radius: 2px;
  position: absolute;
  top: 10px;
  margin-bottom: 1rem;

  @include small;
}

.collapse {
  flex-direction: column !important;
  // flex: 1 0 100%;
  align-items: center;
}

.about-text {
  font-size: 0.975rem;
}

.nav-item {
  font-weight: bold;
  height: 3rem;
  width: auto;
  text-align: left;
  margin: 0;
  padding: 0;

  @include large;
}

a.nav-link {
  padding-top: 2rem;
  color: white !important;

  &:hover {
    color: lightblue !important;
  }
}

.icon {
  overflow: visible;
  width: 1.25em;
  // margin-right: 0.5rem !important;
  text-align: center;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -0.125em;
}

.header {
  padding-top: 7rem;
  padding-bottom: calc(10rem - 4.5rem);
  background: linear-gradient(to bottom, rgba(84, 207, 255, 0) 0%, rgba(136, 207, 255, 0) 100%), url(../assets/img/img5.jpg);
  width: 100%;
  height: 450px;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: cover;
  z-index: 0;
}

.container {
  height: 100% !important;
  display: block;
  columns: auto;
  text-align: center;
  word-wrap: break-word;
  font-size: 1.5rem;
  font-weight: bolder;
}

</style>
