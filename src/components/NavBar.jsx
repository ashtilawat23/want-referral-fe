import { VStack, Button, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ role }) => {
  let navItems;
  const navigate = useNavigate();

  if (role === 'job-seeker') {
    navItems = ['My Jobs', 'Search', 'Profile', 'Settings'];
  } else if (role === 'referrer') {
    navItems = ['My Referrals', 'Review Candidates', 'Post Referral', 'Settings'];
  }

  const handleNavigate = (item) => {
    if (item === 'My Referrals' || item === 'My Jobs') {
      navigate(`/${role}`);
    } else {
      console.log("hit")
      const navPath = `/${role}/${item.toLowerCase().replace(/\s+/g, '-')}`;
      navigate(navPath);
    }
  }

  return (
    <VStack bg='teal' w="20%" p={2} spacing={5} alignItems="flex-start">
      <Image src="/assets/WantReferral.png" alt="Want Referral" w='100%' h='8%' objectFit="cover" my={5} alignSelf='auto' />

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