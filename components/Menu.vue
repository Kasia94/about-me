<template>
  <b-navbar class="navbar" toggleable="lg" type="light">
    <b-navbar-toggle target="nav-collapse" />
    <b-navbar-brand class="name" href="#">
      WEB DEVELOPER
    </b-navbar-brand>
    <b-collapse id="nav-collapse" class="coolapse" is-nav>
      <b-navbar-nav>
        <b-nav-item class="profile-section d-lg-none">
          <b-img
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
          </div>
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
        icon: 'briefcase-fill',
        text: 'Projekty',
        to: '/contact'
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
  })
}
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.navbar {
  position: relative;
  background-color: $myColorBase;
  box-shadow: inset 300px 0 80px $shineColor;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  color: black !important;
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

// .profile-section {
//   display: block;
//   padding-top: 1rem;
//   text-align: center;
//   box-sizing: border-box;

//   &.face {
//     padding: 0;
//     width: 160px;
//     height: 160px;
//     margin: 1rem auto;
//   }
// }

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

.nav-link {
  padding-top: 2rem;
  color: rgba(0, 0, 0, 0);
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
</style>
