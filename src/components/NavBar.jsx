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
    <VStack w="20%" p={2} spacing={5} alignItems="flex-start">
      <Image src="/assets/want_ref_005.png" alt="Want Referral" w='100%' h='20%' objectFit="cover" mt={5} alignSelf='auto' />

      {navItems.map((item, index) => (
        <Button 
            key={index} 
            variant='ghost' 
            colorScheme="green" 
            w="full"
            onClick={() => handleNavigate(item)}>
          {item}
        </Button>
      ))}
    </VStack>
  );
};

export default NavBar;