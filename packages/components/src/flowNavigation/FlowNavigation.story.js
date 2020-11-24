import React, { useState } from 'react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import FlowNavigation from './FlowNavigation';
import Avatar from '../avatar';

export default {
  component: FlowNavigation,
  title: 'FlowNavigation',
};

export const withProfileIcon = () => {
  const [activeStep, setActiveStep] = useState(0);
  const showAvatar = boolean('showAvatar', true);
  const showCloseButton = boolean('showCloseButton', true);
  const showMobileBackButton = boolean('showMobileBackButton', true);

  return (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
            <ProfileIcon />
          </Avatar>
        )
      }
      onClose={showCloseButton && action('Close clicked')}
      onGoBack={showMobileBackButton && action('go back')}
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
  );
};

export const withCustomImage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const showAvatar = boolean('showAvatar', true);
  const showCloseButton = boolean('showCloseButton', true);
  const showMobileBackButton = boolean('showMobileBackButton', true);
  // dev only
  const developmentLayout = boolean('vertical', true);

  return (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.THUMBNAIL} size={Avatar.Size.MEDIUM}>
            <img src="https://github.com/transferwise.png" alt="avatar" />
          </Avatar>
        )
      }
      onClose={showCloseButton && action('Close clicked')}
      onGoBack={showMobileBackButton && action('go back')}
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
  );
};

export const withBusinessIcon = () => {
  const [activeStep, setActiveStep] = useState(0);
  const showAvatar = boolean('showAvatar', true);
  const showCloseButton = boolean('showCloseButton', true);
  const showMobileBackButton = boolean('showMobileBackButton', true);
  // dev only
  const developmentLayout = boolean('vertical', true);

  return (
    <FlowNavigation
      avatar={
        !showAvatar ? null : (
          <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
            <BriefcaseIcon />
          </Avatar>
        )
      }
      onClose={showCloseButton && action('Close clicked')}
      onGoBack={showMobileBackButton && action('go back')}
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
  );
};
