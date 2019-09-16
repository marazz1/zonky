module.exports = {
  name: 'zonky',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/zonky',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
