<template>
  <div>
    <modal />
    <hero />
    <section class="section">
      <div class="container">
          <monster-list />
      </div>
    </section>
    <copyright />
  </div>
</template>

<script>
import Hero from './components/Hero';
import MonsterList from './components/MonsterList';
import Copyright from './components/Copyright';
import Modal from './components/Modal';

export default {
  name: 'app',
  components: {
    Hero,
    MonsterList,
    Copyright,
    Modal,
  },
};
</script>

<style src="../node_modules/bulma/css/bulma.css"></style>
<style src="../node_modules/font-awesome/css/font-awesome.css"></style>
<style>
</style>
