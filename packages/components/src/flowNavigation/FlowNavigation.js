import React, { useRef } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import Header from '../header';
import Stepper from '../stepper';
import AnimatedLabel from './animatedLabel';
import BackButton from './backButton';
import CloseButton from '../common/closeButton';
import Logo from '../common/logo';

import { Theme, Breakpoint } from '../common';
import { usePrevious, useClientWidth } from '../common/hooks';

import './FlowNavigation.css';

const FlowNavigation = ({ avatar, stepper: { steps, activeStep }, onClose, onGoBack }) => {
  const prev = usePrevious(activeStep);
  const ref = useRef(null);

  const [clientWidth] = useClientWidth({ ref });
  const closeButton = onClose && <CloseButton onClick={onClose} />;

  console.log('clientWidth', clientWidth);

  const getMobileLeftContent = () =>
    onGoBack && activeStep ? (
      <BackButton
        onClick={onGoBack}
        label={
          <AnimatedLabel
            labels={steps.map((step) => step.label)}
            activeStep={activeStep}
            backward={activeStep < prev}
          />
        }
        className="visible-xs"
      />
    ) : (
      <Logo type={Logo.Type.FLAG} className="visible-xs" />
    );

  return (
    <Header
      ref={ref}
      className="np-flow-navigation"
      leftContent={
        <>
          <Logo type={Logo.Type.FULL} className="hidden-xs" />
          {getMobileLeftContent()}
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
          className={classNames('np-flow-navigation__stepper m-t-1')}
        />
      }
      layout={clientWidth < Breakpoint.MEDIUM ? 'vertical' : 'horizontal'}
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
  /** The user or business avatar */
  avatar: Types.node,
  /** Function called when the close is clicked */
  onClose: Types.func,
  /** Function called on mobile view when the backButton is clicked */
  onGoBack: Types.func,
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
};

export default FlowNavigation;
