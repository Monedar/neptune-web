import React from 'react';
import { select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import OverlayHeader from './OverlayHeader';
import Avatar from '../avatar';

export default {
  component: OverlayHeader,
  title: 'OverlayHeader',
};

export const withProfileIcon = () => {
  const theme = select('theme', Object.values(OverlayHeader.Theme), OverlayHeader.Theme.LIGHT);

  return (
    <div
      style={{ background: theme === OverlayHeader.Theme.DARK ? '#37517e' : 'white' }}
      className="p-a-2"
    >
      <OverlayHeader
        onClose={action('Close clicked')}
        avatar={
          <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
            <ProfileIcon />
          </Avatar>
        }
        theme={theme}
      />
    </div>
  );
};

export const withBusinessIcon = () => {
  const theme = select('theme', Object.values(OverlayHeader.Theme), OverlayHeader.Theme.LIGHT);

  return (
    <div
      style={{ background: theme === OverlayHeader.Theme.DARK ? '#37517e' : 'white' }}
      className="p-a-2"
    >
      <OverlayHeader
        onClose={action('Close clicked')}
        avatar={
          <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
            <BriefcaseIcon />
          </Avatar>
        }
        theme={theme}
      />
    </div>
  );
};
