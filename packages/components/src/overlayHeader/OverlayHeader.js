import React from 'react';
import Types from 'prop-types';

import Header from '../header';
import Logo from '../common/logo';
import CloseButton from '../common/closeButton';

import { Theme } from '../common';

import './OverlayHeader.css';

const OverlayHeader = ({ avatar, onClose, theme }) => {
  const closeButton = onClose && <CloseButton onClick={onClose} />;
  return (
    <Header
      className="np-overlay-header"
      leftContent={<Logo theme={theme} />}
      rightContent={
        <>
          {avatar}
          {avatar && closeButton && <span className="separator" />}
          {closeButton}
        </>
      }
    />
  );
};

OverlayHeader.Theme = Theme;

OverlayHeader.defaultProps = {
  avatar: null,
  onClose: null,
  theme: Theme.LIGHT,
};

OverlayHeader.propTypes = {
  /** The personal or business avatar */
  avatar: Types.element,
  /** Function called when the close is clicked */
  onClose: Types.func,
  /** It handles the logo color */
  theme: Types.oneOf([OverlayHeader.Theme.LIGHT, OverlayHeader.Theme.DARK]),
};

export default OverlayHeader;
