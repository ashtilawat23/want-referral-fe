import React, { useState } from 'react';
import { Box, Flex, FormControl, FormLabel, Input, Image, Button, Text, Link, VStack } from '@chakra-ui/react';
import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const Profile = () => {
    const { user } = useAuth0();
    const [name, setName] = useState(user.name);
    const [desiredJobTitle, setDesiredJobTitle] = useState('');
    const [resumeLink, setResumeLink] = useState('');
  
    const handleSaveProfile = () => {
      // Implement save functionality
      // This could involve sending the updated profile information to your backend or Auth0's metadata
      console.log({ name, desiredJobTitle, resumeLink });
    };
  
    return (
        <Flex direction="column" h="100vh">
            <Flex flex='1'>
            <NavBar role='job-seeker'/>
            <Box width='100%' p={10}>
            <Flex direction='column' gap={10}>
            <Header title='Profile'/>
            <Flex direction="column" align="center" p={5}>
                <Image borderRadius="full" boxSize="150px" src={user.picture} alt={user.name} mb={4} />
                <Text fontSize="xl" fontWeight="bold">{user.email}</Text> {/* Displaying the user's email */}
                <VStack spacing={4} mt={4} width="full" maxW="md">
                <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input focusBorderColor='teal.500' value={name} onChange={(e) => setName(e.target.value)} />
                </FormControl>
                <FormControl id="desiredJobTitle">
                    <FormLabel>Desired Job Title</FormLabel>
                    <Input focusBorderColor='teal.500' value={desiredJobTitle} onChange={(e) => setDesiredJobTitle(e.target.value)} />
                </FormControl>
                <FormControl id="resumeLink">
                    <FormLabel>Resume Link (Google Drive)</FormLabel>
                    <Input focusBorderColor='teal.500' value={resumeLink} onChange={(e) => setResumeLink(e.target.value)} />
                </FormControl>
                <Button colorScheme="teal" onClick={handleSaveProfile}>Save Profile</Button>
                </VStack>
            </Flex>
            </Flex>
            </Box>
            </Flex>
        </Flex>
    );
  };
  
  export default Profile;
  