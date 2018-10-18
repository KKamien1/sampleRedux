import React from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import setTechnology from '../actions/simpleActions';

function dispatchBtnAction(e) {
  const { tech } = e.target.dataset;
  store.dispatch(setTechnology(tech));
}
const ButtonGroup = ({ technologies }) => (
  <div>
    {technologies.map(tech => (
      <button
        type="button"
        onClick={dispatchBtnAction}
        data-tech={tech}
        key={`btn-${tech}`}
        className="hello-btn"
      >
        {tech}
      </button>
    ))}
  </div>
);

ButtonGroup.propTypes = {
  technologies: PropTypes.instanceOf(Array),
};

ButtonGroup.defaultProps = {
  technologies: [],
};

export default ButtonGroup;
