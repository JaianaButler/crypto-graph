import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveLine } from '@nivo/line'

const watchlistIcon = <FontAwesomeIcon id='watchlist-icon' icon={faStar} />
const data = [
  {
    "price": "$0.000006282",
    "date": "August 5"
  },
  {
    "price": "$0.000007275",
    "date": "August 6"
  },
  {
    "price": "$0.000007454",
    "date": "August 7"
  },
  {
    "price": "$0.000007632",
    "date": "August 8"
  },
  {
    "price": "$0.000007632",
    "date": "August 9"
  },
  {
    "price": "$0.000007632",
    "date": "August 10"
  },
  {
    "price": "$0.000007632",
    "date": "August 11"
  },
  {
    "price": "$0.000007632",
    "date": "August 12"
  },
  {
    "price": "$0.000007632",
    "date": "August 13"
  },
  {
    "price": "$0.000007632",
    "date": "August 14"
  },
  {
    "price": "$0.000007632",
    "date": "August 15"
  },
  {
    "price": "$0.000007632",
    "date": "August 16"
  },
  {
    "price": "$0.000007632",
    "date": "August 17"
  },
  {
    "price": "$0.000007632",
    "date": "August 18"
  },
  {
    "price": "$0.000007632",
    "date": "August 19"
  },
  {
    "price": "$0.000007632",
    "date": "August 20"
  },
  {
    "price": "$0.000007632",
    "date": "August 21"
  },
  {
    "price": "$0.000007632",
    "date": "August 22"
  },
  {
    "price": "$0.000007632",
    "date": "August 23"
  },
  {
    "price": "$0.000007632",
    "date": "August 24"
  },
  {
    "price": "$0.000007632",
    "date": "August 25"
  },
  {
    "price": "$0.000007632",
    "date": "August 26"
  },
  {
    "price": "$0.000007632",
    "date": "August 27"
  },
  {
    "price": "$0.000007632",
    "date": "August 28"
  },
  {
    "price": "$0.000007632",
    "date": "August 29"
  },
  {
    "price": "$0.000007632",
    "date": "August 30"
  },
  {
    "price": "$0.000007632",
    "date": "August 31"
  },
  {
    "price": "$0.000007632",
    "date": "September 1"
  },
  {
    "price": "$0.000007632",
    "date": "September 2"
  },
  {
    "price": "$0.000007632",
    "date": "September 3"
  },
  {
    "price": "$0.000007632",
    "date": "September 4"
  },
  {
    "price": "$0.000007632",
    "date": "September 5"
  }
];
const Line = ({ data }) => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 160, bottom: 50, left: 60 }}
        xScale={{ type: 'linear' }}
        yScale={{ type: 'linear', stacked: true, min: 0, max: 2500 }}
        yFormat=" >-.2f"
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        colors={{ scheme: 'spectral' }}
        lineWidth={1}
        enablePoints={false}
        pointSize={2}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={1}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        useMesh={true}
        gridXValues={[ 0, 20, 40, 60, 80, 100, 120 ]}
        gridYValues={[ 0, 500, 1000, 1500, 2000, 2500 ]}
        legends={[]}
    />
);



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

function HeaderLeft() {
  return (
    <div className='header-left'>
      <img className='crypto-logo' src='../shibainu-icon.png' />
        <h1>SHIBA INU</h1>
        <h4>SHIB</h4>
    </div>
  );
}
function HeaderMiddle() {
  return (
    <div className='header-middle'>
      <h1>$0.000007222</h1>
      <p>+6.8%</p>
    </div>
  );
}
function HeaderRight() {
  return (
    <div className='header-right'>
      <div className='header-button-container'>
        <button className='watchlist-button'>{watchlistIcon} <span>Watchlist</span></button>
      </div>
    </div>
  );
}
function Header() {
  return (
    <header>
      <div class='header-container'>
        <HeaderLeft />
        <HeaderMiddle />
        <HeaderRight />
      </div>
    </header>
  );
}

function Graph() {
  return (
    <section>
      
    </section>
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