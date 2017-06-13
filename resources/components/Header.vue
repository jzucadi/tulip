<template>
  <header>
     <div class="wrap"> 
      <nav>
        <h4>j<span>.</span>z<span>.</span></h4>
        <ul>
          <li><nuxt-link class="button" to="/">
            About
          </nuxt-link></li>
          <li><nuxt-link class="button" to="/projects">
            Work
          </nuxt-link></li>
          <li><nuxt-link class="button" to="/contact">
            Contact
          </nuxt-link></li>
        </ul>
      </nav>
      </div>
  </header>
</template>
<style>
h4 {
    font-weight: 800;
    font-size: 2.2em;
    color: rgba(96, 125, 139, 0.42);
}
h4 span {
  color: rgb(57, 220, 192);
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
  margin-left: 30px;
}
.wrap{
    max-width: 100%;
    margin-left: 100px;
    margin-right: 100px;
}
</style>
