import Ember from 'ember';
import layout from '../templates/components/ember-markdown-section';

export default Ember.Component.extend({
  layout: layout,
  
  didInsertElement: function() {
    var that = this,
       
      // Fix indentation from the HTML source.
      content = that.$().html(),
      // Decode the entities so that markdown doesn't get messed up.
      // Ember.$('<div/>').html(content).text() - doesn't work as it removes any HTML that is embedded.
      // Replace ">" to get the quotes back...
      decodedContent = content.replace(/&gt;/gm, '>'),
      // Get the first line's spaces and replace an initial new line.
      spaces = decodedContent.replace(/\n/, '').match(/^\s+/g),
      // Replace the number of first line spaces on all lines following.
      spacesRegExp = new RegExp('^' + spaces, 'gm'),
      formattedContent = decodedContent.replace(spacesRegExp, '').replace(/^\s+|\s+$/g, '');
    
    formattedContent = marked(formattedContent);
    
    that.$().html(formattedContent);
  }
});
