<template>
  <div>
    <nvHead :title="'SangSir'" :back="back"></nvHead>
    <div class="content">
      <mu-row gutter>
        <mu-col width="100" tablet="50" desktop="50" v-for="data in postsInfo" :key="data.id">
          <div class="card-body">
            <router-link :to="'/single/'+ data.cid">
              <mu-card>
                <mu-card-header :title="data.title" :subTitle="data.created | moment"/>
                <mu-card-media>
                  <img :src="data.thumb[0].str_value"/>
                </mu-card-media>
                <mu-card-actions>
                <router-link :to="'/posts/'+ data.category + '/1'">
                  <mu-chip>
                    <mu-avatar :size="32" icon="loyalty"/> {{data.categories[0].name}}
                  </mu-chip>
                </router-link>
                </mu-card-actions>
              </mu-card>
            </router-link>
          </div>
        </mu-col>
      </mu-row>
      <p v-show="postsMore" align="center" display="none">没有更多内容...</p>
      <mu-raised-button v-show="postsMore" label="返回主页" :to="'/index/1'" display="none" fullWidth/>
      <mu-raised-button v-show="postsLoad" label="点击加载下一页..." :to="'/index/'+pageId" fullWidth/>
    </div>
  </div>
</template>

<script>
var moment = require('moment');
import nvHead from '@/components/header.vue';
export default {
  data() {
    return {
      back: false,
      postsInfo: [],
      pageId: this.id,
      postsMore: false,
      postsLoad: true
    }
  },
  mounted() {
    this.getPosts()
  },
  watch: {
    '$route': 'getPosts'
  },
  methods: {
    getPosts () {
      this.http.get('https://sangsir.com/api/posts?pageSize=6&page=' + this.id)
        .then(res => {
          if(res.data.data == 0){
            this.postsMore = true
            this.postsLoad = false
          }else{
            this.postsMore = false
            this.postsLoad = true
            this.postsInfo = res.data.data
            this.pageId = parseInt(this.id)+1
            document.body.scrollTop = 0
            document.documentElement.scrollTop = 0
          }
        })
    }
  },
  filters: {
    moment: function (date) {
      return moment.unix(date).format('MMMM Do , YYYY');
    }
  },
  props: ['id'],
  components: {
    nvHead
  }
}
</script>

<style>
.card-body {
    padding: 12px 24px 12px;
    margin: 0;
}
.mu-card-header-title {
    padding-right: 0;
}
</style>