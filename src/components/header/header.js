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
            <div class = 'panel-item search_'>
                <a class = 'search-link'>
                <img src = 'static/Search-icon.svg'>
                 Поиск книг </a>
            </div>

            <div class = 'panel-item favorites_'>
                <a class = 'favorites-link'> 
                <img src = 'static/favorites-icon.svg'>
                Избранное </a>
            </div>

            <div class = 'favorites-count'>
                ${this.appState.favourites.lenght}
                    <img src = 'static/favorites-count-icon.svg'>
                </div>
            
        </div>
        `
        return this.el;
    }
}