
/**
 * Utility Functions
 */

function scrollTop() {
  return (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
}

/**
 * Utility Functions
 */
export function slickHelper(target) {
  $(target).slick({
    // autoplay: true,
    arrows: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  })
}

export function specialSlick(target) {
  $(target).slick({
    autoplay: true,
    arrows: true,
    dots: true,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  })
}

export function mobileNavHandler(toggle, mobileNav) {
  const wrapper = document.querySelector('.wrapper');
  const html = document.querySelector('html');
  const body = document.querySelector('body');
  const mobileScrollHelper = document.querySelector('.mobileScrollHelper');

  toggle.addEventListener('click', function(e) {
    e.preventDefault();
    let transformValue = window.getComputedStyle(mobileScrollHelper, null).getPropertyValue('transform').match(/([-+]?[\d\.]+)/g)[5]

    if (this.classList.contains('mobile-active') === true) {
      mobileScrollHelper.style.transform = `translateY(0px)`
      this.classList.remove('mobile-active')
      mobileNav.classList.remove('mobile-active')
      wrapper.classList.remove('mobile-active')
      html.classList.remove('mobile-active')
      body.classList.remove('mobile-active')
      window.scrollTo(0, Math.abs(transformValue));
    } else {
      mobileScrollHelper.style.transform = `translateY(-${scrollTop()}px)`
      this.classList.add('mobile-active');
      mobileNav.classList.add('mobile-active');
      wrapper.classList.add('mobile-active');
      html.classList.add('mobile-active')
      body.classList.add('mobile-active')
    }

  });
}

export function hotReload() {
  return (process.env.NODE_ENV === 'development') && module.hot && module.hot.accept();
}

export function removeAllChildren(parent) {
  while (parent.hasChildNodes()) {
    parent.removeChild(parent.lastChild);
  }
}

export function findParent(node, className) {
  let tempNode = node;

  while (!tempNode.classList.contains(className)) {
    tempNode = tempNode.parentNode;
  }

  return tempNode
}

export function sliceArray(nodeArray) {
  return Array.prototype.slice.call(nodeArray)
}

export function getDistanceFromLeft(el) {
  const rect = el.getBoundingClientRect();
  const docEl = document.documentElement;

  return (rect.left + (window.pageXOffset || docEl.scrollLeft || 0))
}

export function scrollTo(e, elem) {
  e.preventDefault();

  const target = `.${elem.getAttribute('scrollTo')}`

  $('html, body').animate({
    scrollTop: $(target).offset().top
  }, 1000);
}
