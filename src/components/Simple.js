import React from 'react';
import PropTypes from 'prop-types';

export default function Simple(props) {
  console.log(props);
  const { tech } = props;

  return (
    <div>
simple :
      {tech}
    </div>
  );
}

Simple.propTypes = {
  tech: PropTypes.string,
};

Simple.defaultProps = {
  tech: 'fake',
};
