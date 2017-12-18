
import '../css/home.css';
import { hotReload, mobileNavHandler } from './util.js'

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

/**
 * MOBILE NAV HANDLER
 */
const hamburger = document.querySelector('.hamburger');
const mobileNavList = document.querySelector('.mobile-nav-list');

mobileNavHandler(hamburger, mobileNavList);

/**
 * WAYPOINT HANDLER
 */
const squareNavContainer = document.querySelector('#squareNavContainer');

window.addEventListener('scroll', function() {
  if (isScrolledIntoView(squareNavContainer)) {
    squareNavContainer.classList.add('animate')
  }
})

window.addEventListener('load', function() {
  const topLeftSquare = document.querySelector('#topLeftSquare')
  const botLeftSquare = document.querySelector('#botLeftSquare')
  const topRightSquare = document.querySelector('#topRightSquare')
  const botRightSquare = document.querySelector('#botRightSquare')
  const topBorder = document.querySelector('#topBorder')
  const bottomBorder = document.querySelector('#bottomBorder')

  function calculateSpace() {
    const spaceBetween = topRightSquare.getBoundingClientRect().left - topLeftSquare.getBoundingClientRect().right;
    const actualHeight = topLeftSquare.clientHeight + (topLeftSquare.clientHeight * .2);
    const actualWidth = spaceBetween * .8;
    const extraMargin = (spaceBetween * .1);

    topBorder.style.width = `${actualWidth}px`
    topBorder.style.right = `-${spaceBetween - extraMargin}px`
    topBorder.style.height = `${actualHeight}px`
    bottomBorder.style.width = `${actualWidth}px`
    bottomBorder.style.right = `-${spaceBetween - extraMargin}px`
  }

  calculateSpace();

  window.addEventListener('resize', calculateSpace);
})

hotReload();
