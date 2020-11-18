import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { ArrowLeft as ArrowLeftIcon } from '@transferwise/icons';

import './BackButton.css';

const BackButton = ({ label, className, onClick }) => (
  <button
    type="button"
    className={classNames(
      'np-back-button',
      'd-flex',
      'align-items-center',
      'btn-unstyled',
      className,
    )}
    onClick={onClick}
  >
    <ArrowLeftIcon size={24} className="m-r-1" />
    {label}
  </button>
);

BackButton.propTypes = {
  className: Types.string,
  label: Types.string,
  onClick: Types.func.isRequired,
};

BackButton.defaultProps = {
  className: undefined,
  label: null,
};

export default BackButton;
