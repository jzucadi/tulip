<template>
  <header>
     <div class="wrap"> 
      <nav>
        <h4>j<span>.</span>z<span>.</span></h4>
        <ul>
          <li><nuxt-link class="navi" to="/">
            About
          </nuxt-link></li>
          <li><nuxt-link class="navi" to="/projects">
            Work
          </nuxt-link></li>
          <li><nuxt-link class="navi" to="/contact">
            Contact
          </nuxt-link></li>
        </ul>
      </nav>
      </div>
  </header>
</template>
<style>
.navi{
  font-size: 1.5em;
  font-weight: 200;
  
}

h4 {
    font-weight: 800;
    font-size: 3em;
    color: rgba(96, 125, 139, 0.42);
}
h4 span {
  color: rgba(33, 150, 243, 0.86);
  
}
nav {
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 70px;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
nav ul {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  list-style: none;
}
nav ul li {
  margin-left: 10px;
  margin: 20px;
      
}
.wrap{
      padding-left: 30px;
    padding-right: 25px;
  max-width: 1400px;
  margin: 35px auto 0px auto;
}
@media (max-width: 500px) {
    .navi {
      font-size: 1em;
    }
}
@media (max-width: 500px) {
    .wrap {
      margin: 15px auto 0px auto;
    }
}
@media (max-width: 500px) {
    nav ul li {
    margin-left: 15px;
    margin-top: 15px;
}
}

      






</style>


