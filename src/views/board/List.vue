<template>
  <div class="board-list">
    <div class="common-buttons">
      <button type="button" class="w3-button w3-round w3-blue-gray" v-on:click="fnWrite">등록</button>
    </div>
    <table class="w3-table-all">
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
    <div class="pagination pg_wrap">
      <span class="pg">
      <a href="javascript:" @click="fnPage(1)" class="first pg_page pg_start">&lt;&lt;</a>
      <a href="javascript:" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"
         class="prev pg_page pg_prev">&lt;</a>
      <template v-for=" (n, index) in paginavigation()">
          <template v-if="paging.page===n">
              <strong class="pg_current" :key="index">{{ n }}</strong>
          </template>
          <template v-else>
              <a class="pg_page" href="javascript:" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>
          </template>
      </template>
      <a href="javascript:" v-if="paging.total_page_cnt > paging.end_page"
         @click="fnPage(`${paging.end_page+1}`)" class="next pg_page pg_next">&gt;</a>
      <a href="javascript:" @click="fnPage(`${paging.total_page_cnt}`)" class="last pg_page pg_end">&gt;&gt;</a>
      </span>
    </div>
<!--    <div class="pagination pg_wrap" v-if="paging.total_list_cnt > 0">-->
<!--      <span class="pg">-->
<!--      <a href="javascript:;" @click="fnPage(1)" class="first pg_page pg_start">&lt;&lt;</a>-->
<!--      <a href="javascript:;" v-if="paging.start_page > 10" @click="fnPage(`${paging.start_page-1}`)"-->
<!--         class="prev pg_page pg_prev">&lt;</a>-->
<!--      <template v-for=" (n,index) in paginavigation()">-->
<!--          <template v-if="paging.page==n">-->
<!--              <strong class="pg_current" :key="index">{{ n }}</strong>-->
<!--          </template>-->
<!--          <template v-else>-->
<!--              <a class="pg_page" href="javascript:;" @click="fnPage(`${n}`)" :key="index">{{ n }}</a>-->
<!--          </template>-->
<!--      </template>-->
<!--      <a href="javascript:;" v-if="paging.total_page_cnt > paging.end_page"-->
<!--         @click="fnPage(`${paging.end_page+1}`)" class="next pg_page pg_next">&gt;</a>-->
<!--      <a href="javascript:;" @click="fnPage(`${paging.total_page_cnt}`)" class="last pg_page pg_end">&gt;&gt;</a>-->
<!--      </span>-->
<!--    </div>-->
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
      paginavigation: function () { //페이징 처리 for문 커스텀
        let pageNumber = [] //;
        let start_page = 1 //this.paging.start_page;
        let end_page = 1 //this.paging.end_page;
        for (let i = start_page; i <= end_page; i++) pageNumber.push(i);
        return pageNumber;
      }
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
          .catch((err) => {
            if (err.message.indexOf('Network Error') > -1) {
              alert('네트워크가 원활하지 않습니다.\n잠시 후 다시 시도해주세요.')
            }
          })
    },
    fnView(idx) {
      this.requestBody.idx = idx
      this.$router.push({
        path: './detail',
        query: this.requestBody
      })
    },
    fnWrite() {
      this.$router.push({
        path: './write'
      })
    },
    fnPage(n) {
      if(this.page !== n) {
        this.page = n
        this.fnGetList()
      }
    }
  }
}
</script>
<style scoped>


</style>