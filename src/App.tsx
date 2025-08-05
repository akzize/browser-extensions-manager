import { useEffect } from 'react';
import './App.css'
import extensions from "./data/data.json";
import image from "./assets/images/logo.svg"
import DarkModeImg from "./assets/images/icon-moon.svg"
import LightModeImg from "./assets/images/icon-sun.svg"

function App() {
  useEffect(() => {
    console.log(extensions);

  }, [])
  return (
    <>
      <div className="container">
        <header>
          <div className="log">
            <img src={image} alt="" />
          </div>
          <div className="theme-switcher">
            <button>
              <img src={DarkModeImg} alt="" />
            </button>
          </div>
        </header>

        {/* Extensions filter */}
        <div className="filter">
          <h1>Extension List</h1>
          <div className="filters">
            <button>All</button><button>Active</button><button>Inactive</button>
          </div>
        </div>
        {/* Extensions list */}
        <div className="extensions">
          {
            extensions.map(({ logo, name, description }, index) => {
              const toggleId = "toggle-switch-" + index
              return (

                <div className="extension" key={index}>
                  <div className="top">
                    <div className="logo">
                      <img src={logo} alt="Logo" />
                    </div>
                    <div className="txt">
                      <h1>{name}</h1>
                      <p>{description}</p>
                    </div>
                  </div>
                  <div className="actions">
                    <button>Remove</button>
                    <label htmlFor={toggleId} className='switch'>
                      <input type="checkbox" id={toggleId} />
                      <span className='slider'></span>
                    </label>
                  </div>
                </div>
              )
            })
          }
        </div>

        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
          Coded by <a href="#">Zakaria Akziz</a>.
        </div>
      </div>
    </>
  )
}

export default App
