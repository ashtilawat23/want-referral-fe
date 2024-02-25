import React from 'react';
import { HStack, Spacer, Box, Heading, Avatar } from '@chakra-ui/react';
import AuthenticationButton from './AuthenticationButton';

const Header = ({ title }) => {

  return (
    <Box>
    <HStack width="100%">
      <Heading size='xl'>{title}</Heading>
      <Spacer />
      <AuthenticationButton />
    </HStack>
  </Box>
  );
};

export default Header;
