import React from 'react';
import Types from 'prop-types';
import CSSTransition from 'react-transition-group/CSSTransition';
import classNames from 'classnames';

import './AnimatedLabel.css';

const AnimatedLabel = ({ activeStep, backward, labels }) => {
  return labels.map((label, key) => (
    <CSSTransition
      // eslint-disable-next-line
      key={key}
      in={key === activeStep - 1}
      timeout={450}
      classNames="np-animated-label"
      unmountOnExit
    >
      <div
        className={classNames(`np-animated-label`, { 'np-animated-label--backward': backward })}
        aria-hidden={key !== activeStep - 1}
      >
        {label}
      </div>
    </CSSTransition>
  ));
};

/* eslint-enable react/no-array-index-key */

AnimatedLabel.propTypes = {
  labels: Types.arrayOf(Types.node).isRequired,
  activeStep: Types.number.isRequired,
  backward: Types.bool,
};

AnimatedLabel.defaultProps = {
  backward: false,
};

export default AnimatedLabel;
