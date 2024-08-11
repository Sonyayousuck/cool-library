import { DivComponent } from "../../common/div-components";
import './header.css';

export class Header extends DivComponent{
    constructor(appState){
        super();
        this.appState = appState;
    }

    render(){
        this.el.innerHTML = '';
        this.el.classList.add('header');
        this.el.innerHTML = `
        <div class = 'logo'>
        <img src = 'static/Logo.svg'>
        </div>
        <div class = 'panel'>
                <a class = 'search_panel-item'>
                <img src = 'static/Search-icon.svg'>
                 Поиск книг </a>

                <a class = 'favorites_ panel-item'> 
                <img src = 'static/favorites-icon.svg'>
                Избранное </a>

            <div class = 'favorites-count'>
                ${this.appState.favourites.lenght}
                    <img src = 'static/favorites-count-icon.svg'>
                </div>
            
        </div>
        `
        return this.el;
    }
}