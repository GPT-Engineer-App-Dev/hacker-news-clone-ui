import { Box, Flex, Heading, Text, VStack, Link, Button } from '@chakra-ui/react';
import { FaHackerNews } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex bg="orange.300" p={4} color="white" align="center" justify="space-between">
        <Flex align="center">
          <FaHackerNews size="2em" />
          <Heading ml={3}>Hacker News Clone</Heading>
        </Flex>
        <Button colorScheme="blackAlpha">Login</Button>
      </Flex>
      <VStack spacing={4} p={5}>
        <Text fontSize="2xl">Top Stories</Text>
        <Link href="#" p={2} w="full" bg="gray.100" _hover={{ bg: "gray.200" }}>
          Story 1: Example headline here
        </Link>
        <Link href="#" p={2} w="full" bg="gray.100" _hover={{ bg: "gray.200" }}>
          Story 2: Another interesting headline
        </Link>
        <Link href="#" p={2} w="full" bg="gray.100" _hover={{ bg: "gray.200" }}>
          Story 3: More news and updates
        </Link>
      </VStack>
    </Box>
  );
};

export default Index;