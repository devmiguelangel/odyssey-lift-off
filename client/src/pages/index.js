import React from 'react';
// import { Router } from '@reach/router';
/** importing our pages */
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Tracks from './tracks';
import Track from './track'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tracks />
  },
  {
    path: "/track/:trackId",
    element: <Track />
  }
])

export default function Pages() {
  return (
    <RouterProvider router={router} />
  );
}
