import React from 'react'
function Navbar(props) {
  return (
    <div className={`navbar navbar-expand-lg m-1 navbar-${props.mode} bg-${props.mode}`}>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    </ul>
          <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
            <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
  )
}

export default Navbar