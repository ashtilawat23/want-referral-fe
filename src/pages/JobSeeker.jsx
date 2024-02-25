import {
  Box,
  Flex,
  Heading,
  Text,
  HStack,
  VStack,
  SimpleGrid,
  Button,
  Tag,
  Card,
  CardBody,
  Stack,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Spacer
} from '@chakra-ui/react';
import { FaArrowRight } from "react-icons/fa";
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const JobSeeker = () => {

  const jobs = [
    {
      title: 'Frontend Developer',
      company: 'Company A',
      location: 'Remote',
      price: 70, // Example price
      tags: ['JavaScript', 'React', 'CSS'], // Relevant tags
      description: 'Join our dynamic team as a Frontend Developer, crafting responsive and visually compelling web experiences using modern JavaScript frameworks like React. Collaborate on diverse projects that make a real impact.'
    },
    {
      title: 'Backend Developer',
      company: 'Company B',
      location: 'New York',
      price: 80, // Example price
      tags: ['Node.js', 'Express', 'MongoDB'], // Relevant tags
      description: 'Seeking a Backend Developer to build robust server-side applications in a fast-paced environment. Leverage Node.js and MongoDB to create scalable, efficient backend services that power our innovative solutions.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Company C',
      location: 'San Francisco',
      price: 90, // Example price
      tags: ['JavaScript', 'React', 'Node.js', 'Express'], // Relevant tags
      description: 'We are looking for a Full Stack Developer capable of handling both front and back-end tasks. You will be developing full-fledged platforms using a stack that includes React, Node.js, and Express.'
    },
    {
      title: 'Data Scientist',
      company: 'Company D',
      location: 'Remote',
      price: 95, // Example price
      tags: ['Python', 'Machine Learning', 'Data Analysis'], // Relevant tags
      description: 'As a Data Scientist with our team, you will harness the power of data using Python and machine learning techniques. Your insights will drive decision-making and shape the future of our products.'
    }
  ];  

  const pickRandomColor = () => {
    const colors = ['red', 'cyan', 'purple', 'blue'];
  
    // Generate a random index based on the length of the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);
  
    // Return the color at the random index
    return colors[randomIndex];
  }

  return (
    <Flex direction="column" h="100vh">
      <Flex flex='1'>
        <NavBar role='job-seeker'/>
        <Box width='100%' p={10}>
          <Flex direction='column' gap={10}>
          <Header title='Job Seeker Dashboard'/>
          <SimpleGrid columns={1} spacing={5}>
            {jobs.map((job, index) => (
              <Card maxW='full'>
                <CardBody>
                  <HStack>
                  <Stack spacing='2' w='35%'>
                    <Heading size='md'>{job.title}</Heading>
                    <Text>{job.company}, {job.location}</Text>
                  </Stack>
                  <HStack w='50%'>
                      {job.tags.map((tag) => {
                        return <Tag key={index} colorScheme={pickRandomColor()}>{tag}</Tag>
                      })}
                  </HStack>
                  <Stack w='15%'>
                  <Button colorScheme='green' w='full' rightIcon={<FaArrowRight />}>
                      Get Referral
                    </Button>
                  </Stack>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default JobSeeker;