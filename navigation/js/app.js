const helloWorldController = {
  __name: 'HelloWorldController',
  
  '#btn click': function() {
    this.$find('#nav')[0].pushPage(
      'new.html',
      {
        data: {
          time: new Date()
        }
      }
    );
  }
};

const newController = {
  __name: 'NewController',
  __ready(context) {
    this.$find('#time').html(context.args.time);
  }
};

document.addEventListener('init', (event) => {
  const page = event.target;
  switch (page.id) {
  case 'new':
    h5.core.controller('#new', newController, page.data);
    break;
  case 'app':
    h5.core.controller('body', helloWorldController);
    break;
  }
});

