<template>
  <div class="home">
    <img src="@/assets/book.png" alt="" />
    <div class="title">
      Gutenberg project
    </div>
    <div class="links">
      <div class="link">
        <router-link to="/lang">Trouver des livres</router-link>
      </div>
      <div class="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.gutenberg.org/"
          >Le projet Gutenberg</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www-apr.lip6.fr/~buixuan/daar2019"
          >Le cours de DAAR</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/arthurescriou/gutenberg-app"
          >Le code de cette appli</a
        >
      </div>
    </div>
  </div>
</template>

<style media="screen" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.title {
  font-weight: 700;
  line-height: 1.3em;
  font-size: 2.3em;
  padding-bottom: 4rem;
  text-align: center;
}

.links {
  display: Grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 1fr;
}

.link {
  text-align: center;
  background: #fefefe;
  padding: 3rem;
  border-radius: 12px;
}
.link a {
  padding: 3rem;
  text-decoration: none;
  color: black;
}

@media only screen and (max-width: 800px) {
  .links {
    grid-template-columns: 1fr;
  }
  img {
    width: 50%;
  }
}
</style>
