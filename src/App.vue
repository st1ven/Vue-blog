<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
.mu-appbar{position: fixed;}
.mu-menu,.content{padding-top: 70px;}
h1,h2,h3,h4,h5,h6{font-weight:normal;position:relative;left:20px;margin:15px auto 10px;}
h1::before,h2::before,h3::before,h4::before,h5::before,h6::before{font-weight:normal;position:absolute;top:0;left:-20px;content:'#';color:#009688;}
p,blockquote,ul,ol,dl,table,pre{margin:14px 0;}
blockquote{padding:0 15px;color:#777;border-left:4px solid #009688;}
blockquote>:first-child{margin-top:0;}
blockquote>:last-child{margin-bottom:0;}
</style>