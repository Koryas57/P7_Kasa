import React from "react"
import './NotFoundPage.scss'
import { NavLink } from "react-router-dom"

export const NotFoundPage:React.FC = () => {
  return (
    <>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/">
      <p>Retourner sur la page d’accueil</p>
      </NavLink>
    </>
  )
}

