import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import PostRefForm from './pages/PostRefForm';
import SearchJobs from './pages/SearchJobs';
import PrivateRoute from './components/PrivateRoute';
import JobSeeker from './pages/JobSeeker';
import Referrer from './pages/Referrer'; 
import Home from './pages/Home';
import Profile from './pages/Profile'

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute role="job_seeker" />}>
          <Route path="/job-seeker" element={<JobSeeker />} />
          <Route path="/job-seeker/search" element={<SearchJobs/>} />
          <Route path="/job-seeker/profile" element={<Profile/>} />
        </Route>
        <Route element={<PrivateRoute role="referrer" />}>
          <Route path="/referrer" element={<Referrer />} />
          <Route path="/referrer/post-referral" element={<PostRefForm />} />
        </Route>
        <Route path="/unauthorized" element={<div>Unauthorized</div>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;