import _ from 'lodash';
import { SET_ACTIVE_USER_ID, SEND_MESSAGE } from '../constants/actions-types';
import { getMessages } from '../static-data';

export default function messagesReducer(state = getMessages(10), action) {
  switch (action.type) {
    case SEND_MESSAGE: {
      const { message, activeUserId } = action.payload;
      const allUserMsgs = state[activeUserId];
      const number = +_.keys(allUserMsgs).pop() + 1;

      return {
        ...state,
        [activeUserId]: {
          ...allUserMsgs,
          [number]: {
            number,
            text: message,
            is_user_msg: true,
          },
        },
      };
    }

    default:
      return state;
  }
}
