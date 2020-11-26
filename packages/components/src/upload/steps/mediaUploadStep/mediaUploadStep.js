import React from 'react';
import Types from 'prop-types';
import classNames from 'classnames';
import { Upload as UploadIcon } from '@transferwise/icons';

const SUPPORTED_MIME_TYPES = ['image/jpeg', 'video/*', 'application/pdf'];

const MediaUploadStep = ({
  isComplete,
  usAccept,
  usButtonText,
  usDisabled,
  usHelpImage,
  usLabel,
  usPlaceholder,
  fileDropped,
}) => {
  const requestMedia = () => {
    if (typeof window.microapps === 'undefined') {
      throw new Error(`microapps must be available in window to use Spot Platform's Media API`);
    }

    const allowedMimeTypes =
      usAccept === '*' ? SUPPORTED_MIME_TYPES : getSupportedMimeTypes(usAccept);

    if (allowedMimeTypes.length < 1) {
      throw new Error('provided mimeTypes not supported');
    }

    const mediaRequest = { allowedMimeTypes };
    window.microapps.requestMedia(mediaRequest).then((response) => {
      const fileByteArray = base64ToByteArray(response.bytes);
      const blob = new Blob([fileByteArray], { type: response.mimeType });
      fileDropped(blob);
    });
  };

  const base64ToByteArray = (base64String) => {
    const byteCharacters = atob(base64String);
    const byteCharactersLength = byteCharacters.length;
    const byteArray = new Array(byteCharactersLength);

    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < byteCharactersLength; i++) {
      byteArray[i] = byteCharacters.charCodeAt(i);
    }
    return new Uint8Array(byteArray);
  };

  const getSupportedMimeTypes = (mimeTypes) => {
    const mimeTypesArray = mimeTypes.split(',');
    const mapSupportedMimeTypes = mimeTypesArray.map((type) => {
      if (type === 'image/*') {
        return 'image/jpeg';
      }
      if (type === 'application/*') {
        return 'application/pdf';
      }
      return type;
    });

    const supportedMimeTypes = mapSupportedMimeTypes.filter((type) =>
      SUPPORTED_MIME_TYPES.includes(type),
    );
    return supportedMimeTypes;
  };

  const getImage = () => {
    if (!usHelpImage) {
      return (
        <div className="circle circle-sm circle-inverse p-t-1">
          <UploadIcon size={24} />
        </div>
      );
    }

    if (typeof usHelpImage === 'string') {
      return <img src={usHelpImage} alt={usLabel} className="thumbnail text-xs-center" />;
    }

    return usHelpImage;
  };

  return (
    <div>
      <div className="droppable-default-card" aria-hidden={isComplete}>
        <div className="droppable-card-content">
          <div className="m-b-3">{getImage()}</div>
          {usLabel && <h4 className="m-b-1">{usLabel}</h4>}
          {usPlaceholder && <p className="m-b-3">{`${usPlaceholder}`}</p>}
          <button
            type="button"
            className={classNames('btn btn-primary btn-sm', { disabled: usDisabled })}
            disabled={usDisabled}
            onClick={requestMedia}
          >
            {usButtonText || <UploadIcon size={24} className="m-r-0" />}
          </button>
        </div>
      </div>
    </div>
  );
};

MediaUploadStep.propTypes = {
  fileDropped: Types.func.isRequired,
  isComplete: Types.bool.isRequired,
  usAccept: Types.string.isRequired,
  usButtonText: Types.string.isRequired,
  usDisabled: Types.bool.isRequired,
  usHelpImage: Types.node.isRequired,
  usLabel: Types.string.isRequired,
  usPlaceholder: Types.string.isRequired,
};

export default MediaUploadStep;
