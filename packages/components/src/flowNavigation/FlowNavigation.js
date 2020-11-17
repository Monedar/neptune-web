import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import CloseButton from '../common/CloseButton';
import BackButton from './backButton';

import Logo from './logo';
import Stepper from '../stepper';
import Header from '../header';
import { Theme } from '../common';

import './FlowNavigation.css';

/**
 * FlowNavigation is a header component that provides a logo, avatar and close button, for use in overlay screens.
 *
 * @param {array} [steps] - The step to be displayed in the stepper and used by the backButton.
 * @param {number} [activeStep] - current selected step.
 * @param {boolean} [done] - state of the flow. If truthy stepper and avatar gets hidden. Border bottom also gets removed when done = true
 * @param {function} [onClose] - Callback for the close button. If not present, no close button will be rendered.
 * @param {function} [onGoBack] - Callback for the BackButton. If not provided BackButton won't be displayed and Logo compact will display instead from mobile views.
 * @param {string} [theme=FlowNavigation.Theme.LIGHT] - Theme to use
 * @usage `<FlowNavigation activeStep={activeStep} onClose={callback} avatarUrl={someUrl} done={done}  onGoBack={callback} theme={OverlayHeader.Theme.LIGHT} steps={steps} />`
 * */
const FlowNavigation = ({ avatar, steps, activeStep, done, onClose, onGoBack, theme }) => {
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  return (
    <Header
      leftContent={
        <div className="m-lg-t-1">
          <Logo theme={theme} onGoBack={onGoBack} />
          <BackButton steps={steps} activeStep={activeStep} onGoBack={onGoBack} />
        </div>
      }
      rightContent={
        <div className="tw-flow-navigation__right-content m-lg-t-1">
          {avatar}
          {avatar && closeButton && <span className="separator m-a-2" />}
          {closeButton}
        </div>
      }
      bottomContent={
        done || theme === Theme.DARK ? null : (
          <div className="tw-flow-navigation__stepper m-lg-t-1">
            <Stepper activeStep={activeStep} steps={steps} />
          </div>
        )
      }
      className={classNames('tw-flow-navigation', 'tw-flow-navigation__wrapper', {
        'tw-flow-navigation--done': done,
        'tw-flow-navigation--inverse': theme === FlowNavigation.Theme.DARK,
      })}
    />
  );
};

FlowNavigation.Theme = Theme;

FlowNavigation.defaultProps = {
  activeStep: 0,
  avatar: null,
  done: false,
  onGoBack: null,
  onClose: null,
  theme: Theme.LIGHT,
};

FlowNavigation.propTypes = {
  avatar: Types.node,
  steps: Types.arrayOf(
    Types.shape({
      label: Types.node.isRequired,
      onClick: Types.func,
      hoverLabel: Types.node,
    }),
  ).isRequired,
  activeStep: Types.number,
  done: Types.bool,
  onGoBack: Types.func,
  onClose: Types.func,
  theme: Types.oneOf([FlowNavigation.Theme.LIGHT, FlowNavigation.Theme.DARK]),
};

export default FlowNavigation;
