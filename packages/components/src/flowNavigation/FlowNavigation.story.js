import React from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import FlowNavigation from './FlowNavigation';
import AvatarWrapper from './avatarWrapper';

export default {
  component: FlowNavigation,
  title: 'FlowNavigation',
};

export const basic = () => {
  const activeStep = select('activeStep', [0, 1, 2, 3]);
  const done = boolean('done', false);
  const theme = select('theme', Object.values(FlowNavigation.Theme), FlowNavigation.Theme.LIGHT);
  const profileType = select('profileType', ['BUSINESS', 'PERSONAL'], 'PERSONAL');
  const onGoBack = boolean('onGoBack', true);

  return (
    <FlowNavigation
      avatar={
        done ? null : (
          <AvatarWrapper url="https://github.com/transferwise.png" profileType={profileType} />
        )
      }
      activeStep={activeStep}
      onClose={action('Close clicked')}
      // avatarUrl="https://github.com/transferwise.png"
      done={done}
      // profileType={profileType}
      onGoBack={onGoBack && action('go back')}
      showStepper={!done && theme !== FlowNavigation.Theme.DARK}
      theme={theme}
      steps={[
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
        },
        {
          label: 'My details',
          hoverLabel: (
            <>
              <div>
                <strong>Diana Jaramillo</strong>
              </div>
              dianajarm123@gmail.com
            </>
          ),
        },
        { label: 'Recipient', hoverLabel: 'Some person/dog' },
        { label: 'Something', hoverLabel: 'Cool' },
      ]}
    />
  );
};
