import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err = useRouteError();
    return (
        <div>
    <h1>
      error page it is
    </h1>
    <p>
        {err.status} : {err.statusText}
    </p>
    </div>  )
}

export default Error
