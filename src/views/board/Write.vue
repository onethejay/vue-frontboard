<template>
  <div class="board-detail">
    제목:
    <span>{{ title }}</span>
    <br>
    작성자:
    <span>{{ author }}</span>
    <br>
    내용:
    <span>{{ contents }}</span>
    <br>
    작성일시:
    <span>{{ createdAt }}</span>
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
  }
}
</script>
<style scoped>

.board-list {
  width: 400px;
  margin: auto;
}

</style>