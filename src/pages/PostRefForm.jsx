import React, { useState } from 'react';
import {
  Box, Flex, FormControl, FormLabel, Input, Textarea, NumberInput, NumberInputField,
  Button, Heading
} from '@chakra-ui/react';
import NavBar from '../components/NavBar'; // Ensure the path is correct
import Header from '../components/Header'; // Ensure the path is correct

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
    console.log(form); // Handle form submission here
  };

  return (
    <Flex direction="column" minHeight="100vh">
      <Flex flex='1'>
      <NavBar role="referrer" />
      <Box width='100%' p={10}>
      <Flex flex="1" direction="column">
        <Header title='Post New Referral' />
        <Box as="form" flex="1" p={10} overflowY="auto" onSubmit={handleSubmit}>
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
          <FormControl id="price" isRequired mb={6}>
            <FormLabel>Price for Referral ($)</FormLabel>
            <NumberInput min={0}>
              <NumberInputField name="price" value={form.price} onChange={handleChange} />
            </NumberInput>
          </FormControl>
          <Button colorScheme="teal" type="submit">Submit Referral</Button>
        </Box>
      </Flex>
      </Box>
      </Flex>
    </Flex>
  );
};

export default PostRefForm;