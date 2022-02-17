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
        <td>{{ row.title }}</td>
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
      this.no = 3
      this.list = [
        {
          idx: 3,
          title: '게시글3',
          author: '작성자3',
          createdAt: '2021-08-24 23:30:00'
        },
        {
          idx: 2,
          title: '게시글2',
          author: '작성자2',
          createdAt: '2021-08-24 23:20:00'
        },
        {
          idx: 1,
          title: '게시글1',
          author: '작성자1',
          createdAt: '2021-08-24 23:10:00'
        }
      ]
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