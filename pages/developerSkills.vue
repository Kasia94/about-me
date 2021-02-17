<template>
  <section class="skills">
    <div
      v-for="(item, index) in links"
      :key="index+'i'"
    >
      <b-img class="skill-icon" :src="item.src" />
    </div>
  </section>
</template>
<script>
export default {
  data: () => ({
    links: [
      { src: 'https://www.w3.org/html/logo/downloads/HTML5_Logo_512.png' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png' },
      { src: 'https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png' },
      { src: 'http://assets.stickpng.com/thumbs/58482acecef1014c0b5e4a1e.png' },
      { src: 'https://avatars.githubusercontent.com/u/22965283?s=280&v=4' },
      { src: 'https://miro.medium.com/max/500/1*tTmsdZ7SjZNhZ90AkkxUHw.png' },
      { src: 'https://camo.githubusercontent.com/a8bf3da6a2b756488b26692367a858ebbb4b5d77584c2fd6354fcafa7d93fd03/687474703a2f2f6769742d73636d2e636f6d2f696d616765732f6c6f676f732f646f776e6c6f6164732f4769742d4c6f676f2d32436f6c6f722e706e67' },
      { src: 'https://miro.medium.com/max/512/1*9U1toerFxB8aiFRreLxEUQ.png' }
    ]
  })
}
</script>
<style lang="scss" scoped>
.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5rem;
}

.skill-icon {
  display: inline-block;
  max-height: 25vh;
  max-width: 25vw;
  border-radius: 20%;
  padding: 1.5rem;
}

</style>
