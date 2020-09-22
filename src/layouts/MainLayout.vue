<template>
  <div>
    <div class="app-main-layout">
      
      <Navbar @change="changeOpen" />
      <Sidebar :value="isOpen"/>

      <main class="app-content" :class="{'full': !isOpen}">
       
        <div class="app-page">
          <router-view />
        </div>
      </main>

      <div class="fixed-action-btn">
        <router-link class="btn-floating btn-large blue" to="/record">
          <i class="large material-icons">add</i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/app/Navbar'
import Sidebar from '../components/app/Sidebar'
export default {
  data: () => ({
    isOpen: true
  }),
  methods: {
    changeOpen() {
      this.isOpen = !this.isOpen;
      console.log(this.isOpen)
    }
  },
  name: 'main-layout',
  components: {Sidebar, Navbar}
};
</script>

<style>
</style>
