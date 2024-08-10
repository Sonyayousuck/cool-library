(function () {
    'use strict';

    class AbstractView{
        constructor(){
            this.app = document.getElementById('root');
        }
        setTitle(title){
            document.title = title;
        }
        render(){
            return;
        }
        destroy(){
            return;
        }
    }

    class mainView extends AbstractView{
        state = {
            list:[],
            loading: false,
            searchQuery: undefined,
            offset: 0
        }
        constructor(appState){
            super();
            this.appState = appState;
            this.setTitletitle ('Поиск книг');
        }

        render(){
            const main = document.createElement('div');
            main.innerHTML = `Найдено книг: ${this.appState.favorites.lenght}`;
            this.app.innerHTML = '';
            this.app.append(main);
        }
    }

    class App{
    routes = [
        {path:"", view: mainView}
    ];

    appState = {
        favorites:[]
    }

    constructor(){
        window.addEventListener('hashchange', this.route.bind(this));
        this.route();
    }

    route(){
        if(this.currentView){
            this.currentView.destroy();
        }
        const view = this.routes.find(r => r.path == location.hash).view;
    this.currentView = new view();
    this.currentView.render();
    }
    }


    new App();

})();
