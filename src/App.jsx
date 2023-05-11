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




const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<Home />} />
    <Route
      path='about'
      element={<About />}
    />
    <Route
      path="shows"
      element={<Shows />}
    />
    <Route
      path='music'
      element={<Music />}
      errorElement={<Error />}
    /> 

    {/* <Route element={<AuthRequired />}>
      <Route path='host' element={<HostLayout />} >
        <Route
          index
          element={<HostDashboard />}
          loader={dashboardLoader}
        />
        <Route path='income' element={<Income />} />
        <Route path='reviews' element={<Reviews />} />
        <Route
          path='vans'
          element={<HostVans />}
          loader={hostVansLoader}
          errorElement={<Error />}
        />

        <Route
          path='vans/:id'
          element={<HostVanDetails />}
          loader={hostVanDetailLoader}
          errorElement={<Error />}
        >
          <Route index element={<HostVanInfo />} />
          <Route path="pricing" element={<HostVanPricing />} />
          <Route path="photos" element={<HostVanPhotos />} />
        </Route>
      </Route>

    </Route> */}

    {/* <Route path="*" element={<NotFound />} /> */}
  </Route>


))

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

