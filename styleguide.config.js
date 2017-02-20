const path = require('path');

module.exports = {
 title: 'react kawaii',
 components: './lib/components/**/*.js',

 updateWebpackConfig(webpackConfig) {
     const dirs = [
                 path.resolve(__dirname, 'lib'),
                 path.resolve(__dirname, 'styleguide'),
             ];

     // Supply your own renderers and styles below
     webpackConfig.resolve.alias['rsg-components/StyleGuide/StyleGuideRenderer'] =
         path.join(__dirname, 'styleguide/components/StyleGuide');
     webpackConfig.resolve.alias['rsg-components/ReactComponent/ReactComponentRenderer'] =
         path.join(__dirname, 'styleguide/components/ReactComponent');

   webpackConfig.module.loaders.push(
     // Babel loader will use your project’s .babelrc
     {
         test: /\.(js|jsx)$/,
         exclude: /node_modules/,
         include: dirs,
         use: [
             'babel-loader'
         ]
     },
     // Other loaders that are needed for your components
     {
       test: /\.css$/,
       include: dirs,
       loader: 'style!css?modules&importLoaders=1'
   },
   {
       test: /\.scss$/,
       exclude: /node_modules/,
       use: [
           'style-loader',
           'css-loader',
           'sass-loader'
       ]
   }
 );
   return webpackConfig;
 },
};
