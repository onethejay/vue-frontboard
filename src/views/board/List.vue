<template>
  <div class="board-list">
    <table>
      <thead>
      <tr>
        <th>No</th>
        <th>제목</th>
        <th>작성자</th>
        <th>등록일시</th>
      </tr>
      </thead>

      <tbody>
      <tr v-for="(row, idx) in list" :key="idx">
        <td>{{ row.idx }}</td>
        <td><a v-on:click="fnView(`${row.idx}`)">{{ row.title }}</a></td>
        <td>{{ row.author }}</td>
        <td>{{ row.createdAt }}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <span>&lt;&lt;</span>
      &nbsp;
      <span>&lt;</span>
      &nbsp;
      1
      &nbsp;
      <span>&gt;</span>
      &nbsp;
      <span>&gt;&gt;</span>
    </div>
  </div>
</template>

<script>
export default {
  data() { //변수생성
    return {
      requestBody: {}, //리스트 페이지 데이터전송
      list: {}, //리스트 데이터
      no: '', //게시판 숫자처리
      paging: {}, //페이징 데이터
      page: this.$route.query.page ? this.$route.query.page : 1,
      size: this.$route.query.size ? this.$route.query.size : 10,
      keyword: this.$route.query.keyword,
    }
  },
  mounted() {
    this.fnGetList()
  },
  methods: {
    fnGetList() {
      /************************************************
       axios 로 backend 호출해서 데이터 가져올 예정
       ************************************************/
      //axios body에 requestBody 추가해서 요청하기
      // this.requestBody = { // 데이터 전송
      //   keyword: this.keyword,
      //   page: this.page,
      //   size: this.size
      // }
      this.$axios.get(this.$serverUrl + "/board/list")
          .then((res) => {
            this.list = res.data
            this.no = res.data.length
          })
          .then((err) => {
            console.log(err)
          })
    },
    fnView(idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    }
  }
}
</script>
<style scoped>

.board-list {
  width: 400px;
  margin: auto;
}

</style>