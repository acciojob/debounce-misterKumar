function debounce(callback, delay, immediate = false) {
let timeoutId;

  return function(...args) {
    const context = this;

    const later = function() {
      timeoutId = null;
      if (!immediate) {
        callback.apply(context, args);
      }
    };

    const callNow = immediate && !timeoutId;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(later, delay);

    if (callNow) {
      callback.apply(context, args);
    }
  };  
}
  
  module.exports = debounce;
