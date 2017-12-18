
import '../css/innovative.css';
import { hotReload, slickHelper, mobileNavHandler } from './util.js'

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
