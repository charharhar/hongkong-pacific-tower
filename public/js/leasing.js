
import '../css/leasing.css';
import { hotReload, sliceArray, specialSlick, mobileNavHandler } from './util.js'
import CountUp from 'countup.js'
import interact from 'interactjs'

window.addEventListener('load', function() {
  // specialSlick('#highzone-slider');
  // specialSlick('#lowzone-slider');
  specialSlick('#retail-slider');
})

/**
 * MOBILE NAV HANDLER
 */
const hamburger = document.querySelector('.hamburger');
const mobileNavList = document.querySelector('.mobile-nav-list');

mobileNavHandler(hamburger, mobileNavList);

const speedNumbers = document.querySelector('.speedNumbers');
const options = {
  useEasing: true,
  useGrouping: true,
  separator: ',',
  decimal: '.',
};
const numberOffice = new CountUp('numberOffice', 0, 339000, 0, 2.5, options);
const numberFloors = new CountUp('numberFloors', 0, 24, 0, 2.5, options);
const numberParking = new CountUp('numberParking', 0, 122, 0, 2.5, options);

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

// Clicker for building wrapper
const floorPlanShowcase = document.querySelector('.floorplan-showcase');
const buildingClicker = sliceArray(document.querySelectorAll('.buildingClicker'));

buildingClicker.forEach(clicker => {
  clicker.addEventListener('click', e => {
    const className = clicker.getAttribute('data-class');
    floorPlanShowcase.className = `floorplan-showcase ${className}`
  })
})

// Interact draggable
const testfitInteract = document.querySelector('.testfit-interact')
const clipImg = document.querySelector('#clip-img')
const scenarioOne = document.querySelector('.scenario-one')
const scenarioTwo = document.querySelector('.scenario-two')
let imageWidth = document.querySelector('.testfit-img-1').clientWidth;
let testfitWrapperWidth
let testFitImgWidth
let distanceDiff

interact(testfitInteract, {
  allowFrom: '#drag-point',
})
.draggable({
  inertia: true,
  restrict: {
    restriction: "parent",
    endOnly: false,
    elementRect: { top: 0, left: 0, bottom: 1, right: 1 }
  },
  autoScroll: true,
  onmove: dragMoveListener,
})

function dragMoveListener (event) {
  let target = event.target;
  const x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx;
  const insetDistance = x - distanceDiff;
  const distancePercent = Math.floor(insetDistance / imageWidth * 100)

  if (distancePercent >= 75) {
    scenarioOne.classList.add('sceneChanged')
    scenarioTwo.classList.add('sceneChanged')
  } else {
    scenarioOne.classList.remove('sceneChanged')
    scenarioTwo.classList.remove('sceneChanged')
  }

  target.style.webkitTransform = `translateX(${x}px)`;
  target.style.transform = `translateX(${x}px)`;

  clipImg.style.webkitClipPath = `inset(0 0 0 ${insetDistance}px)`
  clipImg.style.clipPath = `inset(0 0 0 ${insetDistance}px)`
  target.setAttribute('data-x', x);
}

function getWidths() {
  testfitWrapperWidth = document.querySelector('.testfitWrapper').clientWidth
  testFitImgWidth = document.querySelector('.testfit-img-2').clientWidth
  distanceDiff = ((testfitWrapperWidth - testFitImgWidth) / 2) - 40;
  imageWidth = document.querySelector('.testfit-img-1').clientWidth;
}

window.addEventListener('load', getWidths)
window.addEventListener('resize', getWidths)

// Scroll listener

window.addEventListener('scroll', e => {
  if (isScrolledIntoView(speedNumbers)) {
    numberOffice.start();
    numberFloors.start();
    numberParking.start();
  }
})

hotReload();
