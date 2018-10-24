import Service from '@ember/service';
import $ from 'jquery';

var modal = new Custombox.modal({
  content: {
    effect: 'fadein',
    target: '#modal'
  }
});
export default Service.extend({
  showDialog()
  {
    $("<div id='modal'></div>").appendTo("body");
    // Open
    modal.open();
  }
});
