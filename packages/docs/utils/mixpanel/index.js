import mixpanel from 'mixpanel-browser';

// we sent data to Mixpanel only from prod instance (https://transferwise.github.io/neptune-web)
const { isProdInstance } = process.env;

export const Events = {
  /**
   * Event for tracking pages which user opens
   */
  PAGE_VIEWED: 'Page Viewed',
};

export function initMixpanel() {
  mixpanel.init('8ba4a7a5182f05e0a79ded57d5d2f051', {
    // We add "opt_out_tracking_by_default=true" and "opt_out_persistence_by_default=true" to mixpanel.init
    // so we don't set cookies and don't track customers before they give us their consent
    opt_out_tracking_by_default: true,
    opt_out_persistence_by_default: true,
    debug: true,
  });

  window.addEventListener('accepttwcookieconsent', () => {
    console.log("addEventListener('accepttwcookieconsent'");
    mixpanel.opt_in_tracking();
  });
}

export function trackingFromWeb(callback) {
  // send event only from client (web) side
  if (typeof window !== 'undefined') {
    callback();
  }
}

export function trackEvent(name, props) {
  if (isProdInstance) {
    // https://developer.mixpanel.com/docs/javascript-full-api-reference#mixpaneltrack
    mixpanel.track(eventNamePrefix(name), props);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Track Event '${name}', props`, props);
  }
}

export function trackLink(selector, name, props) {
  if (isProdInstance) {
    // https://developer.mixpanel.com/docs/javascript-full-api-reference#mixpaneltrack_links
    mixpanel.track_links(selector, eventNamePrefix(name), props);
  } else {
    // eslint-disable-next-line no-console
    console.log(`Enabled Link tracking for '${selector}' selector, event: '${name}', props`, props);
  }
}

function eventNamePrefix(name) {
  return `Neptune - ${name}`;
}
