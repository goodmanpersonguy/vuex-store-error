import * as MutationTypes from './mutationTypes';

export default {
  setFirstName: ({ commit }, { firstName }) => {
    commit(MutationTypes.SET_FIRST_NAME, { firstName });
  },
  setLastName: ({ commit }, { lastName }) => {
    commit(MutationTypes.SET_LAST_NAME, { lastName });
  },
  setEmail: ({ commit }, { email }) => {
    commit(MutationTypes.SET_EMAIL, { email });
  },
}
;
