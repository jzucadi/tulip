
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
  max-width: 100%;
  margin: 100px auto;
  text-align: left;
}

.button, .button:visited
{
  display: inline-block;
  color: #505153;
  letter-spacing: 1px;
  background-color: whitesmoke;
  border: 0px solid #505153;
  text-decoration: none;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #ccc;
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 4em;
  margin: 0;
}
</style>
