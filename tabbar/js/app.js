const tab1Controller = {
  __name: 'Tab1Controller',
  
  '#btn click'() {
    ons.notification.alert('ここはタブ1です');
  }
};

const tab2Controller = {
  __name: 'Tab2Controller',
  
  '#btn click'() {
    ons.notification.alert('ここはタブ2です');
  }
};

document.addEventListener('init', (event) => {
  const page = event.target;
  switch (page.id) {
  case 'tab1':
    h5.core.controller('#tab1', tab1Controller);
    break;
  case 'tab2':
    h5.core.controller('#tab2', tab2Controller);
    break;
  }
});

