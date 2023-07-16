import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
  const error = useRouteError();
  console.log(error);
    return (
    <div>
      <h1>Opps Something went wrong</h1>
    </div>
  )
}
