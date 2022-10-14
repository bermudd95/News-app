import React from 'react';
import './App.css';
import NewsList from './Components/news-list';
import Navbar from './Components/Navbar'; 
import Business from "./categories-js/Business"
import Entertainment from './categories-js/Entertainment';
import General from './categories-js/General'
import Health from './categories-js/Health'
import Science from './categories-js/Science'
import Sports from './categories-js/Sports'
import Technology from './categories-js/Technology'





function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = NewsList
      break
      case "/business":
        Component = Business
        break
        case "/entertainment":
          Component = Entertainment
          break
          case "/general":
            Component = General
          break
          case "/health":
            Component = Health
            break
            case "/science":
              Component = Science
              break
              case "/sports":
                Component = Sports
                break
                case "/technology":
                  Component = Technology
                  break
      
  }
  return (
  <>
    <div className="news-container">
      <Navbar />
      <div className="title-container">
        <h1>
          News.io
        </h1>
        <h3>
          The place to get your most up to date news
        </h3>
      </div>
      <Component />
    </div>
  </>
  );
}

export default App;
