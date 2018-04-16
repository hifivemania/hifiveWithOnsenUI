ons.ready(() => {
  resolveVariable(['Tab1Controller', 'Tab2Controller'])
    .then(() => {
      const appController = {
        __name: 'AppController',
        _tab1Controller: Tab1Controller,
        _tab2Controller: Tab2Controller,
        __ready() {
          
        },
        '{rootElement} changeTitle'(context) {
          let back = '';
          if (context.evArg.back) {
            back = `<div class="left">
                      <ons-back-button id="backButton">Back</ons-back-button>
                    </div>`;
          }
          const outerHTML = ons.createElement(`
            <ons-toolbar id="toolbar">
              ${back}
              <div class="center">${context.evArg.title}</div>
            </ons-toolbar>
          `);
          this.$find('#toolbar').prop('outerHTML', outerHTML.outerHTML);
        },
        
        '#tabbar prechange'() {
          this.trigger('changeTitle', {
            title: "メイン",
            back: false
          });
        }
      };
      h5.core.controller('body', appController);
    });
});

const resolveVariable = (ary) => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      let bol = true;
      for (let index in ary) {
        if (!(ary[index] in window)) {
          bol = false;
          return resolveVariable(ary)
        }
      }
      if (bol) res();
    }, 100);
  })
}
