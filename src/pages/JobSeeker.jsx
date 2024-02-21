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
  Tag
} from '@chakra-ui/react';
import AuthenticationButton from '../components/AuthenticationButton';

const JobSeeker = () => {
  // Dummy navigation data
  const navItems = ['Home', 'About', 'Jobs', 'Contact'];

  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'Company A',
      location: 'Remote',
      price: 70, // Example price
      tags: ['JavaScript', 'React', 'CSS'] // Relevant tags
    },
    {
      title: 'Backend Developer',
      company: 'Company B',
      location: 'New York',
      price: 80, // Example price
      tags: ['Node.js', 'Express', 'MongoDB'] // Relevant tags
    },
    {
      title: 'Full Stack Developer',
      company: 'Company C',
      location: 'San Francisco',
      price: 90, // Example price
      tags: ['JavaScript', 'React', 'Node.js', 'Express'] // Relevant tags
    },
    {
      title: 'Data Scientist',
      company: 'Company D',
      location: 'Remote',
      price: 95, // Example price
      tags: ['Python', 'Machine Learning', 'Data Analysis'] // Relevant tags
    }
  ];

  const pickRandomColor = () => {
    const colors = ['red', 'green', 'teal', 'purple', 'blue'];
  
    // Generate a random index based on the length of the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);
  
    // Return the color at the random index
    return colors[randomIndex];
  }

  return (
    <Flex direction="column" h="100vh">
      <Box bg="teal.500" color="white" px={8} py={4}>
        <HStack width="100%">
          <Heading>Job Seeker Dashboard</Heading>
          <Spacer />
          <AuthenticationButton />
        </HStack>
      </Box>

      <Flex flex="1">
        <VStack bg="gray.100" w="15%" p={5} spacing={5} alignItems="flex-start">
          {navItems.map((item, index) => (
            <Link key={index} p={2}>
              {item}
            </Link>
          ))}
        </VStack>

        <Box flex="1" p={5}>
          <SimpleGrid columns={1} spacing={5}>
            {jobs.map((job, index) => (
              <Box key={index} boxShadow="lg" p="6" rounded="md" bg="white" border="1px" borderColor="teal.400">
                <Flex direction="row" justify="space-between" align="center">
                  <VStack align='start' width='20%'>
                    <Heading size="md">{job.title}</Heading>
                    <Text>{job.company}</Text>
                    <Text fontSize="sm">{job.location}</Text>
                  </VStack>
                  <HStack spacing={4} align='start' width='40%'>
                    {job.tags.map((tag) => (
                      <Tag key={tag} colorScheme={pickRandomColor()} size='md'>{tag}</Tag>
                    ))}
                  </HStack>
                  <VStack align='center'>
                    <Text fontSize="lg" fontWeight="bold">${job.price}</Text>
                    <Button colorScheme="teal" size='lg'>Want Referral</Button>
                  </VStack>
                </Flex>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
};

export default JobSeeker;