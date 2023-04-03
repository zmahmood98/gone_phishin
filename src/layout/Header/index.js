import React from 'react';
import { NavLink } from 'react-router-dom';

import './index.css';
import '../../assets/styles/govuk-frontend-4.5.0.min.css'
import crownLogo from '../../assets/images/govuk-logotype-crown.png' 

const Header = () => {
    return (
        <div className={"nav"}>
            <header class="govuk-header app-header" role="banner" data-module="govuk-header">
                <div class="govuk-header__container app-width-container app-header__container">
                    <div class="govuk-header__logo app-header__logo">
                    <a href="/" class="govuk-header__link govuk-header__link--homepage">
                        <span class="govuk-header__logotype">
                            <img class="crown" src={crownLogo} alt='UK Government Crown Logo'></img>
                            <span class="govuk-header__logotype-text">GOV.UK</span>
                        </span>
                        <span class="govuk-header__product-name"> Spam Detection Service</span>
                    </a>
                    </div>
                </div>
            </header>
            <nav class="app-navigation js-app-navigation govuk-clearfix">
                <ul class="app-navigation__list app-width-container">
                    <li class="app-navigation__list-item ">
                        <NavLink exact to="/"  activeClassName="active"><span class="govuk-link govuk-link--no-visited-state govuk-link--no-underline app-navigation__link js-app-navigation__link">Home</span></NavLink>
                    </li>
                    <li class="app-navigation__list-item ">
                        <NavLink to="/info" activeClassName="active"><span class="govuk-link govuk-link--no-visited-state govuk-link--no-underline app-navigation__link js-app-navigation__link">More Information</span></NavLink>
                    </li>
                </ul>
                
                
            </nav>
            
        </div>
    );
}

export default Header;

