import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const watchlistIcon = <FontAwesomeIcon id='watchlist-icon' icon={faStar} />

function HamburgerSideNav() {
  return(
    <div className='hamburger-container'>
      <button className='hamburger'>
        <div></div>
        <div></div>
        <div></div>
      </button>
    </div>
  );
}
function NavMenu() {
  return (
    <div className='nav-menu-container'>
      <ul className='nav-menu'>
        <a href='#'><li className='nav-item'>HOME</li></a>
        <a href='#'><li className='nav-item'>MARKET</li></a>
        <a href='#' className='active'><li className='nav-item'>TRADE</li></a>
        <a href='#'><li className='nav-item'>PRICING</li></a>
        <a href='#'><li className='nav-item'>HELP</li></a>
      </ul>
    </div>
  );
}
function NavButtons() {
  return (
    <div className='nav-buttons'>
      <div className='nav-button-container'>
        <button className='sign-up'>SIGN UP</button>
        <button className='log-in'>LOG IN</button>
      </div>
    </div>
  );
}
function Navigation () {
  return (
    <div className='nav-container'>
      <nav className='navbar'>
        <img className='logo' src='../cryptocoin.svg' />
        <HamburgerSideNav />
        <NavMenu />
        <NavButtons />
      </nav>
    </div>
  );
}

function Header() {
  return (
    <header>
      <div class='header-container'>
        <div className='header-left'>
          <img className='crypto-logo' src='../shibainu-icon.png' />
          <h1>SHIBA INU</h1>
          <h4>SHIB</h4>
        </div>

        <div className='header-middle'>
          <h1>$0.000007222</h1>
          <p>+6.8%</p>
        </div>
        <div className='header-right'>
          <div className='header-button-container'>
            <button className='buy-button'>{watchlistIcon} WATCHLIST</button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Content() {
  return (
    <Header />
  );

}
function Footer () {

}
function App () {
  return (
    <React.Fragment>
      <Navigation />
      <Content />
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);