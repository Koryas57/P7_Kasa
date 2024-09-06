import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
      <Link to="/">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      </Link>

  )
}

