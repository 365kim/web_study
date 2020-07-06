module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
  env: {
    modules: {
      presets: ['@babel/preset-env'],
    },
  },
};
