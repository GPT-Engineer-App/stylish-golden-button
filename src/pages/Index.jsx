import { useState } from "react";
import { Container, Button, VStack, Text, Box, Heading } from "@chakra-ui/react";
import { FaDice } from "react-icons/fa";

const Index = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bgGradient="linear(to-r, #1a2a6c, #b21f1f, #fdbb2d)">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" color="white" textShadow="2px 2px #000">
          Welcome to HighRoller Casino
        </Heading>
        <Text fontSize="xl" color="white" textShadow="1px 1px #000">
          Experience the thrill of the game
        </Text>
        <Box>
          <Button onClick={handleClick} size="lg" colorScheme="yellow" variant="solid" leftIcon={<FaDice />} boxShadow="0px 0px 20px rgba(255, 255, 255, 0.5)" _hover={{ boxShadow: "0px 0px 30px rgba(255, 255, 255, 0.7)" }}>
            {clicked ? "Good Luck!" : "Roll the Dice"}
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
