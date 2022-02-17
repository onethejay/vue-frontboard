<template>
  <div class="board-detail">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
    <div class="board-contents">
      <h3>{{ title }}</h3>
      <div>
        <strong class="w3-large">{{ author }}</strong>
        <br>
        <span>{{ createdAt }}</span>
      </div>
    </div>
    <div class="board-contents">
      <span>{{ contents }}</span>
    </div>
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray">수정</button>&nbsp;
      <button type="button" class="w3-button w3-round w3-gray" v-on:click="fnList">목록</button>
    </div>
  </div>
</template>

<script>
export default {
  data() { //변수생성
    return {
      requestBody: this.$route.query,
      idx: this.$route.query.idx,

      title: '',
      author: '',
      contents: '',
      createdAt: ''
    }
  },
  mounted() {
    this.fnGetView()
  },
  methods: {
    fnGetView() {
      this.$axios.get(this.$serverUrl + '/board/' + this.requestBody.idx, {
        params: this.requestBody
      }).then((res) => {
        this.title = res.data.title
        this.author = res.data.author
        this.contents = res.data.contents
        this.createdAt = res.data.createdAt
      }).then((err) => {
        console.log(err)
      })
    },
    fnList() {
      delete this.requestBody.idx
      this.$router.push({
        path: './list',
        query: this.requestBody
      })
    }
  }
}
</script>
<style scoped>



</style>