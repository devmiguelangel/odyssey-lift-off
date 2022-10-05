import React from 'react';
// import { Router } from '@reach/router';
/** importing our pages */
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';
import Tracks from './tracks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Tracks />
  }
])

export default function Pages() {
  return (
    <RouterProvider router={router} />
  );
}
