
import '../css/innovative.css';
import {
  hotReload,
  slickHelper,
  mobileNavHandler,
  footerCopyrightYear,
  initiateLocaleBtns ,
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

window.addEventListener('load', function() {
  slickHelper('#innovative-second-slider');
})

hotReload();
