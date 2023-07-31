import { ChakraProvider, Box } from '@chakra-ui/react'

export const Header = () => {
  return (
    <ChakraProvider>
      <Box backgroundColor='orange'>Dio Bank</Box>
    </ChakraProvider>
  )
}
