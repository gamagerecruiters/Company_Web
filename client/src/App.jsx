import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";

import { useSelector } from "react-redux";
import { Footer, Navbar } from "./components";
import {
  About,
  AuthPage,
  Companies,
  CompanyProfile,
  FindJobs,
  JobDetail,
  UploadJob,
  UserProfile,
} from "./pages";
import Home from "./pages/Home/Homescreen/Home";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/contact";
import Journey from "./pages/Journey";

function Layout() {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();

  return user?.token ? (
    <Outlet />
  ) : (
    <Navigate to='/user-auth' state={{ from: location }} replace />
  );
}

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <main className='bg-[#f7fdfd]'>
      <Navbar />

      <Routes>
        <Route >
          {/* <Route
            path='/'
            element={<Navigate to='/find-jobs' replace={true} />}
          /> */}
          <Route path="/" element={<Home></Home>}> </Route>
          <Route path='/find-jobs' element={<FindJobs />} />
          <Route path='/companies' element={<Companies />} />
          <Route path={"/user-profile/:id?"} element={<UserProfile />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/journey' element={<Journey />} />

          <Route path={"/company-profile"} element={<CompanyProfile />} />
          <Route path={"/company-profile/:id"} element={<CompanyProfile />} />
          <Route path={"/upload-job"} element={<UploadJob />} />
          <Route path={"/job-detail/:id"} element={<JobDetail />} />
          <Route path={"/Testimonials"} element={<Testimonials />} />
        </Route>

        <Route path='/about-us' element={<About />} />
        <Route path='/user-auth' element={<AuthPage />} />
      </Routes>
      {user && <Footer />}
    </main>
  );
}

export default App;
