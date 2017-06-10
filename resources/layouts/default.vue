
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
  margin: 0;
  width: 72%;
  padding: 50px 0;
  margin: 100px;
  text-align: left;
}

.button, .button:visited
{
  display: inline-block;
  color: rgba(0, 212, 88, 0.57);
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid rgba(0, 212, 88, 0.57);
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: rgba(0, 212, 88, 0.57);
}

.title
{
  color: #505153;
  font-weight: 300;
  font-size: 5em;
  margin: 0;
}
</style>
