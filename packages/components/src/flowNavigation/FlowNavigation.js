import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CloseButton from '../common/CloseButton';
import BackButton from './backButton';
import AnimatedLabel from './animatedLabel';

import Logo from './logo';
import Stepper from '../stepper';
import Header from '../header';
import { Theme } from '../common';
import { usePrevious } from '../common/hooks';

import './FlowNavigation.css';

const FlowNavigation = ({ avatar, stepper: { steps, activeStep }, onClose, onGoBack }) => {
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  const prev = usePrevious(activeStep);

  const getMobileContent = () =>
    onGoBack ? (
      <BackButton
        onClick={onGoBack}
        label={
          <AnimatedLabel
            labels={steps.map((step) => step.label)}
            activeStep={activeStep}
            backward={activeStep < prev}
          />
        }
      />
    ) : (
      <Logo type={Logo.Type.FLAG} />
    );

  return (
    <Header
      className="tw-flow-navigation"
      leftContent={
        <>
          <Logo type={Logo.Type.FULL} className="hidden-xs" />
          <div className="visible-xs">{getMobileContent()}</div>
        </>
      }
      rightContent={
        <>
          {avatar}
          {avatar && closeButton && <span className="separator" />}
          {closeButton}
        </>
      }
      bottomContent={
        <Stepper
          activeStep={activeStep}
          steps={steps}
          className={classNames('tw-flow-navigation__stepper m-t-1')}
        />
      }
    />
  );
};

FlowNavigation.Theme = Theme;

FlowNavigation.defaultProps = {
  avatar: null,
  onGoBack: null,
  onClose: null,
};

FlowNavigation.propTypes = {
  avatar: Types.node,
  /** Contains the steps to be displayed and the current active Steps. If stepper is not needed please use OverlayHeader */
  stepper: Types.shape({
    activeStep: Types.number,
    steps: Types.arrayOf(
      Types.shape({
        label: Types.node.isRequired,
        onClick: Types.func,
        hoverLabel: Types.node,
      }),
    ),
  }).isRequired,

  onGoBack: Types.func,
  onClose: Types.func,
};

export default FlowNavigation;
