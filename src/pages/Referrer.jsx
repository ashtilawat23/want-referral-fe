import React from 'react';
import {
  Flex, Box, SimpleGrid, Heading, Text, Badge
} from '@chakra-ui/react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const Referrer = () => {

  const applications = [
    { name: 'John Doe', position: 'Frontend Developer', status: 'Pending' },
    { name: 'Jane Smith', position: 'UI/UX Designer', status: 'Reviewed' },
    { name: 'Michael Brown', position: 'Project Manager', status: 'Interviewed' },
    { name: 'Emily Johnson', position: 'Data Scientist', status: 'Offered' },
  ];

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

  return (
    <Flex direction='column' height='100vh'>
      <Flex flex='1'>
        <NavBar role='referrer'/>
        <Box width='100%' p={5}>
          <Flex direction='column' gap={10}>
            <Header title='Referrer Dashboard'/>
            <SimpleGrid columns={2} spacing={10}>
              {applications.map((app, index) => (
                <Box key={index} bg="white" p={5} shadow="md" borderRadius="md">
                  <Heading size="md">{app.name}</Heading>
                  <Text fontSize="lg">{app.position}</Text>
                  <Badge colorScheme={getStatusColorScheme(app.status)}>{app.status}</Badge>
                </Box>
              ))}
            </SimpleGrid>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default Referrer;