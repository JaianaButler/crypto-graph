import React from 'react';
import ReactDOM from 'react-dom';
import './styles/reset.css';
import './styles/index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ResponsiveLine } from '@nivo/line'

const watchlistIcon = <FontAwesomeIcon id='watchlist-icon' icon={faStar} />
const lineData = [
  {
    id: "LineData",
    data: [
      {
        x: "Aug 5",
        y: 0.000006282
      },
      {
        x: "Aug 6",
        y: 0.000007275
      },
      {
        x: "Aug 7",
        y: 0.000007454
      }
      ,
      {
        x: "Aug 8",
        y: 0.000007632
      },
      {
        x: "Aug 9",
        y: 0.000007601
      },
      {
        x: "Aug 10",
        y: 0.000007736
      },
      {
        x: "Aug 11",
        y: 0.000008000
      },
      {
        x: "Aug 12",
        y: 0.000008091
      },
      {
        x: "Aug 13",
        y: 0.000008187
      },
      {
        x: "Aug 14",
        y: 0.000008422
      },
      {
        x: "Aug 15",
        y: 0.000009220
      },
      {
        x: "Aug 16",
        y: 0.000008091
      },
      {
        x: "Aug 17",
        y: 0.000007924
      },
      {
        x: "Aug 18",
        y: 0.000008401
      },
      {
        x: "Aug 19",
        y: 0.000008446
      },
      {
        x: "Aug 20",
        y: 0.000008153
      },
      {
        x: "Aug 21",
        y: 0.000008282
      },
      {
        x: "Aug 22",
        y: 0.000008137
      },
      {
        x: "Aug 23",
        y: 0.000007586
      },
      {
        x: "Aug 24",
        y: 0.000007300
      },
      {
        x: "Aug 25",
        y: 0.000006911
      },
      {
        x: "Aug 26",
        y: 0.000007376
      },
      {
        x: "Aug 27",
        y: 0.000007114
      },
      {
        x: "Aug 28",
        y: 0.000007044
      },
      {
        x: "Aug 29",
        y: 0.000006842
      },
      {
        x: "Aug 30",
        y: 0.000006757
      },
      {
        x: "Aug 31",
        y: 0.000007251
      },
      {
        x: "Sep 1",
        y: 0.000007072
      },
      {
        x: "Sep 2",
        y: 0.000007164
      },
      {
        x: "Sep 3",
        y: 0.000007343
      },
      {
        x: "Sep 4",
        y: 0.000007470
      },
      {
        x: "Sep 5",
        y: 0.000007471
      }
    ]
   }
  ];

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
    <div className="header-wrapper">
      <header>
        <div className='header-container'>
          <HeaderLeft />
          <HeaderMiddle />
         <HeaderRight />
        </div>
      </header>
    </div>
    
  );
}

function Graph() {
  return (
    <React.Fragment >
        <section className='graph-container'>
          <ResponsiveLine
            xScale={{ type: 'point' }}
            yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: false, reverse: false }}
            yFormat=" >-$.2r"
            axisTop={null}
            axisRight={null}
            axisBottom={null}
            axisLeft={null}
            enablePoints={false}
            margin={{
              top: 20,
              right: 0,
              bottom: 0,
              left: 0
            }}
            data={lineData}
            colors={{ scheme: 'accent' }}
            enableGridX={false}
            enableGridY={false}
            enableArea={true}
            areaOpacity={0.05}
            useMesh={true}
            crosshairType='cross'
            motionConfig="stiff"
            /*tooltip={point => {
              return<div>{lineData.data.y}</div>;
            }}*/
          />

        </section>
      
        <section className='stats-container'>
          
        </section>
    </React.Fragment >
  );
}
function Content() {
  return (
    <React.Fragment>
      <Header />

      <div className='main-content'>
        <Graph />
      </div>
    </React.Fragment>
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