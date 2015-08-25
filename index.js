module.exports = function ( tests ) {
  var dash2Camel = require( 'dash-2-camel' );

  tests = Object.keys( tests ).reduce( function ( seq, key ) {
    seq[ dash2Camel( key ) ] = tests[ key ];
    return seq;
  }, { } );

  var addClasses = require( './lib/add-classes' );
  addClasses( tests );
  return tests;
};
