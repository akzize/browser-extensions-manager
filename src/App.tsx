import { useEffect, useState } from 'react';
import './App.css'
import data from "./data/data.json";
import image from "./assets/images/logo.svg"
import DarkModeImg from "./assets/images/icon-moon.svg"
import LightModeImg from "./assets/images/icon-sun.svg"
import { Extension } from './Extension.jsx';

interface Extension {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

function App() {
  const [extensions, setExtensions] = useState([] as Extension[]);
  // const [filteredExtensions, setFilteredExtensions] = useState([] as Extension[]);
  const [selectedFilter, setSelectedFilter] = useState("all");
  useEffect(() => {
    let id = 1;
    const extensionsList = data.map((extension) => {
      return { id: id++, ...extension, isActive: false }
    })

    setExtensions(extensionsList)
    // setFilteredExtensions(extensionsList);
    console.log(extensionsList);
  }, [])

  // Derived value for filtered list
  const filteredExtensions = extensions.filter(ext => {
    if (selectedFilter === "active") return ext.isActive;
    if (selectedFilter === "inactive") return !ext.isActive;
    return true; // "all"
  });

  // handle extension remove
  function removeExtension(id: number) {
    const filteredExtensionList = extensions.filter((extension) => extension.id != id)
    setExtensions(filteredExtensionList);
    // setFilteredExtensions(filteredExtensionList)
  }

  function toggleExtension(id: number) {
    setExtensions(extensions.map((extension) => {
      return extension.id === id ? { ...extension, isActive: !extension.isActive } : extension
    }))
  }

  function toggleFilter(filter: string) {
    // let filteredList = extensions;
    // if (filter == "active") {
    //   filteredList = filteredList.filter((extension) => extension.isActive)
    // } else if (filter == "inactive") {
    //   filteredList = filteredList.filter((extension) => extension.isActive == false)
    // }

    setSelectedFilter(filter);
    // setFilteredExtensions(filteredList)
  }
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
            <button className={selectedFilter == "all" ? "active" : ""} onClick={() => toggleFilter("all")}>All</button>
            <button className={selectedFilter == "active" ? "active" : ""} onClick={() => toggleFilter("active")}>Active</button>
            <button className={selectedFilter == "inactive" ? "active" : ""} onClick={() => toggleFilter("inactive")}>Inactive</button>
          </div>
        </div>
        {/* Extensions list */}
        <div className="extensions">
          {
            filteredExtensions.map(({ id, logo, name, description, isActive }, index) => {
              const toggleId = "toggle-switch-" + index;
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
                    <button onClick={() => removeExtension(id)}>Remove</button>
                    <label htmlFor={toggleId} className='switch'>
                      <input type="checkbox" id={toggleId} checked={isActive} onChange={() => toggleExtension(id)} />
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
          Coded by <a href="https://github.com/akzize">Zakaria Akziz</a>.
        </div>
      </div>
    </>
  )
}

export default App
