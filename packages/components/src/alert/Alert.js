import React, { cloneElement } from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import requiredIf from 'react-required-if';
import { InfoCircle, CheckCircle, CrossCircle, Alert as AlertIcon } from '@transferwise/icons';
import { Sentiment, Size } from '../common';
import CloseButton from './closeButton';
import withArrow, { ArrowPosition } from './withArrow';
import InlineMarkdown from './inlineMarkdown';
import { logActionRequiredIf, deprecated } from '../utilities';

const deprecatedTypeMap = {
  [Sentiment.SUCCESS]: Sentiment.POSITIVE,
  [Sentiment.INFO]: Sentiment.NEUTRAL,
  [Sentiment.ERROR]: Sentiment.NEGATIVE,
};

const iconTypeMap = {
  [Sentiment.POSITIVE]: CheckCircle,
  [Sentiment.NEUTRAL]: InfoCircle,
  [Sentiment.WARNING]: AlertIcon,
  [Sentiment.NEGATIVE]: CrossCircle,
};

const Alert = (props) => {
  const { arrow, action, children, className, icon, onDismiss, message, type } = props;

  if (arrow) {
    const AlertWithArrow = withArrow(Alert, arrow);
    return <AlertWithArrow {...props} />;
  }

  logActionRequired(props);

  const mappedType = deprecatedTypeMap[type] || type;

  const Icon = iconTypeMap[mappedType];
  const iconEl = icon ? cloneElement(icon, { size: 24 }) : <Icon size={24} />;

  const alert = (
    <div role="alert" className={classNames('alert d-flex', `alert-${mappedType}`, className)}>
      {iconEl}
      <div className="alert__message p-l-2 flex-grow-1">
        <div>{children || <InlineMarkdown>{message}</InlineMarkdown>}</div>
        {action && (
          <a href={action.href} className="m-t-1 d-inline-block" aria-label={action['aria-label']}>
            {action.text}
          </a>
        )}
      </div>
      {onDismiss && (
        <CloseButton onClick={onDismiss} size={CloseButton.Size.SMALL} className="m-l-2" />
      )}
    </div>
  );

  return alert;
};

const deprecatedTypeMapMessage = {
  [Sentiment.SUCCESS]: 'Alert.Type.POSITIVE',
  [Sentiment.INFO]: 'Alert.Type.NEUTRAL',
  [Sentiment.ERROR]: 'Alert.Type.NEGATIVE',
};

const deprecatedTypes = Object.keys(deprecatedTypeMap);

function logActionRequired({ size, type }) {
  logActionRequiredIf(
    'Alert no longer supports any possible variations in size. Please remove the `size` prop.',
    !!size,
  );
  logActionRequiredIf(
    `Alert has deprecated the ${type} value for the \`type\` prop. Please update to ${deprecatedTypeMapMessage[type]}.`,
    deprecatedTypes.includes(type),
  );
}

Alert.ArrowPosition = ArrowPosition;
Alert.Size = { SMALL: Size.SMALL, LARGE: Size.LARGE };
Alert.Type = Sentiment;

Alert.propTypes = {
  /** An optional call to action to sit under the main body of the alert. If your label is short, use aria-label to provide more context */
  action: Types.shape({
    'aria-label': Types.string,
    href: Types.string.isRequired,
    text: Types.node.isRequired,
  }),
  className: Types.string,
  /** An optional icon. If not provided, we will default the icon to something appropriate for the type */
  icon: Types.element,
  /** The main body of the alert. Accepts plain text and bold words specified with **double stars** */
  message: requiredIf(Types.node, ({ children }) => !children),
  /** The presence of the onDismiss handler will trigger the visibility of the close button */
  onDismiss: Types.func,
  /** The type dictates which icon and colour will be used */
  type: Types.oneOf(Object.values(Alert.Type)),

  /** @DEPRECATED */
  arrow: deprecated(
    Types.oneOf([
      ArrowPosition.TOP_LEFT,
      ArrowPosition.TOP,
      ArrowPosition.TOP_RIGHT,
      ArrowPosition.BOTTOM_LEFT,
      ArrowPosition.BOTTOM,
      ArrowPosition.BOTTOM_RIGHT,
    ]),
    { component: 'Alert', expiryDate: new Date('03-01-2021') },
  ),
  /** @DEPRECATED */
  children: deprecated(
    requiredIf(Types.node, ({ message }) => !message),
    {
      component: 'Alert',
      message:
        'You should now use the `message` prop. Be aware `message` only accepts plain text or text with **bold** markdown.',
      expiryDate: new Date('03-01-2021'),
    },
  ),
  /** @DEPRECATED */
  dismissible: deprecated(Types.bool, {
    component: 'Alert',
    message: 'The Alert will now be considered dismissible if an `onDismiss` hander is present.',
    expiryDate: new Date('03-01-2021'),
  }),
};

Alert.defaultProps = {
  action: undefined,
  arrow: undefined,
  className: undefined,
  dismissible: undefined,
  icon: undefined,
  type: Alert.Type.NEUTRAL,
};

export default Alert;
