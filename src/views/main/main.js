import { AbstractView } from "../../common/view";

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
        this.setTitletitle ('Поиск книг');
    }

    render(){
        const main = document.createElement('div');
        main.innerHTML = `Найдено книг: ${this.appState.favorites.lenght}`;
        this.app.innerHTML = '';
        this.app.append(main);
    }
}