<template>
  <div class="banner">
    <div class="banner-text">
      <h3>Olá pessoal! <img id="hi-gif" src="../assets/hi.gif" alt=""> </h3>
      <h1 id="name">Meu nome é <span class="gradient">Ed Oliveira</span><img src="../assets/AvatarEdJr.png" alt=""></h1>
      <h1>Sou <span class="gradient">Desenvolvedor Full Stack</span> </h1>
    </div>
    <div class="dynamic-text">
      <h1>Crio e desenvolvo soluções <span id="text-dynamic" class="text"></span> </h1>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  data() {
    return {
      words: ['Front-end', 'Back-end', 'Mobile', 'Web', 'Desktop'],
      wordsIndex: 0,
      index: 0,
      erasing: false
    }
  },
  mounted() {
    this.typeWrite()
  },
  methods: {
    typeWrite() {
      let elm = document.getElementById("text-dynamic");
      let currentWord = this.words[this.wordsIndex];
      if (!this.erasing) {
        elm.innerHTML = currentWord.substring(0, this.index);
        this.index++;
        if (this.index > currentWord.length) {
          this.erasing = true;
          setTimeout(this.typeWrite, 1000);
          return;
        }
      } else {
        elm.innerHTML = currentWord.substring(0, this.index);
        this.index--;
        if (this.index < 0) {
          this.erasing = false;
          this.wordsIndex = (this.wordsIndex + 1) % this.words.length;
        }
      }
      setTimeout(this.typeWrite, 100);
    }

  },
}
</script>