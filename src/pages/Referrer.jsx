import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Link,
  SimpleGrid,
  Badge,
} from '@chakra-ui/react';

const Referrer = () => {
  // Dummy navigation data
  const navItems = ['Dashboard', 'Referrals', 'Settings', 'Logout'];

  // Dummy applications data
  const applications = [
    { name: 'John Doe', position: 'Frontend Developer', status: 'Pending' },
    { name: 'Jane Smith', position: 'UI/UX Designer', status: 'Reviewed' },
    { name: 'Michael Brown', position: 'Project Manager', status: 'Interviewed' },
    { name: 'Emily Johnson', position: 'Data Scientist', status: 'Offered' },
  ];

  return (
    <Flex direction="column" h="100vh">
      <Box bg="teal.500" color="white" p={4}>
        <Heading>Referrer Dashboard</Heading>
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