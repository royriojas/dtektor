module.exports = function () {
  return {
    'demo': {
      src: 'src/demo.js',
      dest: 'demo/dist/demo.js'
    },

    'tests-includes': {
      src: 'test-helpers/includes.js',
      dest: 'tests-dist/includes.js'
    },
    'tests': {
      options: {
        browserifyOpts: {
          ignoreTransform: [ 'shimixify', 'babelify' ]
        },
        transforms: {
          shimixify: {
            config: {
              exclude: [
                '/\/p/.+/',
                '/\/add-classes/'
              ],
              appliesTo: {
                regex: '/specs/'
              }
            }
          }
        },
        afterTransforms: function ( b ) {
          var proxyquire = require( 'browsyquire' );
          b.plugin( proxyquire.plugin );
        },
        beforeTransforms: function ( b ) {

          b.external( 'document' );

          if ( process.argv.indexOf( '--debug' ) > -1 ) {
            return;
          }
          var istanbul = require( 'browserify-babel-istanbul' );

          // or with some options...
          b.transform( istanbul( {
            // ignore these glob paths (the ones shown are the defaults)
            //ignore: ['**/node_modules/**', '**/bower_components/**', '**/test/**', '**/tests/**', '**/*.json'],
            ignore: [
              '**/specs/**'
            ],
          // by default, any paths you include in the ignore option are ignored
          // in addition to the defaults. set the defaultIgnore option to false
          // to only ignore the paths you specify.
          //defaultIgnore: true
          } ) );
        }
      },
      src: 'tests/all.js',
      dest: 'tests-dist/all.js'
    }
  };
};
