<template>
  <v-app>
    <v-app-bar app color="primary" dark v-if="'embed' !== this.$route.name">
      <h1>Alaska Coronavirus</h1>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  created() {
    document.title = 'Alaska Coronavirus'
  },
}
</script>
