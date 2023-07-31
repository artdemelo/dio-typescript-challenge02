import { Center, ChakraProvider, Input, Box } from '@chakra-ui/react'
import AppButton from './AppButton'
import { login } from '../services/login'
import { Layout } from './Layout'

interface ICard {
  id?: number
  paragraph?: string
  details?: string
}

export const Card = ({ id, paragraph, details }: ICard) => {
  return (
    <Layout>
      <ChakraProvider>
        <Box minHeight='100vh' backgroundColor='#9413dc' padding='25px'>
          <Box backgroundColor='#FFFFFF' borderRadius='25px' padding='15px'>
            <Center>
              <h1>Faça o login</h1>
            </Center>
            <Input placeholder='email' />
            <Input placeholder='password' />
            <Center>
              <AppButton onClick={login} colorScheme='teal' size='sm' width='100%' marginTop='5px' />
            </Center>
          </Box>
        </Box>
      </ChakraProvider>
    </Layout>
  )
}
