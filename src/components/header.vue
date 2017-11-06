<template>
    <div class="header">
      <mu-appbar :title="title">
        <mu-icon-button icon="arrow_back" slot="left" v-show="back" display="none" @click="goBack()"/>
        <mu-icon-button icon="menu" slot="right" @click="toggle(true)"/>
      </mu-appbar>
        <mu-drawer right :open="open" :docked="docked" @close="toggle()">
          <mu-appbar title="导航栏">
            <mu-icon-button :to="'/index/1'" icon="home" slot="right"/>
          </mu-appbar>
          <mu-menu @itemClick="docked ? '' : toggle()">
            <mu-sub-header>文章分类</mu-sub-header>
            <mu-menu-item :to="'/posts/daily/1'" title="日志记录" leftIcon="content_copy"/>
            <mu-menu-item :to="'/posts/notes/1'" title="备忘笔记" leftIcon="content_copy"/>
            <mu-menu-item :to="'/posts/tutorials/1'" title="实践教程" leftIcon="content_copy"/>
            <mu-divider />
            <mu-sub-header>独立页面</mu-sub-header>
            <mu-menu-item :to="'/single/32'" title="实验室" leftIcon="extension"/>
            <mu-menu-item :to="'/single/5'" title="关于我" leftIcon="person"/>
            <mu-menu-item v-if="docked" @click.native="open = false" title="关闭导航栏" leftIcon="menu"/>
          </mu-menu>
        </mu-drawer>
    </div>
</template>

<script>
export default {
  data () {
    return {
      open: false,
      docked: true
    }
  },
  methods: {
    toggle (flag) {
      this.open = !this.open
      this.docked = !flag
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  props: ['title','back']
}
</script>