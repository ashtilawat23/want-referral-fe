import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from './components/AuthenticationButton';
import PrivateRoute from './components/PrivateRoute';
import JobSeeker from './pages/JobSeeker';
import Referrer from './pages/Referrer'; 
import Home from './pages/Home';

const App = () => {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <AuthenticationButton />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-seeker" element={<PrivateRoute component={JobSeeker} role="job_seeker" />} />
          <Route path="/referrer" element={<PrivateRoute component={Referrer} role="referrer" />} />
          <Route path="/unauthorized" element={<div>Unauthorized</div>} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;