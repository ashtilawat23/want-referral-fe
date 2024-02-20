import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  Spacer,
  Link,
  SimpleGrid,
  Button,
} from '@chakra-ui/react';
import AuthenticationButton from '../components/AuthenticationButton';

const JobSeeker = () => {
  // Dummy navigation data
  const navItems = ['Home', 'About', 'Jobs', 'Contact'];

  // Dummy job data
  const jobs = [
    { title: 'Frontend Developer', company: 'Company A', location: 'Remote' },
    { title: 'Backend Developer', company: 'Company B', location: 'New York' },
    { title: 'Full Stack Developer', company: 'Company C', location: 'San Francisco' },
    { title: 'Data Scientist', company: 'Company D', location: 'Remote' },
  ];

  return (
    <Flex direction="column" h="100vh">
      <Box bg="blue.500" color="white" p={4}>
        <HStack width="100%">
          <Heading>Job Seeker Dashboard</Heading>
          <Spacer /> 
          <AuthenticationButton />
        </HStack>
      </Box>

      <Flex flex="1">
        <VStack bg="gray.100" w="20%" p={4} spacing={4} alignItems="flex-start">
          {navItems.map((item, index) => (
            <Link key={index} p={2}>
              {item}
            </Link>
          ))}
        </VStack>

        <Box flex="1" p={5}>
          <SimpleGrid columns={2} spacing={10}>
            {jobs.map((job, index) => (
              <Box key={index} bg="white" p={5} shadow="md" borderRadius="md">
                <Heading size="md">{job.title}</Heading>
                <Text>{job.company}</Text>
                <Text fontSize="sm">{job.location}</Text>
                <Spacer />
                <Button mt={4} colorScheme="blue">
                  Apply
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
};

export default JobSeeker;