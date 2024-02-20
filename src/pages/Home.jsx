import React, { useEffect } from 'react';
import { Box, Heading, Center } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationButton from '../components/AuthenticationButton';

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated) {
      const roles = user && user['https://claims.wantreferral.com/roles'];
      const hasJobSeekerRole = roles && roles.includes('job_seeker');
      const hasReferrerRole = roles && roles.includes('referrer');

      if (hasJobSeekerRole) {
        navigate('/job-seeker');
      } else if (hasReferrerRole) {
        navigate('/referrer');
      }
      // Add more role checks if needed
    }
  }, [isAuthenticated, user, navigate]);

  return (
    <Box p={5}>
      <Center>
        <Heading mb={4}>Want Referral?</Heading>
      </Center>
      <Center>
        <AuthenticationButton />
      </Center>
    </Box>
  );
};

export default Home;