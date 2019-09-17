module.exports = {
  name: 'zonky-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/zonky-ui',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
