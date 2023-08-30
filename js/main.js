const { createApp, ref } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      image: "./js/7cb22a8a9885468d96662f6ece61ceb2bc95666d-500x300.png",
    };
  },
}).mount("#app");
