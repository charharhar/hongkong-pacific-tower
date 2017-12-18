
import '../css/contact.css';
import { hotReload, mobileNavHandler } from './util.js'

/**
 * MOBILE NAV HANDLER
 */
const hamburger = document.querySelector('.hamburger');
const mobileNavList = document.querySelector('.mobile-nav-list');

mobileNavHandler(hamburger, mobileNavList);

hotReload();
