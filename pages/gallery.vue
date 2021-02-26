
<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      class="mt-2"

      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="700"
            height="480"
            src="https://www.rollingstone.com/wp-content/uploads/2018/08/1319_FOB_Mix_QnA_Slash_A.jpg?crop=900:600&width=910"
            alt="Slash"
          >
        </template>
        <h1>ulubiony gitarzysta</h1>
      </b-carousel-slide>
      <!-- Text slides with image -->
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="700"
            height="480"
            src="animal.jpg"
            alt="żółw wodno-lądowy"
          >
        </template>
        <h1>moja gadzina</h1>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="480"
            src="https://i.ytimg.com/vi/s61ECXV_5ik/maxresdefault.jpg"
            alt="talisman"
          >
        </template>
        <h1>ulubiona gra</h1>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="d-block w-100"
            width="1024"
            height="480"
            src="https://previews.123rf.com/images/composterbox/composterbox2005/composterbox200501188/145992523-shrimp-prawn-scampi-traditional-dish-fried-in-garlic-batter-with-lemon-and-parsley-healthy-food-blac.jpg"
            alt="krewetki"
          >
        </template>
        <h1>ulubiona potrawa</h1>
      </b-carousel-slide>

      <p class="mt-4">
        Slide #: {{ slide }}<br>
        Sliding: {{ sliding }}
      </p>
    </b-carousel>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Galeria'
    }
  }
}
</script>
