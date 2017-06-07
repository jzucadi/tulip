<template>
  <section class="container">
    
    <h1 class="title">
      Recent Work
    </h1>
    <div class="frame">
    <div class="flex-grid-thirds">
  <div class="col">This little piggy went to market.</div>
  <div class="col">This little piggy stayed home.</div>
  <div class="col">This little piggy had roast beef.</div>
</div>
</div>
  </section>
</template>

<style scoped>
.title
{
  margin: 50px 0;
}
.frame {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.flex-grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.flex-grid .col {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
}

.flex-grid-thirds {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
}

.flex-grid-thirds .col {
  width: 32%;
}

@media (max-width: 700px) {
  .flex-grid,
  .flex-grid-thirds {
    display: block;
  }
  .flex-grid .col,
  .flex-grid-thirds .col {
    width: 100%;
    margin: 0 0 10px 0;
  }
}

.flex-grid {
  margin: 0 0 20px 0;
}

.col {
  background: lightblue;
  padding: 10px;
  box-shadow: 0 25px 90px -35px rgba(0,0,0,.5);
  height: 350px;
}

</style>
