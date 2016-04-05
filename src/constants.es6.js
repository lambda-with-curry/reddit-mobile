export default {
  TOGGLE_OVER_18: 'toggleOver18',
  USER_MENU_TOGGLE: 'sideNavToggle',
  COMMUNITY_MENU_TOGGLE: 'communityMenuToggle',
  TOP_NAV_HAMBURGER_CLICK: 'topNavHamburgerClick',
  TOP_NAV_COMMUNITY_CLICK: 'topNavCommunityClick',
  USER_DATA_CHANGED: 'userDataChanged',
  VOTE: 'vote',
  OVERLAY_MENU_OPEN: 'overlayMenuOpen',
  OVERLAY_MENU_OFFSET: -10, // from css
  OVERLAY_MENU_CSS_CLASS: 'OverlayMenu',
  OVERLAY_MENU_VISIBLE_CSS_CLASS: 'OverlayMenu-visible',
  DROPDOWN_CSS_CLASS: 'Dropdown',
  DROPDOWN_OPEN: 'dropdownOpen',
  COMPACT_TOGGLE: 'compactToggle',
  THEME_TOGGLE: 'themeToggle',
  TOP_NAV_HEIGHT: 45,
  RESIZE: 'resize',
  SCROLL: 'scroll',
  ICON_SHRUNK_SIZE: 16,
  CACHEABLE_COOKIES: ['compact'],
  DEFAULT_API_TIMEOUT: 10000,
  HIDE_GLOBAL_MESSAGE: 'hideGlobalMessage',
  // number of views before we hide stop showing EU cookie notice,
  // or when user clicks close.
  EU_COOKIE_HIDE_AFTER_VIEWS: 3,
  NEW_INFOBAR_MESSAGE: 'newInfoBarMessage',
  messageTypes: {
    GLOBAL: 'global',
    EU_COOKIE: 'euCookie',
  },
  DEFAULT_KEY_COLOR: '#336699',
  SET_META_COLOR: 'setMetaColor',
  // Post content
  POST_COMPACT_THUMBNAIL_WIDTH: 70,
  POST_DEFAULT_WIDTH: 320,

  /* eslint-disable max-len */
  BANNER_URLS: {
    FRONTPAGE: {
      IMPRESSION: 'https://249639.measurementapi.com/serve?action=impression&publisher_id=249639&site_id=121809&site_id_android=122129&site_id_ios=121809',
      CLICK: 'https://249639.measurementapi.com/serve?action=click&publisher_id=249639&site_id=121809&site_id_android=122129&site_id_ios=121809',
    },
    LISTING: {
      IMPRESSION: 'https://249639.measurementapi.com/serve?action=impression&publisher_id=249639&site_id=121809&site_id_android=122129&site_id_ios=121809',
      CLICK: 'https://249639.measurementapi.com/serve?action=click&publisher_id=249639&site_id=121809&site_id_android=122129&site_id_ios=121809',
    },
    COMMENTS: {
      IMPRESSION: 'https://249639.measurementapi.com/serve?action=impression&publisher_id=249639&site_id=121809&site_id_android=122129&site_id_ios=121809',
      CLICK: 'https://249639.measurementapi.com/serve?action=click&publisher_id=249639&site_id=121809&site_id_android=122129&site_id_ios=121809',
    },
  },
  /* eslint-enable */

  // feature flags
  flags: {
    BETA: 'beta',
    SMARTBANNER: 'banner',
  },

  themes: {
    NIGHTMODE: 'nightmode',
    DAYMODE: 'daymode',
  },
};
