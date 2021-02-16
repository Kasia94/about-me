<template>
  <div>
    <section
      v-for="(item, index) in links"
      :key="index"
      class="skill-icon"
    >
      <b-icon :href="item.href" />
    </section>
  </div>
</template>
<script>
export default {
  data: () => ({
    links: [
      { href: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9BwaN-pzQEjc2e-AOPz0YUOssMierVD8IA&usqp=CAU' },
      { href: 'https://image.flaticon.com/icons/png/512/742/742751.png' },
      { href: 'https://image.flaticon.com/icons/png/512/742/742751.png' },
      { href: 'https://image.flaticon.com/icons/png/512/742/742751.png' },
      { href: 'https://image.flaticon.com/icons/png/512/742/742751.png' },
      { href: 'https://image.flaticon.com/icons/png/512/742/742751.png' }
    ]
  })
}
