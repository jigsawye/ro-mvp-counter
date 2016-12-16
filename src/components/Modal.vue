<template>
  <div class="modal" :class="{ 'is-active': active }">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">編輯</p>
        <button class="delete" @click="closeModal"></button>
      </header>
      <section class="modal-card-body">
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">編號</label>
          </div>
          <p class="control">
            <input class="input" type="text" v-model="monster.id">
          </p>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">名稱</label>
          </div>
          <p class="control">
            <input class="input" type="text" v-model="monster.name">
          </p>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">等級</label>
          </div>
          <p class="control">
            <input class="input" type="number" v-model="monster.lv">
          </p>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">血量</label>
          </div>
          <p class="control">
            <input class="input" type="number" v-model="monster.hp">
          </p>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">資訊</label>
          </div>
          <p class="control">
            <input class="input" type="text" v-model="monster.detail">
          </p>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">地圖</label>
          </div>
          <p class="control">
            <input class="input" type="text" v-model="monster.map">
          </p>
        </div>
        <div class="control is-horizontal">
          <div class="control-label">
            <label class="label">重生時間</label>
          </div>
          <p class="control">
            <input class="input" type="number" v-model="monster.respawn">
          </p>
        </div>
      </section>
      <footer class="modal-card-foot">
        <a class="button is-primary" @click="saveMonster">儲存</a>
        <a class="button" @click="closeModal">取消</a>
      </footer>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'modal',
    data: () => ({
      monster: {},
    }),
    computed: mapState({
      active: state => state.modal.active,
    }),
    watch: {
      active(newActive) {
        if (newActive) {
          this.monster = this.$store.state.monsters[this.$store.state.modal.id];
        }
      },
    },
    methods: {
      closeModal() {
        this.$store.commit('CLOSE_EDIT_MODAL');
      },
      saveMonster() {
        this.$store.commit('SAVE_MONSTER', this.monster);
      },
    },
  };
</script>
