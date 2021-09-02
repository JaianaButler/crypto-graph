import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function NavButtons() {
  return(
    <div className='nav-buttons'>
      <div className='button-container'>
        <button className='sign-up'>SIGN UP</button>
        <button className='log-in'>LOG IN</button>
      </div>
    </div>
  );

}

function Header () {
  return (
    <header>
      <nav className='navbar'>

        <img className='logo' src='../cryptocoin.svg' />

        <div className='hamburger-container'>
          <button className='hamburger'>
          <div></div>
          <div></div>
          <div></div>
        </button>
        </div>
        
        <div className='nav-menu-container'>
          <ul className='nav-menu'>
            <a href='#'><li className='nav-item'>HOME</li></a>
            <a href='#'><li className='nav-item'>MARKET</li></a>
            <a href='#' className='active'><li className='nav-item'>TRADE</li></a>
            <a href='#'><li className='nav-item'>PRICING</li></a>
            <a href='#'><li className='nav-item'>HELP</li></a>
          </ul>
        </div>

        <NavButtons/>

      </nav>
      
    </header>
  );
}
function Content() {

}
function Footer () {

}
function App () {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);