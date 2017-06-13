
<template>
  <div>
    <my-header/>
    <nuxt/>
    
    
    <my-footer/>
  </div>
</template>

<script>
import MyFooter from '~components/Footer.vue'
import MyHeader from '~components/Header.vue'

export default {
  components: {
    MyFooter,
    MyHeader
  }
}
</script>

<style>
.container
{
  
  margin: 100px;
  text-align: left;
  flex: 1;
  min-height: calc(80vh - 2.5em - 7em);
  box-sizing: border-box;
}

.button, .button:visited
{
  display: inline-block;
  color: white;
  letter-spacing: 1px;
  background-color: #2196F3;
  text-decoration: none;
  padding: 15px 45px;
  border-radius:30px;
  transition: opacity .6s
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #ccc;
  transition: opacity .6s
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 3.3em;
  margin: 0;
}
</style>
