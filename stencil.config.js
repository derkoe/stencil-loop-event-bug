exports.config = {
  bundles: [
    { components: ['simple-loop'] },
  ],
  serviceWorker: false
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
