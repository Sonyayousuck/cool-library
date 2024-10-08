import { AbstractView } from "../../common/view";
import onChange from 'on-change';
import { Header } from "../../components/header/header";

export class mainView extends AbstractView{
    state = {
        list:[],
        loading: false,
        searchQuery: undefined,
        offset: 0
    }
    constructor(appState){
        super();
        this.appState = appState;
        this.appState = onChange(this.appState, this.appStateHook.bind(this))
        this.setTitle ('Поиск');
    }

     appStateHook(path) {
      if (path = 'favourites'){
        console.log (path)
      }
    }
    render(){
        const main = document.createElement('div');
        this.app.innerHTML = '';
        this.app.append(main);
        this.renderHeader();
    }

    renderHeader(){
       const header = new Header(this.appState).render();
       this.app.prepend(header);
    }
}