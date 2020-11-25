import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import FlowNavigation from './FlowNavigation';
import Avatar from '../avatar';

export default {
  component: FlowNavigation,
  title: 'FlowNavigation',
};

export const withIcon = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [closed, setClosed] = useState(false);
  const showAvatar = boolean('showAvatar', true);
  const showCloseButton = boolean('showCloseButton', true);
  const showMobileBackButton = boolean('showMobileBackButton', true);
  const isBusiness = boolean('isBusiness', false);

  return !closed ? (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
            {isBusiness ? <BriefcaseIcon /> : <ProfileIcon />}
          </Avatar>
        )
      }
      onClose={showCloseButton && (() => setClosed(true))}
      onGoBack={
        showMobileBackButton && (() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0))
      }
      stepper={{
        activeStep,
        steps: [
          {
            label: 'Amount',
            hoverLabel: (
              <>
                <div>
                  <strong>100 GBP</strong>
                </div>
                0.2351 ETH
              </>
            ),
            onClick: () => setActiveStep(0),
          },
          {
            label: 'My details',
            hoverLabel: (
              <>
                <div>
                  <strong>Elena Durante</strong>
                </div>
                elenadurante@test.com
              </>
            ),
            onClick: () => setActiveStep(1),
          },
          { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
          { label: 'Something', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        ],
      }}
    />
  ) : null;
};

export const withCustomImage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [closed, setClosed] = useState(false);
  const showAvatar = boolean('showAvatar', true);
  const showCloseButton = boolean('showCloseButton', true);
  const showMobileBackButton = boolean('showMobileBackButton', true);
  // dev only
  const developmentLayout = boolean('vertical', true);

  return !closed ? (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.THUMBNAIL} size={Avatar.Size.MEDIUM}>
            <img src="https://github.com/transferwise.png" alt="avatar" />
          </Avatar>
        )
      }
      onClose={showCloseButton && (() => setClosed(true))}
      onGoBack={
        showMobileBackButton && (() => setActiveStep(activeStep - 1 > 0 ? activeStep - 1 : 0))
      }
      stepper={{
        activeStep,
        steps: [
          {
            label: 'Amount',
            hoverLabel: (
              <>
                <div>
                  <strong>100 GBP</strong>
                </div>
                0.2351 ETH
              </>
            ),
            onClick: () => setActiveStep(0),
          },
          {
            label: 'My details',
            hoverLabel: (
              <>
                <div>
                  <strong>Elena Durante</strong>
                </div>
                elenadurante@test.com
              </>
            ),
            onClick: () => setActiveStep(1),
          },
          { label: 'Recipient', hoverLabel: 'Daniele Tomboro', onClick: () => setActiveStep(2) },
          { label: 'Something', hoverLabel: 'Antonio Dozortevo', onClick: () => setActiveStep(3) },
        ],
      }}
      developmentLayout={developmentLayout && 'vertical'}
    />
  ) : null;
};
