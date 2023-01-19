import { Link } from "react-router-dom"
import "./BottomNav.css"
import { useLocation } from "react-router-dom"


import React from 'react'

export default function BottomNav() {
  const location = useLocation();
  if (location.pathname === "/landing" || location.pathname === "/login" || location.pathname === "/signup") {
  return null;
}

  return (
    <div>
    <nav className="bottomnav">
      <ul>
        <CustomLink to="/profile">
          <span className="material-symbols-outlined">
            person
          </span>
        </CustomLink>
        <CustomLink to="/">
          <span className="material-symbols-outlined">
            home
          </span>
        </CustomLink>
        <CustomLink to="/create-event">
          <span className="material-symbols-outlined">
            add_circle
          </span>
        </CustomLink>
        <CustomLink to="/schedule">
          <span className="material-symbols-outlined">
            calendar_today
          </span>
        </CustomLink>
        
        
      </ul>
    </nav>
  </div>
  )
}

function CustomLink({to, children, ...props}) {
  const path = window.location.pathname
  return (
      <li className={path === to ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}
