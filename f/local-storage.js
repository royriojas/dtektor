var test = function () {
  var localStorage = require( 'window' ).localStorage;
  try {
    localStorage.setItem( 'mod', 'mod' );
    localStorage.removeItem( 'mod' );
    return true;
  } catch (e) {
    return false;
  }
};

module.exports = test();
