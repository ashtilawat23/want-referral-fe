import React from 'react';
import { Flex, Box } from '@chakra-ui/react'
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const SearchJobs = () => {
  return (
    <Flex direction='column' height='100vh'>
    <Flex flex='1'>
      <NavBar role='job-seeker'/>
      <Box width='100%' p={5}>
      <Flex direction='column' gap={10}>
      <Header title='Search Jobs'/>
      </Flex>
      </Box>
    </Flex>
    </Flex>
  )
}

export default SearchJobs;
