
import '../css/about.css';
import {
  hotReload,
  slickHelper,
  mobileNavHandler,
  footerCopyrightYear,
  initiateLocaleBtns,
} from './util.js'

window.addEventListener('load', function() {
  slickHelper('#about-second-slider');
})

/**
 * INITIATE LOCALE BTN LISTENERS
 */
initiateLocaleBtns();

/**
 * INITIATE LOCALE BTN LISTENERS
 */
initiateLocaleBtns();

/**
 * MOBILE NAV HANDLER
 */
const hamburger = document.querySelector('.hamburger');
const mobileNavList = document.querySelector('.mobile-nav-list');

mobileNavHandler(hamburger, mobileNavList);

/**
 * DYNAMIC FOOTER YEAR
 */
const footerYear = document.querySelector('#footerYear');
footerCopyrightYear(footerYear);

/**
 * WAYPOINT HANDLER
 */
const animationField = document.querySelector('.animation-field');
const assuranceBuilding = document.querySelector('.assurance-building');

function isScrolledIntoView(el) {
  const elemTop = el.getBoundingClientRect().top;
  const elemBottom = el.getBoundingClientRect().bottom;
  const elemHeight = el.clientHeight;

  return (
    elemTop <= window.innerHeight &&
    elemBottom <= (window.innerHeight + elemHeight) &&
    elemTop >= (-elemHeight) &&
    elemBottom >= 0
  )
}

function scrolledInAnimationHandler(visible, elem) {
  const animated = elem.classList.contains('animated');
  const enterDirection = elem.getAttribute('data');

  if (visible) {
    elem.classList.add('animated', 'inView', 'animated-visible')
    elem.classList.remove('notInView', `${enterDirection}-hidden`)
  } else if (!visible) {
    elem.classList.add('notInView', `${enterDirection}-hidden`)
    elem.classList.remove('animated', 'inView', 'animated-visible')
  }
}

window.addEventListener('scroll', e => {
  if (isScrolledIntoView(animationField)) {
    animationField.classList.add('triggered');
  }

  if (isScrolledIntoView(assuranceBuilding)) {
    assuranceBuilding.classList.add('triggered');
  }
})


hotReload();
