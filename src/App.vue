<template>
  <Header/> <!-- 헤더 컴포넌트 -->
  <router-view/>  <!-- 페이지 이동이 표시될 곳 -->
  <Footer/> <!-- 푸터 컴포넌트 -->
  <LoadingBar :loading="this.$store.state.loadingStatus"></LoadingBar>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LoadingBar from '@/views/common/LoadingBar'

export default {
  name: 'App',
  components: {
    Footer,
    Header,
    LoadingBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>