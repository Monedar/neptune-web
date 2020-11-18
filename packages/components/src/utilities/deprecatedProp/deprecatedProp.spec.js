// eslint-disable no-console
import deprecated from '.';

const props = { prop1: 'prop1', prop2: 'prop2' };
const validator = jest.fn();

const originalConsole = global.console;

describe('deprecated', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  beforeAll(() => {
    global.console = { warn: jest.fn() };
  });
  afterAll(() => {
    global.console = originalConsole;
  });

  describe('if prop has been listed as deprecated', () => {
    it('calls console.warn  with correct message', () => {
      const component = 'Test';
      const newProp = 'newProp';
      const propName = 'prop1';

      const expiryDate = new Date('01-01-2000');
      const expiryDateString = expiryDate.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });

      deprecated(validator, { component, newProp, expiryDate })(props, propName);

      expect(console.warn).toHaveBeenCalledWith(
        `${component} has deprecated the use of ${propName}. Please use ${newProp} instead. ${propName} will be removed on or after ${expiryDateString}`,
      );
    });

    it('calls console.warn with correct message if newProp is not provided', () => {
      const component = 'Test';

      const propName = 'prop1';

      const expiryDate = new Date('01-01-2000');
      const expiryDateString = expiryDate.toLocaleString('en-GB', {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
      });

      deprecated(validator, { component, newProp: '', expiryDate })(props, propName);

      expect(console.warn).toHaveBeenCalledWith(
        `${component} has deprecated the use of ${propName}. ${propName} will be removed on or after ${expiryDateString}`,
      );
    });
  });

  describe('if prop has not been listed as deprecated', () => {
    it('calls validator with props', () => {
      const propName = 'prop3';
      deprecated(validator, {})(props, propName);
      expect(console.warn).not.toHaveBeenCalled();
    });

    it('calls validator with expected args', () => {
      const propName = 'prop3';
      deprecated(validator, {})(props, propName);
      expect(validator).toHaveBeenCalledWith({ prop1: 'prop1', prop2: 'prop2' }, 'prop3');
    });
  });
});
