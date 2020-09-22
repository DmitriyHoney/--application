<template>
  <ul class="sidenav app-sidenav" :class="{'open': value}">
    
    <li v-for="link in links" :key="link.url" :class="{active: link.exact}">
      <router-link 
        :to="link.url" 
        :exact="link.exact"
        
        class="waves-effect waves-orange pointer"
      >{{link.title}}</router-link >
    </li>
   
  </ul>
</template>

<script>
export default {
  props: ['value'],
  data: () => ({
    links: [
      {title: 'Счет', url: '/detail-record', exact: true},
      {title: 'История', url: '/history'},
      {title: 'Планирование', url: '/planing'},
      {title: 'Новая запись', url: '/record'},
      {title: 'Категории', url: '/categories'}
    ]
  })
}
</script>

<style>

</style>
