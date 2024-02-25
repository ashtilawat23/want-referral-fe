import React, { useState, useMemo } from 'react';
import { Flex, Box, Table, Thead, Tbody, Tr, Th, Td, Input, IconButton } from '@chakra-ui/react';
import { FaHeart } from 'react-icons/fa';
import NavBar from '../components/NavBar';
import Header from '../components/Header';

const SearchJobs = () => {
  const [filter, setFilter] = useState('');
  const [jobs, setJobs] = useState([
    { job_title: 'Frontend Developer', company: 'Company A', location: 'New York', experience: 3 },
    { job_title: 'Backend Developer', company: 'Company B', location: 'San Francisco', experience: 5 },
    { job_title: 'Full Stack Developer', company: 'Company C', location: 'Remote', experience: 4 },
    { job_title: 'Data Scientist', company: 'Company D', location: 'Chicago', experience: 2 },
  ]);
  const [favoriteJobs, setFavoriteJobs] = useState(new Set());

  const filteredJobs = useMemo(() => {
    return jobs.filter(job =>
      job.job_title.toLowerCase().includes(filter.toLowerCase()) ||
      job.company.toLowerCase().includes(filter.toLowerCase()) ||
      job.location.toLowerCase().includes(filter.toLowerCase()) ||
      job.experience.toString().includes(filter)
    );
  }, [filter, jobs]);

  const handleSaveJob = (jobId) => {
    setFavoriteJobs(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(jobId)) {
        newFavorites.delete(jobId);
      } else {
        newFavorites.add(jobId);
      }
      return newFavorites;
    });
  };

  return (
    <Flex direction='column' height='100vh'>
    <Flex flex='1'>
      <NavBar role='job-seeker'/>
      <Box width='100%' p={10}>
      <Flex direction='column' gap={10}>
      <Header title='Search Jobs'/>
      <Input 
            placeholder="Search by title, company, location, or experience" 
            value={filter} 
            onChange={(e) => setFilter(e.target.value)} 
            mb={5}
            focusBorderColor='teal.500'
          />
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Job Title</Th>
                <Th>Company</Th>
                <Th>Location</Th>
                <Th isNumeric>Min. Years of Experience</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredJobs.map((job, index) => (
                <Tr key={index}>
                  <Td>{job.job_title}</Td>
                  <Td>{job.company}</Td>
                  <Td>{job.location}</Td>
                  <Td isNumeric>{job.experience}</Td>
                  <Td isNumeric>
                  <IconButton
                    aria-label="Save job"
                    icon={<FaHeart />}
                    onClick={() => handleSaveJob(index)} // Assuming index is used as a simple identifier
                    colorScheme={favoriteJobs.has(index) ? "red" : "gray"}
                    variant={favoriteJobs.has(index) ? "solid" : "ghost"}
                  />
                </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
      </Flex>
      </Box>
    </Flex>
    </Flex>
  )
}

export default SearchJobs;
