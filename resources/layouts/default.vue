
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
  max-width: 1440px;
  margin: 0 auto;
  padding: 100px 50px 100px 50px;
  text-align: left;
  flex: 1;
  min-height: calc(90vh - 2.5em - 7em);
  box-sizing: border-box;
}
@media (max-width: 500px) {
    .container {
      padding: 20px;
      margin-left: 10px;
    }
}

.button, .button:visited
{
  display: inline-block;
  color: white;
  letter-spacing: 1px;
  background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);
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
  color:rgba(96, 125, 139, 0.79);
  font-weight: 300;
  font-size: 3.3em;
  margin: 0;
}
</style>
