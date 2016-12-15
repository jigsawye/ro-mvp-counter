<template>
  <table class="table">
    <thead>
      <tr>
        <th>編號</th>
        <th>名稱</th>
        <th>等級</th>
        <th>血量</th>
        <th>資訊</th>
        <th>地圖</th>
        <th>重生時間</th>
        <th>死亡時間</th>
        <th>下次重生時間</th>
        <th>剩餘時間</th>
        <th>設定</th>
      </tr>
    </thead>
    <tbody>
      <template v-for="monster in monsters">
        <monster-item :monster="monster"></monster-item>
      </template>
    </tbody>
  </table>
</template>

<script>
  import { mapState } from 'vuex';
  import MonsterItem from './MonsterItem';

  export default {
    name: 'monster-list',
    components: {
      MonsterItem,
    },
    computed: mapState({
      monsters: state => state.monsters,
    }),
  };
</script>
