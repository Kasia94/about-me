<template>
  <b-navbar class="navbar" toggleable="lg" type="light">
    <b-navbar-brand class="name" href="#">
      Katarzyna Skibińska
    </b-navbar-brand>
    <b-navbar-toggle class="navbar-toggle" target="nav-collapse" />
    <b-collapse id="nav-collapse" class="coolapse" is-nav>
      <b-navbar-nav>
        <div class="profile-section d-lg-none">
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
        </div>
        <b-nav-item class="nav-item active">
          <a class="nav-link"><b-icon icon="person-fill" class="icon" /> O mnie<span /></a>
        </b-nav-item>
        <b-nav-item class="nav-item">
          <a class="nav-link"><b-icon icon="code-square" class="icon" /> Umiejętności programistyczne<span /></a>
        </b-nav-item>
        <b-nav-item class="nav-item">
          <a class="nav-link"><b-icon icon="briefcase-fill" class="icon" /> Projekty<span /></a>
        </b-nav-item>
        <b-nav-item class="nav-item">
          <a class="nav-link"><b-icon icon="file-plus" class="icon" /> Inne umiejętności<span /></a>
        </b-nav-item>
        <b-nav-item class="nav-item">
          <a class="nav-link"><b-icon icon="envelope-fill" class="icon" /> Kontakt<span /></a>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import "@/assets/scss/variables";
@import "@/assets/scss/mixins";

.navbar {
  position: relative;
  background-color: $myColorBase;
  box-shadow: inset 50px 0 190px $shineColor;
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
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
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
  flex-basis: 100%;
  flex-grow: 1;
  align-items: center;
}

.profile-section {
  display: block;
  padding-top: 1rem;
  text-align: center;
  box-sizing: border-box;

  &.face {
    padding: 0;
    width: 160px;
    height: 160px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 1rem;

    &.main {
      border-radius: 20%;
      height: 200px;
      width: 200px;
    }
  }

  &.about-text {
    font-size: 0.975rem;
    // font-weight: bolder;
  }
}

.nav-item {
  font-weight: bold;
  display: list-item;
  height: 3rem;
  width: auto;
  text-align: left;
  margin: 0;
  padding: 0;

  @include large;
}

.nav-link {
  padding-top: 1rem;
  color: rgba(0, 0, 0, 0.986);
}

.svg {
  overflow: visible;
  width: 1.25em;
  margin-right: 0.5rem !important;
  text-align: center;
  display: inline-block;
  font-size: inherit;
  height: 1em;
  vertical-align: -0.125em;
}

</style>
