import { VStack, Button, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ role }) => {
  let navItems;
  const navigate = useNavigate();

  if (role === 'job-seeker') {
    navItems = ['Job Dashboard', 'Search Jobs', 'Profile', 'Logout'];
  } else if (role === 'referrer') {
    navItems = ['My Referrals', 'Review Candidates', 'Post Referral', 'Settings'];
  }

  const handleNavigate = (item) => {
    // Check if the clicked item is "My Referrals"
    if (item === 'My Referrals') {
      navigate(`/${role}`); // Navigate to '/{role}'
    } else {
      // For other items, convert the item name to a navPath and navigate
      const navPath = `/${role}/${item.toLowerCase().replace(/\s+/g, '-')}`;
      navigate(navPath);
    }
  }

  return (
    <VStack bg='teal' w="15%" p={5} spacing={5} alignItems="flex-start">
      <Text fontSize="2xl" fontWeight="bold" mb={5} alignSelf="center" color='white'>
        Want Referral?
      </Text>
      {navItems.map((item, index) => (
        <Button 
            key={index} 
            color='white' 
            variant='ghost' 
            colorScheme="whiteAlpha" 
            _hover={{ backgroundColor: "white", color: "teal.500" }} 
            w="full"
            onClick={() => handleNavigate(item)}>
          {item}
        </Button>
      ))}
    </VStack>
  );
};

export default NavBar;