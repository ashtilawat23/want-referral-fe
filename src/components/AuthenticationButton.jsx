import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@chakra-ui/react";

const AuthenticationButton = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return isAuthenticated ? (
    <Button variant='solid' colorScheme="whiteAlpha" _hover={{ backgroundColor: "white", color: "blue.500" }} onClick={() => logout({ logoutParams: { returnTo: window.location.origin }})}>
      Log Out
    </Button>
  ) : (
    <Button onClick={() => loginWithRedirect()}>
      Log In
    </Button>
  );
};

export default AuthenticationButton;