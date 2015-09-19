exports.config = {
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
    assets: 'img'
  },

  paths: {
    // Which directories to watch
    watched: ["scss"],

    // Where to compile files to
    public: ""
  },
  optimize: false,
  // Configure your plugins
  plugins: {
    postcss: {
      processors: [
        require('autoprefixer')
      ]
    }
  }
};
