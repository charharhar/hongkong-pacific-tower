
import '../css/downloads.css';
import {
  hotReload,
  mobileNavHandler,
  footerCopyrightYear,
  initiateLocaleBtns,
} from './util.js'

/**
 * INITIATE LOCALE BTN LISTENERS
 */
initiateLocaleBtns();

/**
 * DYNAMIC FOOTER YEAR
 */
const footerYear = document.querySelector('#footerYear');
footerCopyrightYear(footerYear);

/**
 * MOBILE NAV HANDLER
 */
const hamburger = document.querySelector('.hamburger');
const mobileNavList = document.querySelector('.mobile-nav-list');

mobileNavHandler(hamburger, mobileNavList);

hotReload();
