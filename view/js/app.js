const helloController = {
  __name: 'HelloController',
  __ready(context) {
    console.log(this.view)
    const page = context.args.data.page;
    const options = context.args.data.options;
    this.view.register(page.id, page.innerHTML);
    this.view.update('#app', page.id, options);
  },
  
  '#btn click'() {
    this.view.update('#app', 'app', {
      time: new Date()
    });
  }
};

document.addEventListener('init', (event) => {
  const page = event.target;
  switch (page.id) {
  case 'app':
    h5.core.controller('body', helloController, {
      data: {
        options: {
          time: new Date()
        },
        page: page
      }
    });
    break;
  }
});

