import * as MutationTypes from './mutationTypes';

export default {
  [MutationTypes.SET_FIRST_NAME]: (state, { firstName }) => {
    state.firstName = firstName;
  },
  [MutationTypes.SET_LAST_NAME]: (state, { lastName }) => {
    state.lastName = lastName;
  },
  [MutationTypes.SET_EMAIL]: (state, { email }) => {
    state.email = email;
  },
};
