<template>
  <section class="container">
  <div class="grid__col grid__col--4-of-5">


    <div class="separator"></div>
    <h1 class="title">
     Hello. I'm <span><a target="_blank" href="https://www.linkedin.com/in/james-zaccardo-69772527/" class="name">James Zaccardo</a></span>, a full stack web developer based in Los Angeles.

    </h1>
    <br />
    <h1 class="title">
     I've been making modern, elegant websites and web apps for 5+ years. Check out some of my <span><nuxt-link class="link" to="/projects">past work</nuxt-link></span>.
     
    </h1>
    <br />
    <h1 class="title">
     Have a project? <span><nuxt-link class="link" to="/contact">Let's talk</nuxt-link></span>.
    </h1>
  </div>
 
  </section>
 
</template>

<style scoped>
.title
{
  margin: 25px 0;
  font-weight: 200;
  letter-spacing: 1px;
}
@media (max-width: 500px) {
    .title {
      font-size: 1.5em;
      letter-spacing: 1.2px;
      font-weight: 300;
      margin-top:20px 0;
      
    }
}

.title span {
  font-weight: 500;
  color: #2196F3;
}


</style>
