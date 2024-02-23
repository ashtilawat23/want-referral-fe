import React, { useState } from 'react';
import {
  Box, Flex, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField,
  Button, Heading, VStack, Link
} from '@chakra-ui/react';
import AuthenticationButton from '../components/AuthenticationButton';

const PostRefForm = () => {
  const [form, setForm] = useState({
    title: '',
    company: '',
    responsibilities: '',
    requirements: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending data to a server
    console.log(form); // For demonstration purposes
  };

  const navItems = ['Dashboard', 'Referrals', 'Post Referral', 'Settings', 'Logout']; // Adjust as needed

  return (
    <Flex direction="column" h="100vh">
      <Box bg="blue.500" color="white" p={4}>
        <Flex align="center" justify="space-between">
          <Heading>Referrer Dashboard</Heading>
          <AuthenticationButton />
        </Flex>
      </Box>

      <Flex flex="1">
        <VStack bg="gray.100" w="20%" p={4} spacing={4} alignItems="flex-start">
          {navItems.map((item, index) => (
            <Link key={index} p={2}>{item}</Link>
          ))}
        </VStack>

        <Box as="form" flex="1" p={5} onSubmit={handleSubmit}>
          <FormControl id="title" isRequired mb={4}>
            <FormLabel>Job Title</FormLabel>
            <Input name="title" value={form.title} onChange={handleChange} />
          </FormControl>

          <FormControl id="company" isRequired mb={4}>
            <FormLabel>Company</FormLabel>
            <Input name="company" value={form.company} onChange={handleChange} />
          </FormControl>

          <FormControl id="responsibilities" isRequired mb={4}>
            <FormLabel>Role Responsibilities</FormLabel>
            <Textarea name="responsibilities" value={form.responsibilities} onChange={handleChange} />
          </FormControl>

          <FormControl id="requirements" isRequired mb={4}>
            <FormLabel>Minimum Requirements</FormLabel>
            <Textarea name="requirements" value={form.requirements} onChange={handleChange} />
          </FormControl>

          <FormControl id="price" isRequired mb={4}>
            <FormLabel>Price for Referral ($)</FormLabel>
            <NumberInput min={0}>
              <NumberInputField name="price" value={form.price} onChange={handleChange} />
            </NumberInput>
          </FormControl>

          <Button mt={4} colorScheme="blue" type="submit">Submit Referral</Button>
        </Box>
      </Flex>
    </Flex>
  );
};

export default PostRefForm;
