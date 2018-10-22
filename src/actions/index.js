import { SET_ACTIVE_USER_ID } from '../constants/actions-types';

export const setActiveUserId = user_id => ({
  type: SET_ACTIVE_USER_ID,
  payload: user_id,
});

export const setActiveUserIdA = user_id => ({
  type: SET_ACTIVE_USER_ID,
  payload: user_id,
});
