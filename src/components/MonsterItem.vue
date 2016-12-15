<template>
  <tr>
    <td>{{ monster.id }}</td>
      <td><a :href="`https://rd.fharr.com/mob-${monster.id}.html`" target="_blank">{{ monster.name }}</a></td>
      <td>{{ monster.lv }}</td>
      <td>{{ monster.hp }}</td>
      <td>{{ monster.detail }}</td>
      <td>{{ monster.map }}</td>
      <td>{{ monster.respawn }} 分鐘</td>
      <td>{{ calendar(monster.dead) }}</td>
      <td>{{ calendar(monster.nextRespawn) }}</td>
      <td>{{ humanize(monster.left) }}</td>
      <td>
        <div class="control is-grouped">
          <p class="control">
            <button
              class="button is-small is-danger is-outlined"
              @click="updateDeadTime(monster.id)"
            >死亡</button>
          </p>
          <p class="control">
            <button class="button is-small" @click="editMonster(monster.id)">編輯</button>
          </p>
        </div>
      </td>
  </tr>
</template>

<script>
  import moment from 'moment';

  moment.locale('zh-tw');

  export default {
    name: 'monster-item',
    props: ['monster'],
    methods: {
      updateDeadTime(id) {
        this.$store.commit('SET_MONSTER_DEAD_TIME', id);
      },
      editMonster(id) {
        this.$store.commit('OPEN_EDIT_MODAL', id);
      },
      calendar(value) {
        return value ? moment(value).calendar() : '未知';
      },
      humanize(value) {
        if (!value) {
          return '未知';
        }
        let format = ' s [秒後重生]';

        const hours = value.hours();
        const minutes = value.minutes();
        const seconds = value.seconds();

        if (minutes > 0) {
          format = ` m [分]${format}`;
        }
        if (hours > 0) {
          format = ` h [時]${format}`;
        }
        const formatTime = moment().hours(hours).minutes(minutes).seconds(seconds)
          .format(format);
        return value.milliseconds() >= 0 ? `約在${formatTime}` : '已重生';
      },
    },
  };
</script>
