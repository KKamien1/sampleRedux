import { SET_ACTIVE_USER_ID } from '../constants/actions-types';
import { getMessages } from '../static-data';

export default function messagesReducer(state = getMessages(10), action) {
  switch (action.type) {
    default:
      return state;
  }
}
