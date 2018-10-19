import React from 'react';
import PropTypes from 'prop-types';
import User from './User';

const Sidebar = ({ contacts }) => (
  <aside className="Sidebar">
    {contacts.map(contact => (
      <User user={contact} key={contact.user_id} />
    ))}
  </aside>
);

Sidebar.propTypes = {
  contacts: PropTypes.shape.isRequired,
};

export default Sidebar;
