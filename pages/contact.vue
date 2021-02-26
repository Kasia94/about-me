<template>
  <div>
    <b-card
      class="contactCard"
      border-variant="warning"
      header="Kontakt"
      header-bg-variant="warning"
      align="center"
    >
      <b-card-text>
        <div>
          <b-icon animation="throb" icon="envelope" />
          <span>katarzyna.skibinska94@gmail.com</span>
        </div>
        <div>
          <b-icon animation="throb" class="mt-3" icon="phone" />
          <span> 661-519-442</span>
        </div>
      </b-card-text>
    </b-card>
  </div>
</template>

<script>

export default {

  head () {
    return {
      title: 'Kontakt'
    }
  }
}
</script>

<style lang="scss" scoped>
.contactCard {
  max-width: 30rem;
  max-height: 15rem;
  margin: auto;
  align-self: center;
  text-align: center;
  margin-top: 7rem;
}

</style>
