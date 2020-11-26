import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';

import MediaUploadStep from '.';

describe('mediaUploadStep', () => {
  const defaultProps = {
    fileDropped: jest.fn(),
    isComplete: false,
    usAccept: '*',
    usButtonText: '',
    usDisabled: false,
    usLabel: '',
    usHelpImage: '',
    usPlaceholder: '',
  };

  const renderUpload = (props = {}) => {
    return render(<MediaUploadStep {...defaultProps} {...props} />);
  };

  afterEach(() => {
    cleanup();
  });

  it('renders help image passed as url string', () => {
    const { getByAltText } = renderUpload({ usHelpImage: 'usHelpImage', usLabel: 'usLabel' });
    expect(getByAltText('usLabel')).not.toBe(null);
  });

  it('renders help images passed as image node', () => {
    const usHelpImage = (
      <span role="img" aria-label="rocket">
        🚀
      </span>
    );

    const { getByLabelText } = renderUpload({ usHelpImage });
    expect(getByLabelText('rocket')).not.toBe(null);
  });

  it('renders label', () => {
    const { getByText } = renderUpload({ usLabel: 'usLabel' });
    expect(getByText('usLabel')).not.toBe(null);
  });

  it('renders placeholder', () => {
    const { getByText } = renderUpload({ usPlaceholder: 'usPlaceholder' });
    expect(getByText('usPlaceholder')).not.toBe(null);
  });

  it('renders buttonText', () => {
    const { getByText } = renderUpload({ usButtonText: 'usButtonText' });
    expect(getByText('usButtonText')).not.toBe(null);
  });

  it(`calls microapps' requestMedia API to get file while upload button is clicked`, () => {
    const allowedMimeTypes = ['image/jpeg', 'video/*', 'application/pdf'];
    const image64 = {
      bytes:
        'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEX/AAAZ4gk3AAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC',
      mimeType: 'image/jpeg',
    };
    const requestMedia = jest.fn().mockImplementation(() => Promise.resolve(image64));
    window.microapps = { requestMedia };
    const { getByText } = renderUpload({ usButtonText: 'usButtonText' });
    const button = getByText('usButtonText');
    fireEvent.click(button);
    expect(requestMedia).toHaveBeenCalledWith({ allowedMimeTypes });
  });
});
