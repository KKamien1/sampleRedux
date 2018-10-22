import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { setActiveUserId } from '../actions';

export default function User({ user }) {
  const { name, profile_pic, status } = user;
  return (
    <div
      className="User"
      onClick={handleUserClick.bind(null, user)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex="0"
    >
      <img src={profile_pic} alt={name} className="User__pic" />
      <div className="User__detalis">
        <p className="User__details-name">{name}</p>
        <p className="User__details-status">{status}</p>
      </div>
    </div>
  );
}

User.propTypes = {
  user: PropTypes.shape.isRequired,
};

function handleUserClick({ user_id }) {
  console.log(user_id);
  store.dispatch(setActiveUserId(user_id));
}

function handleKeyDown(e) {
  if (e.keyCode === 13) {
    e.target.focus();
  }
}
