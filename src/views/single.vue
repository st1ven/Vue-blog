<template>
  <div>
    <nvHead :title="singleContent.title" :back="back"></nvHead>
    <div class="content">
      <div class="body">
        <mu-content-block v-html="singleMark"></mu-content-block>
      </div>
    </div>
  </div>
</template>

<script>
var marked = require('marked');
var hljs = require('highlight.js');
import 'highlight.js/styles/googlecode.css'
marked.setOptions({
  renderer: new marked.Renderer(),
  sanitize: false,
  gfm: true,
  breaks: true,
  tables: true,
  highlight: function (code) {
      return hljs.highlightAuto(code).value
  }
});
import nvHead from '@/components/header.vue';
export default {
  data() {
    return {
      back: true,
      singleContent: []
    }
  },
  mounted() {
    this.getSingle();
  },
  watch: {
    '$route': 'getSingle'
  },
  computed: {
    singleMark() {
      return marked(this.singleContent.text || '');
    }
  },
  methods: {
    getSingle() {
      this.http.get('https://sangsir.com/api/single?cid=' + this.id)
        .then(res => {
          this.singleContent = res.data.data
          document.body.scrollTop = 0
          document.documentElement.scrollTop = 0
        })
    }
  },
  props: ['id'],
  components: {
    nvHead
  }
}
</script>

<style lang="css">
.card-body {
    padding: 12px 24px 12px;
    margin: 0;
}
.mu-content-block img {
    width: 100%;
}
.mu-content-block pre {
    padding: 1em;
    display: block;
    overflow: auto;
    box-sizing: border-box;
    width: 100%;
    white-space: pre-wrap;
    word-wrap: break-word;
    background: #f8f8f8;
}
</style>