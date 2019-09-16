module.exports = {
  name: 'zonky-http',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/zonky-http',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
