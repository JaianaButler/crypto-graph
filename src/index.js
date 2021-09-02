import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';

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
      <div className='button-container'>
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
        <div className='header-top'>
          <img className='crypto-logo' src='../shibainu-icon.png' />
          <h1>SHIBA INU</h1>
          <h4>SHIB</h4>
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