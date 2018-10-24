import Service from '@ember/service';
import { loc } from '@ember/string'
// instanciate new modal
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['alert-danger', 'custom-class-2'],
  onOpen: function() {
      console.log('modal open');
  },
  onClose: function() {
      console.log('modal closed');
  },
  beforeClose: function() {
      // here's goes some logic
      // e.g. save content before closing the modal
      return true; // close the modal
      //return false; // nothing happens
  }
});

export default Service.extend({
  showDialog(contentText)
  {
    var text ="<h1 class='custom-h1' > %@ </h1>"
    // set content
    modal.setContent(loc(text, [contentText] ) );

    // open modal
    modal.open();
  }
});
