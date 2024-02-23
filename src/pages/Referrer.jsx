import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Link,
  SimpleGrid,
  Spacer,
  Badge,
  Button
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import AuthenticationButton from '../components/AuthenticationButton';

const Referrer = () => {
  const navItems = ['Dashboard', 'Review Candidates', 'Post Referrals'];
  const navigate = useNavigate();

  const applications = [
    { name: 'John Doe', position: 'Frontend Developer', status: 'Pending' },
    { name: 'Jane Smith', position: 'UI/UX Designer', status: 'Reviewed' },
    { name: 'Michael Brown', position: 'Project Manager', status: 'Interviewed' },
    { name: 'Emily Johnson', position: 'Data Scientist', status: 'Offered' },
  ];

  const handlePostReferralClick = () => {
  
    // Navigate to the PostRefForm route
    navigate('/referrer/post-referral');
  };
   

  return (
    <Flex direction="column" h="100vh">
      <Box bg="blue.500" color="white" p={4}>
        <HStack width="100%">
          <Heading>Referrer Dashboard</Heading>
          <Spacer />
          <Button colorScheme="whiteAlpha" _hover={{ backgroundColor: "white", color: "blue.500" }} onClick={handlePostReferralClick}>Post Referral</Button>
          <AuthenticationButton />
        </HStack>
      </Box>


      <Flex flex="1">
        <VStack bg="gray.100" w="20%" p={4} spacing={4} alignItems="flex-start">
          {navItems.map((item, index) => (
            <Link key={index} p={2} onClick={handlePostReferralClick}>
              {item}
            </Link>
          ))}
        </VStack>

        <Box flex="1" p={5}>
          <SimpleGrid columns={2} spacing={10}>
            {applications.map((app, index) => (
              <Box key={index} bg="white" p={5} shadow="md" borderRadius="md">
                <Heading size="md">{app.name}</Heading>
                <Text fontSize="lg">{app.position}</Text>
                <Badge colorScheme={getStatusColorScheme(app.status)}>{app.status}</Badge>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
};

// Helper function to determine badge color based on application status
const getStatusColorScheme = (status) => {
  switch (status) {
    case 'Pending':
      return 'yellow';
    case 'Reviewed':
      return 'blue';
    case 'Interviewed':
      return 'orange';
    case 'Offered':
      return 'green';
    default:
      return 'gray';
  }
};

export default Referrer;