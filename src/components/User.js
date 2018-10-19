import React from 'react';
import PropTypes from 'prop-types';

export default function User({ user }) {
  const { name, profile_pic, status } = user;
  return (
    <div className="User">
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
