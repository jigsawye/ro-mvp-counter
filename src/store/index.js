/* eslint no-param-reassign: ["error", { "props": false }] */
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import monsters from '../utils/monsters';
import timerPlugin from '../plugin/timer';

Vue.use(Vuex);

const states = {
  modal: {
    id: null,
    active: false,
  },
  monsters,
};

const mutations = {
  SET_MONSTER_DEAD_TIME(state, id) {
    const index = state.monsters.findIndex(monster => monster.id === id);
    state.monsters[index].dead = moment();
    state.monsters[index].nextRespawn = moment().add(state.monsters[index].respawn, 'minutes');
  },
  SAVE_MONSTER(state, monster) {
    const { id } = state.modal;
    state.monsters[id] = {
      ...state.monsters[id],
      ...monster,
    };
    state.modal.active = false;
  },
  OPEN_EDIT_MODAL(state, id) {
    const index = state.monsters.findIndex(monster => monster.id === id);
    state.modal = {
      id: index,
      active: true,
    };
  },
  CLOSE_EDIT_MODAL(state) {
    state.modal.active = false;
  },
  RECIPROCAL_TIME(state) {
    state.monsters = state.monsters.map((monster) => {
      if (!monster.dead) {
        return monster;
      }

      return {
        ...monster,
        left: moment.duration(monster.nextRespawn - moment()),
      };
    });
  },
};

const plugins = [timerPlugin];

export default new Vuex.Store({
  state: states,
  mutations,
  plugins,
});
