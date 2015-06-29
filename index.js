/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-markdown-section',
  
  included: function(app) {
    this._super.included(app);
    
    // Import the javascript.
    app.import(app.bowerDirectory + '/marked/marked.min.js');
  }
};
