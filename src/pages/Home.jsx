import { Box, Heading, Center } from '@chakra-ui/react';
import AuthenticationButton from '../components/AuthenticationButton';

const Home = () => {
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
