
import '../css/contact.css';
import { hotReload, mobileNavHandler, footerCopyrightYear } from './util.js'

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
