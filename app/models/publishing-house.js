import DS from 'ember-data';
import Publisher from './publisher';

export default Publisher.extend({
  name: DS.attr('string'),
  discount: DS.attr('number'),
  books: DS.hasMany('book')
});
