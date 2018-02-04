exports.config = {
  bundles: [
    { components: ['simple-loop'] },
  ],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
