import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import About from '../pages/About';
import Shows from '../pages/Shows';
import Music from '../pages/Music';
import Contact from '../pages/Contact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route
      path='about'
      element={<About />}
    >

    </Route>
    <Route
      path="shows"
      element={<Shows />}
    />
    <Route
      path='music'
      element={<Music />}
      errorElement={<Error />}
    /> 

    <Route
      path="contact"
      element={<Contact />}
    />

    {/* <Route path="*" element={<NotFound />} /> */}
  </Route>


))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

