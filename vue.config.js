module.exports = {                                                                                                                                                    
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.csv$/,
          loader: 'csv-loader',
          options: {
            dynamicTyping: true,
            header: true,
            skipEmptyLines: true
          }
        }
      ]
    }
  },
  lintOnSave: false,
  pluginOptions: {
    lintStyleOnBuild: false,
    stylelint: {}
  },
  publicPath:
<<<<<<< HEAD
    process.env.NODE_ENV === 'production' && process.env.REPO_NAME
      ? '/' +
        process.env.REPO_NAME +
        __dirname.substring(process.env.GITHUB_WORKSPACE.length)
      : '/'
=======
      process.env.NODE_ENV === 'production' && process.env.REPO_NAME
          ? '/' +
          process.env.REPO_NAME +
          __dirname.substring(process.env.GITHUB_WORKSPACE.length)
          : '/'
>>>>>>> 17ce0ffaa58122b8036adfa81941f66b191db841
};

