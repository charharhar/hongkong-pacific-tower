
import '../css/innovative.css';
import { hotReload, sliceArray, slickHelper } from './util.js'

window.addEventListener('load', function(e) {
  console.log('--> Application started  |  Current route: /innovative')
})

window.addEventListener('load', function() {
  slickHelper('#innovative-second-slider');

})

hotReload();
