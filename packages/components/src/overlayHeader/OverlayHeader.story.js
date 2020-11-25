import React from 'react';
import { select, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Profile as ProfileIcon, Briefcase as BriefcaseIcon } from '@transferwise/icons';
import OverlayHeader from './OverlayHeader';
import Avatar from '../avatar';

export default {
  component: OverlayHeader,
  title: 'OverlayHeader',
};

export const basic = () => {
  const theme = select('theme', Object.values(OverlayHeader.Theme), OverlayHeader.Theme.LIGHT);
  const isBusiness = boolean('isBusiness', false);
  const showAvatar = boolean('showAvatar', true);
  return (
    <div
      style={{ background: theme === OverlayHeader.Theme.DARK ? '#37517e' : 'white' }}
      className="p-a-2"
    >
      <OverlayHeader
        onClose={action('Close clicked')}
        avatar={
          showAvatar ? (
            <Avatar type={Avatar.Type.ICON} size={Avatar.Size.MEDIUM}>
              {isBusiness ? <BriefcaseIcon /> : <ProfileIcon />}
            </Avatar>
          ) : null
        }
        theme={theme}
      />
    </div>
  );
};
