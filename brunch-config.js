exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {}
    },
    stylesheets: {
      joinTo: {
       'css/app.css': "scss/main.scss",
      },
    },
    templates: {
      joinTo: 'js/app.js'
    }
  },

  conventions: {
    // This option sets where we should place non-css and non-js assets in.
    // By default, we set this to '/web/static/assets'. Files in this directory
    // will be copied to `paths.public`, which is "priv/static" by default.
    assets: /^(web\/static\/assets)/
  },

  // Phoenix paths configuration
  paths: {
    // Which directories to watch
    watched: ["scss"],

    // Where to compile files to
    public: ""
  },
  optimize: false,
  // Configure your plugins
  plugins: {
    babel: {
      // Do not use ES6 compiler in vendor code
      ignore: [/^(web\/static\/vendor\/js)/]
    },
    postcss: {
      processors: [
        require('autoprefixer')
      ]
    }
  }
};
