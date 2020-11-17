import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Theme } from '../../common';
import './Logo.css';

const Logo = ({ className, theme, type }) => {
  let baseClass = ['logo', 'logo-3', 'logo-primary'];
  if (type === Logo.Type.FLAG) {
    baseClass = ['flag', 'flag-info'];
  } else if (theme === Logo.Theme.DARK) {
    baseClass.splice(2, 1, 'logo-inverse');
  }
  return <div className={classNames('np-logo', baseClass, className)} />;
};

Logo.Theme = Theme;

Logo.Type = { FULL: 'FULL', FLAG: 'FLAG' };

Logo.propTypes = {
  className: Types.string,
  theme: Types.oneOf([Logo.Theme.LIGHT, Logo.Theme.DARK]),
  type: Types.oneOf([Logo.Type.FULL, Logo.Type.FLAG]),
};

Logo.defaultProps = {
  className: undefined,
  theme: Theme.LIGHT,
  type: Logo.Type.FULL,
};

export default Logo;
